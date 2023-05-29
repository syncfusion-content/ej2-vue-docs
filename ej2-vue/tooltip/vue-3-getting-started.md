---
layout: post
title: Vue 3 getting started with the Tooltip component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue Tooltip component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Tooltip Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion Vue Tooltip component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
? Project name: » my-project
```

2.Select `Vue` as the framework. It will create a Vue 3 project.

```bash
? Select a framework: » - Use arrow-keys. Return to submit.
Vanilla
> Vue
  React
  Preact
  Lit
  Svelte
  Others
```

3.Choose `JavaScript` as the framework variant to build this Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4.Upon completing the aforementioned steps to create the `my-project`, run the following command to install its dependencies:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion Vue components in the project, install the corresponding npm package.

This article uses the [Vue Tooltip component](https://www.syncfusion.com/vue-components/vue-tooltip) as an example. To use the Vue Tooltip component in the project, the `@syncfusion/ej2-vue-popups` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-popups --save
```

or

```bash
yarn add @syncfusion/ej2-vue-popups
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Tooltip component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

Follow the below steps to add the Vue Tooltip component using `Composition API` or `Options API`:

1.First, import and register the Tooltip component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { TooltipComponent as EjsTooltip  } from "@syncfusion/ej2-vue-popups";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { TooltipComponent  } from "@syncfusion/ej2-vue-popups";
//Component registration
export default {
  name: "App",
  components: {
    "ejs-tooltip": TooltipComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}
   
2.Add the component definition in template section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-tooltip content='Tooltip content' >
    <span>Show Tooltip</span>
  </ejs-tooltip>
 </template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-tooltip content='Tooltip content' target="#target">
        <div style="display: inline-block; position: relative; left: 50%;top: 100px;transform: translateX(-50%);">
          <button id='target' class="e-control e-btn e-lib">Show Tooltip</button>
      </div>
    </ejs-tooltip>
  </div>
</template>

<script setup>
  import { TooltipComponent as EjsTooltip  } from "@syncfusion/ej2-vue-popups";
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-tooltip content='Tooltip content' target="#target">
        <div style="display: inline-block; position: relative; left: 50%;top: 100px;transform: translateX(-50%);">
          <button id='target' class="e-control e-btn e-lib">Show Tooltip</button>
      </div>
    </ejs-tooltip>
  </div>
</template>

<script>
import { TooltipComponent  } from "@syncfusion/ej2-vue-popups";
//Component registration
export default {
  name: "App",
  components: {
    "ejs-tooltip": TooltipComponent
  },
  data() {
    return {
    };
  },
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
 </style>

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The output will appear as follows:

![vue-3-js-tooltip](./images/tooltip.PNG)

## Tooltip Positioning

Tooltips can be attached to 12 static locations around the target.
On initializing the Tooltip, you can set the position property with any one of the following values:

* `TopLeft`
* `TopCenter`
* `TopRight`
* `BottomLeft`
* `BottomCenter`
* `BottomRight`
* `LeftTop`
* `LeftCenter`
* `LeftBottom`
* `RightTop`
* `RightCenter`
* `RightBottom`

> By default, Tooltip is placed at the `TopCenter` of the target element.

In the following example, the `position` property set as `BottomCenter`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-tooltip content="Tooltip content" :position='position' target="#tooltip">
      <div id='container'>
          <ejs-button id="tooltip">Show tooltip</ejs-button>
      </div>
    </ejs-tooltip>
  </div>
</template>

<script setup>
  import { TooltipComponent as EjsTooltip  } from "@syncfusion/ej2-vue-popups";
  import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

  const position = 'BottomCenter';
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  #container {
    display: inline-block;
    position: relative;
    left: 50%;
    margin-top: 100px;
    transform: translateX(-50%);
    height: 200px;
  }

  #tooltip {
    display: inline-block;
    margin: 30px 130px 30px 50px;
  }
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-tooltip content="Tooltip content" :position='position' target="#tooltip">
      <div id='container'>
          <ejs-button id="tooltip">Show tooltip</ejs-button>
      </div>
    </ejs-tooltip>
  </div>
</template>

<script>
import { TooltipComponent  } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
//Component registration
export default {
  name: "App",
  components: {
    "ejs-tooltip": TooltipComponent,
    "ejs-button": ButtonComponent
  },
  data() {
    return {
      position: "BottomCenter"
    };
  },
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  #container {
    display: inline-block;
    position: relative;
    left: 50%;
    margin-top: 100px;
    transform: translateX(-50%);
    height: 200px;
  }

  #tooltip {
    display: inline-block;
    margin: 30px 130px 30px 50px;
  }
</style>

{% endhighlight %}
{% endtabs %}

![vue-3-js-tooltip](./images/tooltip-position.PNG)