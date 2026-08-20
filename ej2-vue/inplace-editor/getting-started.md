---
layout: post
title: Getting Started with Vue In-place Editor | Syncfusion
description: Learn how to get started with the Syncfusion Vue In-place Editor control. Explore setup, features, examples, and customization options.
control: In-place Editor
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue In-place Editor

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue In-Place Editor component.

To get started quickly with the Vue In-Place Editor, check this video:

{% youtube "https://www.youtube.com/watch?v=uEAtX_6zyJ0" %}

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Vue | 2.6 or higher |
| Node.js | 16.0.0 or above |

### Vue supported versions

| Vue version | Minimum Syncfusion Vue In-Place Editor version |
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

## Adding Vue In-Place Editor package

To install the In-Place Editor package, use the following command:

```bash
npm install @syncfusion/ej2-vue-inplace-editor
```
or

```bash
yarn add @syncfusion/ej2-vue-inplace-editor
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> In-Place Editor component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.
 
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
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/inplace-editor/index.css";
</style>

{% endhighlight %}
{% endtabs %}

> You can also refer to the combined CSS file for all Syncfusion components in your application. For more information, see the documentation on [referring themes through npm packages](https://ej2.syncfusion.com/vue/documentation/appearance/theme#refer-themes-through-npm-packages).

## Adding the In-Place Editor with TextBox

Now, you can add the Vue In-Place Editor component to your **src/App.vue** file by importing it and configuring the `type` property. The [type](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputtype) property specifies the component integrated with the In-Place Editor for editing and is set to `Text` by default. When the type is **Text**, the In-Place Editor renders a **TextBox** component. 

Use the following code:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div class="control-group">
      <h3>Modify Basic Details</h3>
      <ejs-inplaceeditor
        id="element"
        type="Text"
        mode="Inline"
        value="Andrew"
        :model="textModel"
      ></ejs-inplaceeditor>
    </div>
  </div>
</template>

<script setup>
  import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';

  const textModel = {
    placeholder: 'Enter your name'
  };
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/inplace-editor/index.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div class="control-group">
      <h3>Modify Basic Details</h3>
      <ejs-inplaceeditor
        id="element"
        type="Text"
        mode="Inline"
        value="Andrew"
        :model="textModel"
      ></ejs-inplaceeditor>
    </div>
  </div>
</template>

<script>
  import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';
  
  export default {
    name: 'App',
    components: {
      'ejs-inplaceeditor': InPlaceEditorComponent,
    },
    data() {
      return {
        textModel: {
          placeholder: 'Enter your name',
        },
      };
    },
  };
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/inplace-editor/index.css";
</style>

{% endhighlight %}
{% endtabs %}

> You can further customize the In-Place Editor by using the [model](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor#model) property, which specifies the model object configuration for the integrated components like AutoComplete, DatePicker,NumericTextBox. 

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

{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs11" %}

> You can refer to our [Vue In-Place Editor](https://www.syncfusion.com/vue-components/vue-in-place-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Vue In-Place Editor example](https://ej2.syncfusion.com/vue/demos/#/material/inplace-editor/default.html) that shows how to render the In-Place Editor in Vue.

## See also

* [Getting Started with Vue UI Components with the Nuxt Framework](https://ej2.syncfusion.com/vue/documentation/getting-started/nuxt-3)
* [Getting Started with Vue UI Components with Vite and PNPM](https://ej2.syncfusion.com/vue/documentation/getting-started/pnpm)
* [Getting started with testing Vue UI components in the Vitest project](https://ej2.syncfusion.com/vue/documentation/getting-started/vitest)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI Components using direct scripts](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts)