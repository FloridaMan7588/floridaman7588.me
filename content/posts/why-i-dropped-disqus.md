---
title: "Privacy and Why I Dropped Disqus"
date: 2024-04-11T12:35:00
author: "Cayden Haun"
comments: true
---

This was supposed to be my first new article on this site, but I accidentally discarded the changes in git...

## Disqus and Closed Web Standards

Disqus is a comment service for publications like this one, small or independent blogs and personal websites. All you have to do to implement comments with Disqus is embed their shortcode injection script that looks something like this:

```html
<div id="disqus_thread"></div>
<script>
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://(URL).disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
```

This isn't particularly scary, although unsafely embedding any random Javascript onto your website isn't ever a particularly good idea for many, *many* reasons. The scary part comes from, surprisingly, the Terms of Service for what we're injecting here. Disqus has a very normal looking Terms of Service for their software, stating what things can and can't be shared through their service. Although, one section in particular does stand out to me,

> *"Data Ownership. Licensor shall own all rights, title and interest in and to the comments, content, data and information that is displayed [...]"*

Just to break it down in my (NON-LAWYER!!) mind, I read this as Disqus can do whatever they want with you and your commenter's data, which might be fair as it's their service, but where I stop liking these terms is when I press ||Ctrl|| + ||Shift|| + ||I||
(note: The double pipes here will be replaced in the future, when I figure out how to write a plugin for remark.)
and visit my friend, the network tab. In the network tab of my browser I see multiple attempted connections to a few website, blocked by my PiHole or browsers adblock. These requests vary from mundane, such as ad servers, to one that was very interesting.

## Narrative.io

So I'm sure you're probably aware of the whole ChatGPT thing and the controversy around it. I won't go too much into it because I'd imagine you're quite bored of if at this point, but a lot of the controversy has come from Intellectual Property theft and copyright issues. Namely, OpenAI and other companies making these models have been caught or at the very least suspected of committing Intellectual Property crimes by training their Natural Language or Image Generation models on other peoples work. Now naturally, this is where all training data would come from, something made by another human and often taken without permission. These 'AI' companies have tried to justify their theft with the 3rd grade response of, "It's on the internet, so it must be free to use" but of course this isn't true. Even my site has a copyright notice at the bottom of every page! So where am I going with this, aren't plagirism and Intellectual Property issues [hbomberguy's](https://www.youtube.com/@hbomberguy) problem? Well, I do have an issue with companies using data aggregation tools to train LLMs based off of my (and my commenter's) data from this website. That's what the particularly interesting connection that Disqus was making pertained to. It was a referrer request to a service called Narrative.io, which advertises itself as a data aggregation platform for companies to train Large Language Models from their own data. I'm sure my website will be inevitably scraped by an OpenAI bot to train their latest GPT4 or 5 or whatever they're making now, but I will not have data from my site be directly sent to another service for the explicit use of training LLMs. I have completely removed Disqus from my site at this point, and will be closing my account with them soon.

## Privacy on the Modern Web

Privacy is a hard thing to come by in this modern age, and when you have massive companies seeking to train their Language Models off of your data, it's hard to even get away from the threat of having your Intellectual Property, ideas, or online appearance stolen and sold for profit. This isn't the only thing that companies are doing with this data, of course, but it is a huge issue right now, with Google, Microsoft, and the other FAANG giants all training their own Generative models off user data. It's really hard to escape, but that's why I'm writing this, hell that's why I'm even writing *here*. The idea of a blog has always appealed to me sure, but in this day and age where every 'free' service is selling your data for profit, I wanted to run it myself. So that's really what this is about, to tell you, the reader, to get away from FAANG and the closed web. I started using the fediverse for this reason to, to get away with huge companies owning their industry, forcing ads down your throat and selling your data anyways. All you need to do is use your Facebook, your Instagram, or (~X~) Twitter, even your Google account, just a little less. Maybe you need your social media still, so join some federated social media! Pixelfed replaces instagram, Mastodon (or anything similar) to replace your microblogging platform of choice, Lemmy to replace Reddit, even Peertube to replace YouTube. If you get away from the centralized net, your data will already be more private. Sure you're not a level 10 privacy nut like a lot of people, but you're a whole lot closer than someone using a Google account day to day, or Twitter.

Thanks for reading! This was supposed to be my first article, explaining the whole 'Comments are disabled' thing right below this paragraph, but I was still working on getting my site out in the first place so that didn't happen. I do have a couple new articles out already though, so I'm doing better than my last site, lol. Hope you have a good day or something like that, thanks for your time :grin:
