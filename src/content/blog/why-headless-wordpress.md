---
author: Joe Trubenstein
pubDatetime: 2023-07-26T09:33:20Z
title: Make a Headless WordPress Site with Astro
postSlug: why-headless-wordpress
featured: true
ogImage: /assets/pumpkinhead.webp
tags:
  - coding
description: Learn how to unlock the true power of WordPress as a CMS by cutting off its head.
---

The convenience and simplicity of WordPress comes with a price. As plugins stack up - so do the issues. Let's explore how going "headless" just might be the solution for you.

![Astro Wordpress Headless](/assets/pumpkinhead.webp)

## Table of contents

## You might want a headless WordPress site if:

- You have a WordPress site that you love - but it's become slow, clunky, and potentially vulnerable to hacks.
- You are a seasoned [Jamstack](https://jamstack.org/) developer considering WordPress as a new back end to serve one (or several) static front ends.

### Prerequisites

- an existing WordPress site
- familiarity with JavaScript frameworks
- interest in GraphQL
- willingness to write TypeScript

### tl;dr

- [GitHub Repo with completed tutorial](https://github.com/JoeTrubenstein/Headless-WordPress-Astro-Tutorial)
- [GitHub Repo with stylized version](https://github.com/JoeTrubenstein/Astro-WordPress-Starter-Baldman)
- [Live demo of completed tutorial](https://headless-wordpress-astro-tutorial.netlify.app/)
- [Live demo of stylized version](https://astro-wordpress-starter.netlify.app/)

## The internet's longest reigning CMS

When it comes to the staying power of content management systems, WordPress has officially been around for longer than Phil Leotardo was in prison.

That's 20 years in case you haven't heard him mention it.

Today, WordPress powers a whopping <strong>40% of the entire internet</strong> - and for good reason.

- You need little or no coding ability to get started
- You can choose from a massive amount of free and paid themes
- You can accomplish almost anything with plugins

That's why for a lot of people - the rule of "if it ain't broke, don't fix it" applies quite sensibly to their WordPress site.

Unless you're looking for the best possible performance a website can deliver in 2023, the convenience of WordPress will probably outweigh its
limitations.

![Phil Leotardo explaining compromise](/assets/phil.webp)

### Where WordPress starts to struggle

The convenience and simplicity of WordPress comes with a price.

As time goes on, and plugins start to stack up - so do the issues.

- Load times can become extremely slow
- Security vulnerabilities can appear in old, unnecessary code
- Designs can become limited by the capabilities of pre-made themes

It's especially upsetting to invest a lot of time and energy into a WordPress site, only to find you're unable to share your hard work with the world in a fast, secure way (that also looks good).

## The Headless CMS

The act of making a WordPress site "headless" involves separating its content from its presentation layer. The goal of a headless CMS is to allow a user to organize all of their content in one place, and display it somewhere else.

As to why anyone would want to do that;

- It delivers content faster
- It protects against security vulnerabilities
- It provides total freedom over the front end

In other words, it can solve all three of the problems we listed above.

## Astro for a front end

For our attempt, we're going to create our own front end using [Astro](https://astro.build/).

Astro has been gaining popularity lately, not just as another JavaScript framework, but as an <strong> all in one web framework</strong> that lets you do some pretty cool stuff.

First we'll need a blank Astro project to get started.

```bash
npm create astro@latest
```

As soon as you run this command, an adorable ASCII robot will appear to guide you through the installation.

![Astro web framework adorable ascii helper robot](/assets/houston.webp)

- Choose the template with the sample files
- Install dependencies
- Choose TypeScript
- Choose Strict TypeScript

Then cd into your new project and take a look around.

Once you've familiarized yourself with how the dummy content is organized, we can get to work on replacing it with real content from our WordPress site.

## GraphQL for WordPress

Perhaps unsurprisingly, we'll need to download and install a plugin to get our WordPress site ready to use [GraphQL](https://graphql.org/).

WordPress has a built-in REST API, but we're going to use [The WPGraphQL Plugin](https://wordpress.org/plugins/wp-graphql/) for our purposes here.

Traditional REST APIs work by returning a shotgun blast of data. Oftentimes you'll get way more than you need from a given endpoint. Even worse, you might sort through a gigantic mess of a JSON object only to find that what you were looking for in the first place isn't even there.

GraphQL attempts to solve both of these problems of "over-fetching" and "under-fetching" by allowing you to receive only the very specific data that you requested. As they like to say, "Nothing more, nothing less."

By installing the WordPress GraphQL plugin, you'll instantly have access to a GraphQL IDE via your WordPress dashboard that demonstrates the point.

![WordPress GraphQL playground view from dashboard](/assets/gql.webp)

In the above example, I want to fetch all of my posts - but I only want to receive their titles, slugs, and excerpts.

If I want to receive things like tags, dates, or authors - I simply add those to my query. If there's something I decide I don't need after all, I can remove it from the query just as easily.

## Codegen for GraphQL and TypeScript

It is possible to complete this project by simply setting types to "any" - but that will pretty much defeat the purpose of using TypeScript.

We want to explicitly state what types (strings, numbers, booleans, etc) of data we're going to allow in specific parts of our application. "Type safety" means ensuring that we don't try to jam strings into places where numbers should go.

In other words - it prevents us from trying to force square pegs into round holes.

But figuring out the types for an entire WordPress site's GraphQL schema is a massively complex task.

Data is not simply returned in things like strings and integers - there is all kinds of stuff in there that I had previously never even seen written down before.

For example, I expected a post title to be typed like this:

```ts
title: string;
```

but it actually needed to be typed like this:

```ts
title?: Maybe<Scalars['String']['output']>;
```

Thankfully, there is a tool that can handle all of that for us.

[Codegen](https://the-guild.dev/graphql/codegen) works by traversing our entire GraphQL endpoint, figuring out what exists where - and generating two files for us.

- A .json file with our GraphQL schema
- A .ts file with all of the types

To get started, we just need to run the commands below.

Just be mindful not to install globally, as it can create issues down the road.

```bash
npm i graphql
npm i -D typescript @graphql-codegen/cli
```

Then we'll start Codegen's init process.

```bash
npx graphql-code-generator init
```

From this point, Codegen will walk you through the steps.

- Choose "other framework or vanilla JS"
- Provide your WordPress URL with its /graphql endpoint
- Choose TypeScript plugin
- Choose your output folder
- Choose to generate an introspection file

### Making authorized GraphQL requests

You don't <em>technically</em> need to set up authorization to complete the introspection.

The settings inside your WordPress dashboard provide a checkbox where you can "Enable Public Introspection." In such a case - Codegen will be able to access your GraphQL endpoint without any additional steps.

If your WordPress site is running in a development environment, that's probably OK - but since mine is already online, I'm going to set up some basic authorization.

- [Generating Application Passwords in WordPress](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/)
- [Testing Basic Auth Headers in Postman](https://www.postman.com/raimonika/workspace/postman-learning/request/17776042-4fa53ce5-548e-4db1-82e6-188fc5a0dec7)
- [Setting request headers in Codegen](https://the-guild.dev/graphql/codegen/docs/config-reference/schema-field)

Here is the Codegen config file which ultimately worked for me.

```ts
// ./codegen.ts
import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://[YOUR-WORDPRESS-URL]/graphql": {
        headers: {
          Authorization: import.meta.env.GRAPHQL_PASSWORD,
        },
      },
    },
  ],
  generates: {
    "src/graphql/schemaTypes.ts": {
      plugins: ["typescript"],
    },
    "src/graphql/schema.json": {
      plugins: ["introspection"],
    },
  },
};
export default config;
```

In theory you could hard-code the variables above, as this file is entirely separate from your build - and only used by Codegen to explore your GraphQL endpoint's schema.

But since I'm ultimately going to publish this - I'm using dotenv to access anything sensitive from a separate `.env` file.

Once the above runs successfully, take a look at the resulting `schemaTypes.ts` file. This should give us everything we need to keep TypeScript happy as we finally start working with our GraphQL data.

## Fetching data from WordPress

Now that our GraphQL endpoint is live, and our TypeScript types are all generated - let's try and actually fetch some WordPress data.

### Forming the request

Create a file to use as the base for different GraphQL queries that we'll run throughout our frontend. Note that our function is written to include the same authorization headers as the Codegen config file. By doing so, we can limit <strong>all</strong> requests to authorized users only - not just requests for introspection.

This setting can also be toggled in the GraphQL plugin settings from your WordPress dashboard. However, you shouldn't worry too much - as your GraphQL endpoint can only expose whatever WordPress already exposes publicly to begin with.

```ts
// src/graphql/wordpressQuery.ts
interface WPGraphQLParams {
  query: string;
  variables?: object;
}

export async function wpquery({ query, variables = {} }: WPGraphQLParams) {
  const res = await fetch(import.meta.env.GRAPHQL_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: import.meta.env.GRAPHQL_PASSWORD,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!res.ok) {
    console.error(res);
    return {};
  }

  const { data } = await res.json();
  return data;
}
```

### Writing our first query

Now let's try to get some of our WordPress content to show up in our Astro application.

Head to `src/pages/index.astro` and append the following to the top.

Just like before - all we want for now is titles, slugs, and excerpts.

```ts
// src/pages/index.astro
---
import Layout from "../layouts/Layout.astro";
import Card from "../components/Card.astro";

import { wpquery } from "../graphql/wordpressQuery";
import type { Post } from "../graphql/schemaTypes";

const data = await wpquery({
  query: `
  {
  posts {
    nodes {
      title
      slug
	  excerpt
    }
  }
}
  `,
});
---
```

## Using the fetched data

Without even thinking about styling anything - we want to make sure this works.

So on the same page, scroll down and delete all but one of the `<Card />` components from the "link-card-grid" provided.

Take the remaining card and wrap it with a `.map()` method to create a new card for each one of our retrieved posts.

```ts
// src/pages/index.astro
<ul role="list" class="link-card-grid">
  {data.posts.nodes.map((post: Post) => {
    return <Card href={post.slug} title={post.title} body={post.excerpt} />;
  })}
</ul>
```

But since the cards don't expect the types of props were passing them, we need to make a small amendment to their interface as well.

```ts
//  src/components/Card.astro
---
import type { Post } from "../graphql/schemaTypes";

interface Props {
	title: Post["title"];
	body: Post["excerpt"];
	href: Post["slug"];
}

const { href, title, body } = Astro.props;
---
```

If that worked, we should now see a new card for each one of our WordPress posts.
![WordPress GraphQL playground view from dashboard](/assets/cards.webp)

## Creating pages dynamically from posts

It's pretty cool that we can preview our posts like this, but if you click them - there's still nowhere for them to go.

To create new, full pages from each post - we can use Astro's `getStaticPaths()` function.

Make a copy of the index page in the same src/pages folder, and name it `[slug].astro`.

Then append the following code to the top.

```ts
// src/pages/[slug].astro
---
import Layout from "../layouts/Layout.astro";
import { wpquery } from "../graphql/wordpressQuery";

export async function getStaticPaths() {
  const data = await wpquery({
    query: `
    {
      posts {
        nodes {
          title
          slug
          excerpt
          content(format: RENDERED)
        }
      }
    }
    `,
  });

  return data.posts.nodes.map((post: any) => {
    return {
      params: { slug: post.slug },
      props: { post },
    };
  });
}

const { post } = Astro.props;
---
```

Then go down to the bottom and add a `<Fragment />` tag just before the end of the main div.

```ts
// src/pages/[slug].astro

// ****** //

    <h1>
      <span class="text-gradient">{post.title}</span>
    </h1>
    <Fragment set:html={post.content} />
  </main>
</Layout>
```

Doing so will create a new page for each individual post's content at the provided slug.

Note that the `content` field in our GraphQL query returns data with HTML tags still attached. We use `set:html` to avoid passing those unnecessary wrapper elements to our components.

The final result should look something like this:

- [Live demo of completed tutorial](https://headless-wordpress-astro-tutorial.netlify.app/)
- [GitHub Repo with completed tutorial](https://github.com/JoeTrubenstein/Headless-WordPress-Astro-Tutorial)

## The future is headless, maybe

If this post inspired you to learn more, or fanned the flames of an existing curiosity in Jamstack architecture - here is how I plan to use headless CMS projects going forward.

- Create an easily repeatable front end using Astro or some other JavaScript framework
- Decide on a single headless CMS to serve to a multitude of said front ends
- Build an empire of content-focused static sites
- ????
- profit

I'll be sure to tell everyone about it as soon as I figure it out.

Because when I'm not researching the absolute bleeding edge of web development - I'm sharing what I've learned with my friends and clients.

So if a headless WordPress site isn't the best answer for you - I just might be able to point you towards something that is.

[Get in touch with me today](/contact) to find out.
