---
layout: post
title: Getting started with Vue Progressbar component | Syncfusion
description: Checkout and learn about Getting started with Vue Progressbar component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Progress Bar Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Progress Bar component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

Below is the list of minimum dependencies required to use the Progress Bar component.

```
  |-- @syncfusion/ej2-vue-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
```

## Setup the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. Follow these steps to install Vue CLI and create a new project:

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

![Vue 2 project](images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Progress Bar component](https://www.syncfusion.com/vue-components/vue-progressbar) as an example. Install the `@syncfusion/ej2-vue-progressbar` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-progressbar --save
```
or

```bash
yarn add @syncfusion/ej2-vue-progressbar
```

> The **--save** option will instruct NPM to include the Progress Bar package inside of the `dependencies` section of the `package.json`.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Progress Bar component:

1\. First, import and register the Progress Bar component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { ProgressBarComponent } from '@syncfusion/ej2-vue-progressbar';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { ProgressBarComponent } from '@syncfusion/ej2-vue-progressbar';

export default {
  name: "App",
  components: {
    'ejs-progressbar': ProgressBarComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Progress Bar component with the [animation](https://ej2.syncfusion.com/vue/documentation/api/progressbar#animation) and [value](https://ej2.syncfusion.com/vue/documentation/api/progressbar#value) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="container">
    <ejs-progressbar
      id="percentage"
      type='Circular'
      :value='value'
      :animation="animation"
    >
    </ejs-progressbar>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

3\. Declare the value for the `animation` and `value` properties in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const value = 100;
const animation = {
  enable: true,
  duration: 2000,
  delay: 0
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
export default {
  data() {
    return {
      value: 100,
      animation: {
        enable: true,
        duration: 2000,
        delay: 0
      }
    };
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="container">
    <ejs-progressbar
      id="percentage"
      type='Circular'
      :value='value'
      :animation="animation"
    >
    </ejs-progressbar>
  </div>
</template>

<script setup>
import { ProgressBarComponent } from "@syncfusion/ej2-vue-progressbar";

const value = 100;
const animation = {
  enable: true,
  duration: 2000,
  delay: 0
};
</script>

<style>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="container">
    <ejs-progressbar
      id="percentage"
      type='Circular'
      :value='value'
      :animation="animation"
    >
    </ejs-progressbar>
  </div>
</template>

<script>
import { ProgressBarComponent } from "@syncfusion/ej2-vue-progressbar";

export default {
  name: "App",
  components: {
    'ejs-progressbar': ProgressBarComponent
  },
  data() {
    return {
      value: 100,
      animation: {
        enable: true,
        duration: 2000,
        delay: 0
      }
    };
  }
}
</script>

<style>
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
yarn run serve
```

## Module Injection

The Progress Bar component features are organized into individual feature-wise modules. To use specific features such as annotations, you must inject the corresponding feature service. Below is the available feature service:

* `ProgressAnnotation` - Inject this service to enable annotations on the Progress Bar.

To inject the required module, add it to the `provide` section of your component as shown below:

```javascript
import { ProgressBarComponent, ProgressAnnotationService } from "@syncfusion/ej2-vue-progressbar";

export default {
  components: {
    'ejs-progressbar': ProgressBarComponent
  },
  provide: {
    progressbar: [ProgressAnnotationService]
  }
};
 ```

## See also

* [Getting Started with Vue 3 Progress Bar](vue-3-getting-started)
* [Getting Started with Vue 3 using Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
* [Getting Started with Vue 3 using Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)