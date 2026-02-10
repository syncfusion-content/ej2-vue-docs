---
layout: post
title: Vue 3 getting started with the Progressbar component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue Progressbar component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Progress Bar Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Progress Bar component. The guide demonstrates both the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) and [Options API](https://vuejs.org/guide/introduction.html#options-api) approaches, allowing you to choose the pattern that best suits your project.

## Understanding Vue 3 Component APIs

Vue 3 offers two approaches for organizing component logic:

- **Composition API**: A modern, function-based approach that enables flexible code organization and easier logic reuse through composite functions. Ideal for complex components and large-scale applications.
- **Options API**: The traditional, object-based approach where component logic is organized into defined options such as data, methods, computed properties, and life cycle hooks. Familiar to developers from Vue 2 and suitable for simpler components.

Both APIs are fully supported and can be mixed within a single project based on your preferences and use case.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev). To create a new Vite project, use one of the commands specific to NPM or Yarn:

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

This command initiates an interactive setup process. Follow the prompts as shown below:

1. **Define the project name**: Specify the name of the project as `my-project` (or choose a name of your preference).

```bash
? Project name: » my-project
```

2. **Select the framework**: Choose `Vue` to create a Vue 3 project.

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

3. **Choose the language variant**: Select `JavaScript` to build this Vite project using JavaScript (instead of TypeScript).

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4. **Install dependencies**: After the project is created, navigate to the project directory and install the required dependencies.

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Your Vite project is now ready with default Vue 3 configuration. Next, you'll add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in your project, install the corresponding npm package.

This guide uses the [Vue Progress Bar component](https://www.syncfusion.com/vue-components/vue-progressbar). Install the package using the following command:

```bash
npm install @syncfusion/ej2-vue-progressbar --save
```

or

```bash
yarn add @syncfusion/ej2-vue-progressbar
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Progress Bar component using `Composition API` or `Options API`:

1.First, import and register the Progress Bar component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { ProgressBarComponent as EjsProgressbar } from "@syncfusion/ej2-vue-progressbar";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { ProgressBarComponent } from "@syncfusion/ej2-vue-progressbar";
//Component registration
export default {
  name: "App",
  components: {
    "ejs-progressbar": ProgressBarComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2.In the `template` section, define the Progress Bar component with the [dataSource] property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-progressbar id="percentage" :type='type' :showProgressValue='showProgressValue' :value='value' :animation="animation">
    </ejs-progressbar>
</template>

{% endhighlight %}
{% endtabs %}

3.Declare the values for the `dataSource` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const type = 'Circular';
const showProgressValue = 'true';
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
data() {
    return {
        type: 'Circular',
        showProgressValue: 'true',
        value: 100,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0
        }
    };
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the complete code for the **src/App.vue** file with both API approaches:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <ejs-progressbar id="percentage" :type='type' :showProgressValue='showProgressValue' :value='value' :animation="animation">
    </ejs-progressbar>
</template>

<script setup>
import { ProgressBarComponent as EjsProgressbar } from "@syncfusion/ej2-vue-progressbar";

const type = 'Circular';
const showProgressValue = 'true';
const value = 100;
const animation = {
        enable: true,
        duration: 2000,
        delay: 0
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <ejs-progressbar id="percentage" :type='type' :showProgressValue='showProgressValue' :value='value' :animation="animation">
    </ejs-progressbar>
</template>

<script>
import { ProgressBarComponent } from "@syncfusion/ej2-vue-progressbar";
//Component registration
export default {
  name: "App",
  components: {
    "ejs-progressbar": ProgressBarComponent
  },
    data() {
    return {
        type: 'Circular',
        showProgressValue: 'true',
        value: 100,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0
        }
    };
 },
};
</script>

{% endhighlight %}
{% endtabs %}

## Run the project

To run the application in development mode, use the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The development server will start, typically at `http://localhost:5173`. Open this URL in your browser to view the circular Progress Bar with animation.

The output will appear as follows:

![vue3-progressbar-demo](./images/vue3-progressbar-demo.png)

> **Sample**: [vue-3-progressbar-getting-started](https://github.com/SyncfusionExamples/vue3-progressbar-getting-started).

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition.md)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options.md)