---
layout: post
title: Getting started with Vue Rating component | Syncfusion
description:  Checkout and learn about Getting started with Vue Rating component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Rating Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Rating component.

To get started quickly with Vue Rating, check this video:

{% youtube "https://www.youtube.com/watch?v=Qutn1Z-_BFI" %}

## Setup the Vue 2 project

Easily set up a Vue 2 application using Vue CLI, which provides a reliable development environment, a streamlined project structure, and optimized builds compared to older setup tools. For detailed steps, refer to the Vue CLI [installation instructions](https://cli.vuejs.org/guide/installation.html).

> **Note:** To create a Vue 2 application using Vue CLI, refer to this [documentation](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-2-vue-cli) for more details.

To create a new Vue 2 application, run the following commands based on your preferred package manager:

```bash
npm install -g @vue/cli
vue create quickstart
```

or

```bash
yarn global add @vue/cli
vue create quickstart
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **Default ([Vue 2] babel, eslint)**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Navigate to the project directory:

```bash
cd quickstart
```

## Adding Vue Rating packages

To install the Rating package, use the following command:

```bash
npm install @syncfusion/ej2-vue-inputs --save
```
or

```bash
yarn add @syncfusion/ej2-vue-inputs
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.

Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/rating/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Rating component

The Rating code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div class='wrap'>
    <ejs-rating id="rating"></ejs-rating>
  </div>
</template>

<script>
import { RatingComponent } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
  name: "App",
  components: {
    "ejs-rating": RatingComponent
  },
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/rating/index.css";

.wrap {
  margin: 50px auto;
  text-align: center;
}
</style>

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```
        
{% previewsample "page.domainurl/code-snippet/rating/getting-started-cs1" %}