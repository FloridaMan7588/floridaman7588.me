---
title: "Full Project List" 
layout: projects
toc:
---

This is a full list of all projects I've ever worked on, or tried to work on. A lot of these are flops but some of them I still maintain. I am NOT A PRO and a lot of my projects are simple or bad. Please don't rely on anything I make or publish in a production environment. Thank you :)

### Maintained/WIP Projects
This is a list of projects I actively maintain, and actually put some more effort into overtime.

#### 1. [flathubⳆnet.waterfox.waterfox](https://fm7588.me/waterfox-github)
 This is my thing, my jam, my big one I spose you could say. I love the Waterfox Project and the amazing browser that they maintain, the only problem I have with it is the way it's published on Linux. They publish a tarball containing the binary and some libraries. That's it. It isn't convenient for the end user, and especially not for someone who doesn't want to or know how to manually integrate it into their DE. That's why I through this together, a hobbled together bundle of what I understand a Flatpak Manifest is. It is available on Flathub and can be downloaded on any (x86_64) desktop supporting Flatpak.

#### 2. [HaunfamilyⳆserver-stack](https://git.haunfamily.org/Haunfamily/server-stack)
 The server-stack project is my silly little home server management system. I started this project several years ago (despite the age of the repo) when I first got into homelabbing. I wasn't as well versed in all of the stuff you can do with Kubernetes and Docker in general, so I created this. A full management system for my web services, public and internal sites, and other important services I use. It's still a Work-In-Progress, and it will probably remain so for the forseeable future. Please do not use this on it's own. If you want to use this in your setup, follow the official documentation for each app in the stack instead of deploying this on its own.

 #### 3. [mochad-ha-addon](https://fm7588.me/mochad-github)
 mochad is an open source Linux TCP gateway daemon used to control an X10 ActiveHome system with a CM15A, CM15Pro, or CM19A controller. I have used the X10 ActiveHome system for a while, and while it is pretty nice on its own, it doesn't integrate tightly with other smart home solutions, namely Home Assistant. Mochad exists as a solution to this problem, enabling an X10 controller to interface with a Linux host via a TCP daemon. Mochad is rather out of date, however, and I didn't want to spin up an entire server just to run it. That's why I threw this together, a small Home Assistant Add-on to run mochad on any Supervised installation of Home Assistant.

#### 4. [floridaman7588.me](https://fm7588.me/website-github)
 And of course, I can't forget to mention this nice little website. I run this site with Hugo and a custom docker image in my server-stack project. The docker container for Hugo is a bit outdated, and whenever I try to build it myself it doesn't quite work, so I rolled my own based off of Nginx. Of course I didn't design the theme used on this site myself, that credit goes to [gurusabrish](https://github.com/gurusabarish) and their amazing [hugo-profile](https://github.com/gurusabarish/hugo-profile) theme. I have added some custom layouts myself, which can be found in this sites repo. 

### Archived and Non-Maintained Projects
These are projects that I did a bit of work on before, but don't actively work on or accept contributions for. These will not recieve support and shouldn't be used.

#### 1. docker-forge-server
 When I threw together this very simple docker image, the significantly better [itzg/docker-minecraft-server](https://github.com/itzg/docker-minecraft-server) didn't have the feature set I was looking for. It is now very full-featured and does everything my image does, but better.

#### 2. docker-bungeecord
 Similarly to the `docker-forge-server`, I wasn't aware of another much better image created by the same person as the docker-minecraft-server. That is [itzg/docker-bungeecord](https://github.com/itzg/docker-bungeecord/), which works quite well. 

#### 3. pihole-webhook
 Although this project will still work, and it does exactly what it's supposed to, I would strongly recommend against its use. It is NOT designed with *any* kind of security in mind, and isn't even the best way to interact with PiHole. I believe they have a rest API, but don't quote me on that.  

### Ambitions, failures, and ideas for the future
 Just like everyone else, I have some things that I wanted to do, but some of them might have fallen through, others might end up being done in the future. A lot of this kind of stuff will be covered in future blog posts, but here are some projects that are completely deprecated because I didn't do anything with them to begin with.

#### [TODO: Add this section]