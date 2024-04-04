---
title: "I see your Termux Server, and Raise you my iPhone"
date: 2024-04-04T00:00:00
author: "Cayden Haun"
comments: true
---
Well my whole "I'm gonna write articles weekly" thing went out the window, so I'm replacing the article I left blank on my site with this...

## So what's the deal with smart phones?

Well a couple weeks back now I say this very interesting article and concept I've seen done before. That was an article from [The Thin Computer](https://thin.computer/index.php/2024/03/21/using-termux-on-android-for-self-hosting-yes-really/), a small blog like my own, although admittedly it's a wordpress blog lol, but anyways it seems to be a nice independent publication on self-hosting and the like. This article piqued my interest though, as it was something that I'd always wanted to try, that is, self-hosting on one of the most versatile devices that nearly everyone owns. That device, of course, being your smartphone, a computer many hundreds of times more powerful than the guidance systems that brought the US to the moon in the 60s. This device we carry everyday has a lot of untapped potential, and that has always been of interest to me. What's to stop you from running a website on your old phone? Keeping small backups of photos remotely stored on an iPhone that would otherwise be e-waste? Well it turns out, the sandbox.

## iPhones and Security

From the start of the iPhone's lineage, Apple designed it around a very 'secure' platform with sandboxes and other security features that hardened the device (well, for the most part) so well it was nearly impossible to run unsigned or unauthorized code on the devices. Naturally there are vulnerabilities in Apple's iOS of course, which leads to the creation of various 'Jailbreaks', or software designed to help escape the Sandbox and run any unsigned code you want. Currently the Jailbreak scene is rather dry as of recent, so for all of you wannabe iPhone home-labbers, much of this article will not work on modern devices. But anyway, after seeing The Thin Computer's article on their Android Web Server I decided to bust out my old iPhone and jailbreak it again. I run Android day to day now, but Jailbreaking was my scene a few years ago, my wannabe developer self trying to develop tweaks and the like, although I never did learn Swift. But anyways, I busted out my iPhone 6s Plus running iOS 13.7 and installed Odyssey, one of Coolstar's jailbreak apps.

![A 'mostly-stock' iPhone, freshly jailbroken](/images/blogs/projects/iphone-server/mostly-stock-iphone.jpg)

## The Jailbreak and Python

After Jailbreaking the device, on this particular version, you gain root access to the device which means you have freedom to do pretty much whatever you want with it. Usually this comes in the form of tweaks that people use to alter their phones appearance, much like installing a launcher on Android, but in this case we will be using some packages helpfully provided by the Procursus repo. For those who aren't familiar with Jailbreaking, Procursus is a nice bootstrap included with Odyssey and other Coolstar Jailbreaks thats designed to be 'Jailbreak-agnostic' meaning that anyone can use it. It bundles a lot of very useful utilities but the two of most use to us are `nginx`, `python3.9`, and `python3-psutil` which are compatible arm64 builds of these pieces of software. Our api data is provided by python, which I'm just using to scrape iOS for as much data as I can about the device, and nginx to serve as a reverse proxy in front of flask, which is used to serve the data. I installed these through Sileo, the included package management app for Odyssey, but if you want to get 1337 you can run ```apt install nginx python3.9``` over ssh or a local terminal instead of through the UI.

## Getting the data (!?)

So we've got our old phone dug out of the drawer, jailbroken it, and got some packages installed, what do we need to do to get the data from our iPhone? If you just want to run a web server on your iPhone, you don't need to do any of this and you can just skip to the web server section below. To fetch the data, I made a really basic python script that uses Flask to serve the API, which you can see below. This basically just uses the `platform` module and the `psutil` module to fetch basic data such as CPU info, RAM usage, and miscellaneous information like the battery percentage and charge status. As I mentioned, it's all served through Flask which fetches the data when you reload or visit the page. This is done as follows;

```python
from flask import Flask
from flask import render_template
import subprocess
from platform import platform, release, system, architecture, processor
import psutil

app = Flask(__name__)

@app.route('/')
def index():
    #Format a command to pass to subprocess to fetch system information
    uptimeExpression = r'''awk 'BEGIN { RS="[[:space:]]+|, "; } /^[0-9]+:[0-9]+(:[0-9]+)?$/ || /^[0-9]+( day)?$/ || /^[0-9]+\.[0-9]+$/ { print }' '''
    uptimeCommand = 'uptime | ' + uptimeExpression

    #Run the command as a subprocess on-the-fly
    uptime = subprocess.check_output(uptimeCommand, shell=True, text=True)

    #Break the output of the uptime command
    uptimeLines = uptime.strip().split('\n')
    uptimeInfo = {}
    for i, value in enumerate(uptimeLines):
        uptimeInfo[f'key_{i}'] = value

    #Calculate load averages based off of command results
    loadAvg = ((float(uptimeInfo['key_4']) + float(uptimeInfo['key_5']) + float(uptimeInfo['key_6'])) / 3)

    #Get various sensor information from psutil
    cpuCnt = psutil.cpu_count()
    usedMem = psutil.virtual_memory()[2]
    batteryPercent = psutil.sensors_battery()[0]
    batteryCharge = psutil.sensors_battery()[2]
    chargeStatus = "Null"
    if (batteryCharge == False):
        chargeStatus = "Unplugged"
    else:
        chargeStatus = "Charging"

    #Pass all the data to the template to display
    return render_template(
        'iphone.html', 
        platform=platform(), 
        release=release(), 
        system=system(), 
        arch=architecture()[0], 
        processor=processor(), 
        uptimeHrs=uptimeInfo['key_2'], 
        uptimeDays=uptimeInfo['key_1'], 
        loadAvg=loadAvg, cpuCount=cpuCnt, 
        usedRam=usedMem, 
        currentTime=uptimeInfo['key_0'],
        batteryPercent=batteryPercent, 
        chargeStatus=chargeStatus)
```

Basically all this script does is create a Flask app, scrape some data with a couple libraries, and then passes them all to a template. I'm not sharing this template because it's pretty bad (:skull_and_crossbones:) and it would be pretty simple to make a jinja2 template for y'all anyway. In the end, this returns a bunch of data that can be accessed on a little frontend I put together, just by running `flask run` to serve on [http://127.0.0.1:5000](http://127.0.0.1:5000).

![Our friendly iPhone 6s Plus, running our API](/images/blogs/projects/iphone-server/server-setup.jpg)

## Setting up the Web Server (Reverse Proxy)

From here we can configure Nginx to run as a reverse proxy in front of Flask to handle caching and the like, this will make our little API be able to handle the public net, or at the very least a little better. Flask suggests the following Nginx configuration;

```nginx
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://127.0.0.1:8000/;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Prefix /;
    }
}
```

This won't work straight away however, as our (Non-Production) Flask server runs on port 5000 instead of 8000. All we have to do is change the `proxy_pass http://127.0.0.1:8000/;` line to `proxy_pass http://127.0.0.1:5000/;` and add a couple lines to our python script to tell Flask it's behind a reverse proxy. You may need to install another Python package or two for this to work, but if you aren't using this to proxy Flask or are proxying a more production-ready WSGI server then you don't need to do this. You can see the change here;

```python
from flask import Flask
from flask import render_template
import subprocess
+++from werkzeug.middleware.proxy_fix import ProxyFix
from platform import platform, release, system, architecture, processor
import psutil

app = Flask(__name__)
+++app.wsgi_app = ProxyFix(
+++    app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_prefix=1
+++)
```

where the lines appended with `+++` should be added to your `app.py`. From here, we can start our flask API again, with `flask run` in the directory of our app, and start nginx with `nginx -g 'daemon off;'` which will provide logs in STDOUT for you to ogle at. That's about it, besides exposing this your site to the public internet, although I wouldn't recommend!! This is a pretty stupid thing to do and if you really wanna mess around with it, I'd leave it on your network.

## Security (Again!!)

So we end up back at the topic of security, and why you (probably) shouldn't do this. We all make mistakes, there could be some bug in this code, there could be some bug in Python or Flask, Nginx or whatever software your using. My point here is this, if you do this you absolutely shouldn't expose it to the public facing internet like me. A jailbroken device is inherently unsecure due to the compromises in the firmware of the device, and having a device on your network that's exposed directly to the internet is already a bad idea, I can't even imagine how much worse this is when the device is already vulnerable.

With that being said, check out the demo at [https://iphone.fm7588.me](https://fm7588.me/iphone), which is running securely behind not only a reverse proxy but a secure tunnel through Cloudflare. I try to take some precaution, lol.

I hope you enjoyed the article, it was a pretty interesting project for me and it definitely took a lot of work to figure out some of the data parsing, and it gave me an excuse to get code highlighting to work on my site lol. Have a nice day/night/whatever time it is in the great infinite right now, thank you.
