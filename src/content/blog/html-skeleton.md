---
author: Joe Trubenstein
pubDatetime: 2023-07-18T07:33:58Z
title: Meet the skeleton that lives inside your HTML
postSlug: meet-the-skeleton-that-lives-inside-your-html
featured: true
draft: false
ogImage: /assets/skull.webp
tags:
  - coding
description: When you think of web development, do skeletons come to mind? As it turns out, all websites have a kind of underlying bone structure that keeps the whole thing together.
---

When you think of web development, do skeletons come to mind? As it turns out, all websites have a kind of underlying bone structure that keeps the whole thing together.

![HTML Skelton playing the trumpet](/assets/skull.webp)

## Table of contents

## A Brief History of HTML

I always tell the story of being force-taught HTML as a result of MySpace not having any other way to embed images where I wanted them. The once giant social media platform and predecessor to Facebook was an object of obsession for those of us turning 16 in 2006.

The only way to truly customize one's MySpace page was to [inject your own code](https://www.codecademy.com/resources/blog/myspace-and-the-coding-legacy/). By posting HTML through unprotected input fields you could achieve far more than the site owners had ever intended.

```html
<img
  src="me_with_lip_piercing.jpg"
  alt="future bald man"
  width="500"
  height="600"
/>
```

Though the man who invented HTML was far less concerned with things like eyeliner selfies and Blink 182 playlists.

HTML, or HyperText Markup Language, was first created in 1989 by a Tim Berners-Lee.

Berners-Lee came up with the idea for HTML while working at CERN, the European Organization for Nuclear Research. At the time, Berners-Lee was looking for a way to share scientific information - not cheat codes for Grand Theft Auto Vice City.

Since then, HTML has gone through several versions, each with new features and improvements. Today, HTML5 is the current version, and it includes something called semantic tags, which allow for the creation of more structured and meaningful websites.

## The Significance of Semantic HTML

Semantic HTML is a way of writing HTML that assigns a clearer meaning to the content on a webpage. Semantic tags describe the content they contain, making it easier for search engines as well as humans to understand exactly what's on the page.

Some semantic tags are named after body parts, such as `<header>`, `<body>`, and `<footer>`.

Thus we begin to anthropomorphize our website as having a kind of underlying bone structure that ties it all together.

## Enter the HTML skeleton

Think of an HTML skeleton as the bare minimum scaffolding for a web page. It is the rebar that's placed before the concrete is poured.

The HTML skeleton provides the basic foundation for the website by including the HTML tags that define layout, such as `<html>`, `<head>`, and `<body>`.

Without a skeleton, the site would simple collapse in on itself in a doughy mess of content. The skeleton provides structure and organization, making it easier to build and maintain the site. By using a consistent HTML skeleton across all pages of a website, you can ensure that your website is easy to navigate and that users can find the information they need quickly.

Imagine you are coding the website below. Even with little or no experience, you should be able to visualize the flow of the content.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Bald Man Brands</title>
  </head>
  <body>
    <header>
      <h1>Really Fast Websites</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h2>Is it me you're looking for?</h2>
      <p>Hire a bald man today!</p>
    </main>
    <footer>
      <p>Copyright © 2023</p>
    </footer>
  </body>
</html>
```

If you're feeling particularly adventurous, you can save the above snippet as a .html file and open it using Chrome. You'll have a functioning tiny website to tinker with.

## Putting some meat on the bones

If you do happen to open the code in a browser, you'll notice very quickly that it has virtually zero style or functionality.

To bring your skeleton to life, you'll need a whole lot of CSS, and (if you ask me) even more JavaScript. Some people will tell you otherwise, but friendly rivalries between tech stacks is just one of joys of modern-day web development.

That's the thing - there is no one correct approach to building websites in 2023.

However, a strong foundation of web dev fundamentals will set you on the path to success. A solid grasp on basic HTML, CSS, and JavaScript will put you in an advantageous position - even if you decide to work with page builders.

Just a little bit of coding knowledge can allow you to bypass the limitations of page builders, and create exactly what you want.

[Get in touch with me today](/contact) to find out how.
