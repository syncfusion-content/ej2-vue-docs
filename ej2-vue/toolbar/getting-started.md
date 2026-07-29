---
layout: post
title: Getting Started with Vue Toolbar component | Syncfusion
description:  Checkout and learn about Getting Started with Vue Toolbar component of Syncfusion Essential JS 2 and more details.
control: Getting Started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Toolbar Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Toolbar component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

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

## Adding Vue Toolbar packages

To install the Toolbar package, use the following command:

```bash
npm install @syncfusion/ej2-vue-navigations --save
```
or

```bash
yarn add @syncfusion/ej2-vue-navigations
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.
 
Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash Toolbartitle="npm" %}
 
npm install @syncfusion/ej2-material3-theme --save
 
{% endhighlight %}
{% endtabs %}
 
Then add the following CSS reference to the **src/App.vue** file:

{% tabs %}
{% highlight html Toolbartitle="Options API ~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/toolbar/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Toolbar component

The Toolbar code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html Toolbartitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-toolbar id="toolbar" width="200">
    <e-items>
      <e-item text="Cut" ></e-item>
      <e-item text="Copy" ></e-item>
      <e-item text="Bold" ></e-item>
      <e-item text="Underline"></e-item>
    </e-items>
  </ejs-toolbar>
</template>

<script>
import { ToolbarComponent, ItemDirective, ItemsDirective } from "@syncfusion/ej2-vue-navigations";

export default {
  name: "App",
  components: {
    "ejs-toolbar": ToolbarComponent,
    "e-items": ItemsDirective,
    "e-item": ItemDirective
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/toolbar/index.css";
</style>

{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/getting-started-cs1" %}

## Run the application

```bash
npm run dev
```

or

```bash
yarn run serve
```

{% previewsample "page.domainurl/code-snippet/toolbar/getting-started-cs1" %}

## Initialize the Toolbar using HTML elements

The Toolbar component can be rendered based on the given HTML element using `<ejs-toolbar>`. You need to follow the below structure of HTML elements to render the Toolbar inside the `<ejs-toolbar>` tag.

```
   <ejs-toolbar>   --> Root Toolbar Element
    <div>      --> Toolbar Items Container
       <div>   --> Toolbar Item Element
       </div>
    </div>
  </ejs-toolbar>
```
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-container-cs1" %}

## See Also

* [How to add Toggle Button](./how-to/add-toggle-button)

N> You can refer to our [Vue Toolbar](https://www.syncfusion.com/vue-ui-components/vue-toolbar) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Toolbar example](https://ej2.syncfusion.com/vue/demos/#/fabric/toolbar/default.html) that shows you how to render the Toolbar in Vue.