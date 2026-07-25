---
layout: post
title: Vue 3 Getting Started with the Progress Bar Component | Syncfusion
description: Create a Vite-based Vue 3 project and integrate the Syncfusion Essential JS 2 Vue Progress Bar component using the Composition API or Options API.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Progress Bar Component in Vue 3

This article provides a step-by-step guide to creating a [Vite](https://vite.dev/) JavaScript project and integrating the Syncfusion<sup>®</sup> Vue Progress Bar component using either the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) or the [Options API](https://vuejs.org/guide/introduction.html#options-api).

The **Composition API** groups related logic into reusable functions. The **Options API** organizes component logic with options such as `data`, `methods`, and lifecycle hooks. Choose the API that best fits the application's structure.

## Prerequisites

Ensure that the development environment meets the [system requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Dependencies

The following are the minimum dependencies required to use the Vue Progress Bar component:

```
|-- @syncfusion/ej2-vue-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-vue-base
```

Only the `@syncfusion/ej2-vue-progressbar` package must be installed directly. Its required dependencies are installed automatically.

Use a package release compatible with Vue 3 and the Node.js version used by the project. Before upgrading, check the [Vue system requirements](https://ej2.syncfusion.com/vue/documentation/system-requirements) and package release notes.

## Set Up the Vite Project

Create a Vite project using either npm or yarn.

**npm**

```bash
npm create vite@latest my-app -- --template vue
```

**yarn**

```bash
yarn create vite my-app --template vue
```

If Vite prompts you to install dependencies and start the project immediately, select **No**. The Syncfusion package is installed in a later step.

Navigate to the project directory:

```bash
cd my-app
```

Install the project dependencies.

**npm**

```bash
npm install
```

**yarn**

```bash
yarn install
```

> **Note:** To create a TypeScript project, use `npm create vite@latest my-app -- --template vue-ts` or `yarn create vite my-app --template vue-ts`.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Package

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages are available on [npm](https://www.npmjs.com/search?q=ej2-vue).

Install the `@syncfusion/ej2-vue-progressbar` package using either npm or yarn.

**npm**

```bash
npm install @syncfusion/ej2-vue-progressbar
```

**yarn**

```bash
yarn add @syncfusion/ej2-vue-progressbar
```

> **Note:** For TypeScript projects, refer to [Vue 3 with the Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition) or [Vue 3 with the Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options).

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Progress Bar Component

Follow these steps to add the Vue Progress Bar component using the Composition API or Options API.

**Step 1:** Import and Register the Component

Import the Progress Bar component in **src/App.vue**.

In the Composition API example, alias the component import to the name used by the custom element in the template. Components imported in `<script setup>` are available directly in the template.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import {
  ProgressBarComponent as EjsProgressbar
} from '@syncfusion/ej2-vue-progressbar';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { ProgressBarComponent } from '@syncfusion/ej2-vue-progressbar';

export default {
  name: 'App',
  components: {
    'ejs-progressbar': ProgressBarComponent
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** Declare the Progress Bar Configuration

Define the type, value, and dimensions settings in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const type = 'Circular';
const value = 75;
const minimum = 0;
const maximum = 100;
const width = '250px';
const height = '250px';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
export default {
  data() {
    return {
      type: 'Circular',
      value: 75,
      minimum: 0,
      maximum: 100,
      width: '250px',
      height: '250px',
    };
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Step 3:** Define the Progress Bar in the Template

Add the Progress Bar component to the `template` section of **src/App.vue**.

The example uses the following properties:

- [`type`](https://ej2.syncfusion.com/vue/documentation/api/progressbar#type) specifies the Progress Bar shape. Supported values include `Linear` and `Circular`.
- [`value`](https://ej2.syncfusion.com/vue/documentation/api/progressbar#value) specifies the current progress value.
- [`minimum`](https://ej2.syncfusion.com/vue/documentation/api/progressbar#minimum) specifies the minimum scale value.
- [`maximum`](https://ej2.syncfusion.com/vue/documentation/api/progressbar#maximum) specifies the maximum scale value.
- [`width`](https://ej2.syncfusion.com/vue/documentation/api/progressbar#width) specifies the component width.
- [`height`](https://ej2.syncfusion.com/vue/documentation/api/progressbar#height) specifies the component height.

Keep `value` between `minimum` and `maximum`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-progressbar
      id="progressbar"
      :type="type"
      :value="value"
      :minimum="minimum"
      :maximum="maximum"
      :width="width"
      :height="height"
    ></ejs-progressbar>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

## Complete App.vue Example

Here is the summarized code for the above steps. Replace the contents of **src/App.vue** with either the Composition API or Options API example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-progressbar
      id="progressbar"
      :type="type"
      :value="value"
      :minimum="minimum"
      :maximum="maximum"
      :width="width"
      :height="height"
    ></ejs-progressbar>
  </div>
</template>

<script setup>
import {
  ProgressBarComponent as EjsProgressbar
} from '@syncfusion/ej2-vue-progressbar';

const type = 'Circular';
const value = 75;
const minimum = 0;
const maximum = 100;
const width = '250px';
const height = '250px';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-progressbar
      id="progressbar"
      :type="type"
      :value="value"
      :minimum="minimum"
      :maximum="maximum"
      :width="width"
      :height="height"
    ></ejs-progressbar>
  </div>
</template>

<script>
import { ProgressBarComponent } from '@syncfusion/ej2-vue-progressbar';

export default {
  name: 'App',
  components: {
    'ejs-progressbar': ProgressBarComponent
  },
  data() {
    return {
      type: 'Circular',
      value: 75,
      minimum: 0,
      maximum: 100,
      width: '250px',
      height: '250px'
    };
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## Run the Project

Save **src/App.vue**, and then start the development server using either npm or yarn.

**npm**

```bash
npm run dev
```

**yarn**

```bash
yarn run dev
```

Open the local URL displayed in the terminal, commonly `http://localhost:5173`, and verify the Progress Bar displays.

![Vue 3 circular Progress Bar](./images/vue3-progressbar-demo.png)

> **Sample:** Explore the [Vite-based Vue Progress Bar getting-started sample](https://github.com/SyncfusionExamples/getting-started-with-the-vue-progress-bar-component).

## Troubleshooting

- **The Progress Bar is not rendered.** Verify that the component import is aliased correctly in the Composition API or registered in `components` in the Options API. Confirm that valid width and height values are configured, and check the browser console for component or licensing errors.
- **The value is not displayed as expected.** Verify that `value` is numeric and falls between `minimum` and `maximum`.
- **The circular Progress Bar is clipped.** Increase the configured width and height or verify that the parent container does not restrict the component dimensions.
- **An import or runtime error is displayed.** Verify that `@syncfusion/ej2-vue-progressbar` is installed and that its version supports the project's Vue and Node.js versions.

For additional assistance, refer to the [Vue Progress Bar API documentation](https://ej2.syncfusion.com/vue/documentation/api/progressbar).

## See Also

- [Vue Progress Bar annotations](https://ej2.syncfusion.com/vue/documentation/progressbar/annotation)
- [Vue Progress Bar examples](https://ej2.syncfusion.com/vue/demos/#/material3/progress-bar/linear.html)
- [Getting Started with Vue UI Components using the Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
- [Getting Started with Vue UI Components using the Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)
