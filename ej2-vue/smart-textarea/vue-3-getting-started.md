---
layout: post
title: Getting started vue3 with Vue Smart TextArea component | Syncfusion
description:  Checkout and learn about Getting started vue3 with Vue Smart TextArea component of Syncfusion Essential JS 2 and more details.
control: Getting started vue3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Smart TextArea Component in Vue 3

The **Smart TextArea** is an advanced Component designed to elevate the text input experience by providing intelligent autocomplete suggestions for entire sentences through text-generative AI functionality. This component enhances user productivity by predicting and offering relevant completions based on the context of what is being typed.

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion Vue Smart TextArea component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, life cycle hooks, and more.

## Prerequisites

To get started with application, ensure the following software to be installed in the machine.

* [OpenAI](https://github.com/syncfusion/smart-ai-samples/blob/master/typescript/README.md#openai) or [Azure OpenAI Account](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource) 
* [System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

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

## Add syncfusion vue packages

Syncfusion Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion Vue components in the project, install the corresponding npm package.

This article uses the [Vue Smart TextArea component](https://www.syncfusion.com/vue-components/vue-smart-textarea) as an example. To use the Vue Smart TextArea component in the project, the `@syncfusion/ej2-vue-inputs` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-inputs --save
```

or

```bash
yarn add @syncfusion/ej2-vue-inputs
```

## Import syncfusion css styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Smart TextArea component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with its dependency graph.

## Add syncfusion vue component

Follow the below steps to add the Vue Smart TextArea component using `Composition API` or `Options API`:

1.Import and register the Smart TextArea component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { SmartTextAreaComponent as EjsSmarttextarea } from "@syncfusion/ej2-vue-inputs";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { SmartTextAreaComponent } from "@syncfusion/ej2-vue-inputs";
//Component registration
export default {
    name: "App",
    components: {
        "ejs-smarttextarea'": SmartTextAreaComponent
    }
}
</script>

{% endhighlight %}
{% endtabs %}

2.Declare the values for the properties and methods in the script section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const userRole = 'Employee communicating with internal team';
const phrasesData = [
  "Please find the attached report.",
  "Let's schedule a meeting to discuss this further.",
  "Can you provide an update on this task?",
  "I appreciate your prompt response.",
  "Let's collaborate on this project to ensure timely delivery."
];
const serverAIRequest = async function (settings) {
  let output = '';
  try {
      const response = await getAzureChatAIRequest(settings);
      output = response;
  } catch (error) {
      console.error('Error:', error);
  }
  return output;
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  data() {
    return {
      userRole: 'Employee communicating with internal team',
      phrasesData: [
        "Please find the attached report.",
        "Let's schedule a meeting to discuss this further.",
        "Can you provide an update on this task?",
        "I appreciate your prompt response.",
        "Let's collaborate on this project to ensure timely delivery."
      ]
    }
  },
  methods: {
    serverAIRequest: async function (settings) {
      let output = '';
      try {
          const response = await getAzureChatAIRequest(settings);
          output = response;
      } catch (error) {
          console.error('Error:', error);
      }
      return output;
    },
  }
</script>

{% endhighlight %}
{% endtabs %}
   
3.In the `template` section, define the Smart TextArea component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-smarttextarea id="smart-textarea" :width="'500px'" ref="textareaObj" placeholder="Enter your queries here"
          :floatLabelType="'Auto'" :rows="5" :userRole="userRole" :userPhrases="phrasesData"
          :aiSuggestionHandler="serverAIRequest"></ejs-smarttextarea>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <ejs-smarttextarea id="smart-textarea" :width="'500px'" ref="textareaObj" placeholder="Enter your queries here"
          :floatLabelType="'Auto'" :rows="5" :userRole="userRole" :userPhrases="phrasesData"
          :aiSuggestionHandler="serverAIRequest"></ejs-smarttextarea>
</template>


<script setup>
import { SmartTextAreaComponent as EjsSmarttextarea } from '@syncfusion/ej2-vue-inputs';

const userRole = 'Employee communicating with internal team';
const phrasesData = [
  "Please find the attached report.",
  "Let's schedule a meeting to discuss this further.",
  "Can you provide an update on this task?",
  "I appreciate your prompt response.",
  "Let's collaborate on this project to ensure timely delivery."
];
const serverAIRequest = async function (settings) {
  let output = '';
  try {
      const response = await getAzureChatAIRequest(settings);
      output = response;
  } catch (error) {
      console.error('Error:', error);
  }
  return output;
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <ejs-smarttextarea id="smart-textarea" :width="'500px'" ref="textareaObj" placeholder="Enter your queries here"
          :floatLabelType="'Auto'" :rows="5" :userRole="userRole" :userPhrases="phrasesData"
          :aiSuggestionHandler="serverAIRequest"></ejs-smarttextarea>
</template>
<script>
import { SmartTextAreaComponent } from '@syncfusion/ej2-vue-inputs';
export default {
    name: "App",
    components: {
        "ejs-smarttextarea": SmartTextAreaComponent
    },
    data() {
      return {
        userRole: 'Employee communicating with internal team',
        phrasesData: [
          "Please find the attached report.",
          "Let's schedule a meeting to discuss this further.",
          "Can you provide an update on this task?",
          "I appreciate your prompt response.",
          "Let's collaborate on this project to ensure timely delivery."
        ]
      }
    },
    methods: {
        serverAIRequest: async function (settings) {
            let output = '';
            try {
                const response = await getAzureChatAIRequest(settings);
                output = response;
            } catch (error) {
                console.error('Error:', error);
            }
            return output;
        },
    }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
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

![Output](./images/smarttextarea.gif)

> [View Sample in GitHub](https://github.com/syncfusion/smart-ai-samples/tree/master/typescript/src/app/smarttextarea).