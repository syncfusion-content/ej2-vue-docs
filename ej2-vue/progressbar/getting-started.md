---
layout: post
title: Getting started with Vue Progressbar component | Syncfusion
description:  Checkout and learn about Getting started with Vue Progressbar component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Progressbar Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Progressbar component

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

Below is the list of minimum dependencies required to use the progressbar component.

```javascript
    |-- @syncfusion/ej2-vue-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data: "*"
    |-- @syncfusion/ej2-svg-base
```

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

or

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
yarn run serve
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Progressbar component](https://www.syncfusion.com/vue-components/vue-progressbar) as an example. Install the `@syncfusion/ej2-vue-progressbar` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-progressbar --save
```
or

```bash
yarn add @syncfusion/ej2-vue-progressbar
```

> The **--save** will instruct NPM to include the chart package inside of the `dependencies` section of the `package.json`.

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

The progressbar has different themes. They are:
* Material
* Fabric
* Bootstrap
* High Contrast

import chart component CSS as given below in `<style>` section of the `App.vue` file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
<!-- Material theme used for this sample -->
@import "../node_modules/@syncfusion/ej2-vue-progressbar/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

Follow the below steps to add the Vue Progressbar component:

1\. First, import and register the Progressbar component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { ProgressBarComponent } from '@syncfuion/ej2-vue-charts';
export default {
  components: {
    'ejs-progressbar': ProgressBarComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Progressbar component with the [animation](https://ej2.syncfusion.com/vue/documentation/api/progressbar#animation) and [value](https://ej2.syncfusion.com/vue/documentation/api/progressbar#value) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div>
    <div id='loader'>LOADING....</div>
    <div id="container">
      <div class="row linear-parent">
        <div id="percentage" class="linear-progress">
          <ejs-progressbar
            id="percentage"
            type='Circular'
            :value='value'
            :animation="animation"
          >
          </ejs-progressbar>
        </div>
      </div>
    </div>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

3\. Declare the value for the `animation` and `value` properties in the `script` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
data: function() {
    return {
      value : 100,
      animation: {
        enable: true,
        duration: 2000,
        delay: 0
      },
    };
  }
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div>
    <div id='loader'>LOADING....</div>
    <div id="container">
      <div class="row linear-parent">
        <div id="percentage" class="linear-progress">
          <ejs-progressbar
            id="percentage"
            type='Circular'
            :value='value'
            :animation="animation"
          >
          </ejs-progressbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProgressBarComponent } from "@syncfusion/ej2-vue-progressbar";

export default {
  components: {
    'ejs-progressbar': ProgressBarComponent
  },
  data: function() {
    return {
      value : 100,
      animation: {
        enable: true,
        duration: 2000,
        delay: 0
      },
    };
  },
  provide: {},
  methods: {}
}
</script>
<style>
  #loader {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}
  #container {
    display: -webkit-box;
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
yarn  run serve
```

## Module Injection

Progressbar component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. feature service name and description as follows.

* `ProgressAnnotation` - Inject this provider to use Annotation.

This module should be injected to the provide section as follows,

 ```javascript
import { ProgressBarComponent, ProgressAnnotationService } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-progressbar': ProgressbarComponent
  },
  provide: {
    progressbar: [ProgressAnnotationService]
  }
};
 ```