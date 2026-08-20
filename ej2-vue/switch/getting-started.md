---
layout: post
title: Getting Started with Vue Toggle Switch Button | Syncfusion
description: Learn how to get started with the Syncfusion Vue Toggle Switch Button control. Explore setup, project configuration, theme installation, and how to add a switch in a Vue 2 project.
control: Getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue Toggle Switch Button

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Switch component.

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Vue | 2.6 or higher |
| Node.js | 16.0.0 or above |

### Vue supported versions

| Vue version | Minimum Syncfusion Vue Switch version |
| ------------- | ------------------------------------------- |
|[Vue v2.7](https://blog.vuejs.org/posts/vue-2-7-naruto) | 20.3.47 and above |

### Browser support

| Browser | Supported versions |
|---|---|
| Chrome | Latest |
| Firefox | Latest |
| Opera | Latest |
| Edge | 13+ |
| Internet Explorer (IE) | 11+ |
| Safari | 9+ |
| iOS Safari | 9+ |
| Android Browser / Chrome for Android | 4.4+ |
| Windows Mobile | IE 11+ |

> **Note:** Ensure that your development environment satisfies the required Vue, Node.js, and browser compatibility prerequisites before using Syncfusion® Vue UI components. For more information, see the [System Requirements](https://ej2.syncfusion.com/vue/documentation/system-requirements).

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

## Adding Vue Buttons package

To install the Buttons package, use the following command:

```bash
npm install @syncfusion/ej2-vue-buttons
```
or

```bash
yarn add @syncfusion/ej2-vue-buttons
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Button components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.
 
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
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/switch/index.css";
</style>

{% endhighlight %}
{% endtabs %}

> You can also refer to the combined CSS file for all Syncfusion components in your application. For more information, see the documentation on [referring themes through npm packages](https://ej2.syncfusion.com/vue/documentation/appearance/theme#refer-themes-through-npm-packages).

## Adding Switch component

You can add the Vue Switch component to your application by importing it into the `src/App.vue` file and defining it with the [checked](https://ej2.syncfusion.com/vue/documentation/api/switch/index-default#checked) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-switch checked=true></ejs-switch>
</template>

<script setup>
  import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
  import { enableRipple } from '@syncfusion/ej2-base';

  enableRipple(true);
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/switch/index.css";

  .e-switch-wrapper {
    margin: 18px;
  }
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-switch checked=true></ejs-switch>
</template>

<script>
  import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
  import { enableRipple } from '@syncfusion/ej2-base';

  enableRipple(true);

  export default {
    name: "App",
    components: {
      'ejs-switch': SwitchComponent
    }
  }
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/switch/index.css";

  .e-switch-wrapper {
    margin: 18px;
  }
</style>

{% endhighlight %}
{% endtabs %}

> The Vue Switch component supports custom text labels for its ON and OFF states through the [onLabel](https://ej2.syncfusion.com/vue/documentation/api/switch/index-default#onlabel) and [offLabel](https://ej2.syncfusion.com/vue/documentation/api/switch/index-default#offlabel) properties. This helps users easily identify the current state of the switch. Note that text labels are not supported in Material themes, and lengthy custom text is not recommended.

## Run the application

To run the application, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```
        
The output will appear as follows:

{% previewsample "page.domainurl/code-snippet/switch/getting-started-cs2" %}

> You can refer to our [Vue Switch](https://www.syncfusion.com/vue-components/vue-toggle-switch-button) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Switch example](https://ej2.syncfusion.com/vue/demos/#/material/button/switch.html) that shows how to render the Switch in Vue.

## See also

* [Getting Started with Vue UI Components with the Nuxt Framework](https://ej2.syncfusion.com/vue/documentation/getting-started/nuxt-3)
* [Getting Started with Vue UI Components with Vite and PNPM](https://ej2.syncfusion.com/vue/documentation/getting-started/pnpm)
* [Getting started with testing Vue UI components in the Vitest project](https://ej2.syncfusion.com/vue/documentation/getting-started/vitest)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI Components using direct scripts](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts)