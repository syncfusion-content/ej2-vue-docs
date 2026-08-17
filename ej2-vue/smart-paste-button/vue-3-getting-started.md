---
layout: post
title: Getting Started with Vue Smart Paste Button | Syncfusion
description: Learn how to get started with the Syncfusion Vue Smart Paste Button component. Explore setup, features, examples, and customization options.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue Smart Paste Button

The `Smart Paste Button` is a user interface component designed to simplify and improve the experience of pasting text into form fields. It comes with smart features such as automatic text formatting, validation, and integration with various form controls. It is especially useful in applications where users frequently paste text from other sources and where data consistency is important.

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Smart Paste Button component using either the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) or the [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

* [OpenAI](https://github.com/syncfusion/smart-ai-samples/blob/master/typescript/README.md#openai) or [Azure OpenAI Account](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource)
* [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Using one of the above commands will lead you to set up additional configurations for the project as follows:

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

Now that `my-project` is ready to run with default settings, let's add the Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in the project, install the corresponding npm package.

This article uses the [Vue Smart Paste Button component](https://www.syncfusion.com/vue-components/vue-smart-paste-button) as an example. To use the Vue Smart Paste Button component in the project, the `@syncfusion/ej2-vue-buttons` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-buttons --save
```

or

```bash
yarn add @syncfusion/ej2-vue-buttons
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component themes can be applied using CSS or SASS from the [npm theme packages](https://ej2.syncfusion.com/vue/documentation/appearance/theme#theme-packages). Additionally, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio).

This example uses the `Tailwind 3` theme for the Smart Paste Button component from the theme package. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/@syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

The necessary `Tailwind 3` CSS styles for the Smart Paste Button component were imported into the `<style>` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/button/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the steps below to add the Vue Smart Paste Button component using the `Composition API` or `Options API`:

1.First, import and register the Smart Paste Button component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { SmartPasteButtonComponent as EjsSmartPasteButton } from "@syncfusion/ej2-vue-buttons";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { SmartPasteButtonComponent } from "@syncfusion/ej2-vue-buttons";
//Component registration
export default {
  name: "App",
  components: {
    "ejs-smart-paste-button": SmartPasteButtonComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2.In the `template` section, define the Smart Paste Button component with the [content](https://ej2.syncfusion.com/vue/documentation/api/smart-paste-button/index-default#content), [iconCss](https://ej2.syncfusion.com/vue/documentation/api/smart-paste-button/index-default#iconcss), and [aiAssistHandler](https://ej2.syncfusion.com/vue/documentation/api/smart-paste-button/index-default#aiassisthandler) properties.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-smart-paste-button id="smart-paste" content="Smart Paste" iconCss="e-icons e-paste"
          :aiAssistHandler="serverAIRequest"></ejs-smart-paste-button>
</template>

{% endhighlight %}
{% endtabs %}

3.Declare the method for the `aiAssistHandler` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const serverAIRequest = async (options: ChatOptions) => {
  let output: string | null = '';
  try {
    output = await getAzureChatAIRequest(options) as string;
    output = output.replace('END_RESPONSE', '')
  } catch (error) {
    console.error("Error:", error);
  }
  return output;
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
methods: {
  serverAIRequest: async (options: ChatOptions) => {
    let output: string | null = '';
    try {
      output = await getAzureChatAIRequest(options) as string;
      output = output.replace('END_RESPONSE', '')
    } catch (error) {
      console.error("Error:", error);
    }
    return output;
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-smart-paste-button id="smart-paste" content="Smart Paste" iconCss="e-icons e-paste"
          :aiAssistHandler="serverAIRequest"></ejs-smart-paste-button>
</template>

<script setup>
import { SmartPasteButtonComponent as EjsSmartPasteButton, ChatOptions } from "@syncfusion/ej2-vue-buttons";

const serverAIRequest = async (options: ChatOptions) => {
  let output: string | null = '';
  try {
    output = await getAzureChatAIRequest(options) as string;
    output = output.replace('END_RESPONSE', '')
  } catch (error) {
    console.error("Error:", error);
  }
  return output;
}

</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/button/index.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <ejs-smart-paste-button id="smart-paste" content="Smart Paste" iconCss="e-icons e-paste"
    :aiAssistHandler="serverAIRequest"></ejs-smart-paste-button>
</template>

<script>
  import { SmartPasteButtonComponent, ChatOptions } from "@syncfusion/ej2-vue-buttons";
  // Component registration
  export default {
    name: "App",
    // Declaring component and its directives
    components: {
       'ejs-smart-paste-button': SmartPasteButtonComponent,
    },
    methods: {
      serverAIRequest: async (options: ChatOptions) => {
      let output: string | null = '';
      try {
        output = await getAzureChatAIRequest(options) as string;
        output = output.replace('END_RESPONSE', '')
      } catch (error) {
        console.error("Error:", error);
      }
      return output;
    }
    }
   
  };
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/button/index.css";
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

Below is the featured sample output:

![vue-3-js-smart-paste-button](images/smartpaste.gif)

> [Vue Smart Paste Button Sample in github](https://github.com/syncfusion/smart-ai-samples/tree/master/vue/src/ai-components/ai-smart-paste)