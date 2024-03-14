---
layout: post
title: Getting started with Vue TextArea component | Syncfusion
description:  Checkout and learn about Getting started with Vue TextArea component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue TextArea Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue TextArea component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

To get start quickly with Vue TextArea component, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=cd3JLM8r3zE" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the TextArea component in your application.

```js
|-- @syncfusion/ej2-vue-inputs
  |-- @syncfusion/ej2-inputs
  |-- @syncfusion/ej2-base

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

![Vue 2 project](./images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue TextArea component](https://www.syncfusion.com/vue-components/vue-textarea) as an example. Install the `@syncfusion/ej2-vue-inputs` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-inputs --save
```
or

```bash
yarn add @syncfusion/ej2-vue-inputs
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the TextArea component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.


## Adding TextArea to the application

Import and register the TextArea component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { TextAreaComponent as EjsTextArea } from "@syncfusion/ej2-vue-inputs";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { TextAreaComponent } from "@syncfusion/ej2-vue-inputs";
export default {
  components: {
    'ejs-textarea': TextAreaComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

In the `template` section define the TextArea component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div class='wrap'>
        <ejs-textarea id="default"></ejs-textarea>
    </div>
</template>

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

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textarea/default-textarea-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textarea/default-textarea-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/default-textarea-cs1" %}


## Getting and setting values

To set the initial value of the TextArea component, you can utilize the [`value`](https://ej2.syncfusion.com/vue/documentation/api/textarea/#value) property. Here's how you can achieve it:

```
<template>
    <div class='wrap'>
        <ejs-textarea id="default" value="comments"></ejs-textarea>
    </div>
</template>

<script>
import Vue from 'vue';
import { TextAreaComponent  } from "@syncfusion/ej2-vue-inputs";

export default {
    components: {
    'ejs-textarea': TextAreaComponent
    },
    data: function() {
      return { }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
  margin: 50px auto;
  text-align: center;
}

</style>
```

* Alternatively, you can set the value of the TextArea using v-model.

```
<template>
    <div class='wrap'>
        <ejs-textarea id="default" v-model="value"></ejs-textarea>
    </div>
</template>

<script>
import Vue from 'vue';
import { TextAreaComponent  } from "@syncfusion/ej2-vue-inputs";

export default {
    components: {
    'ejs-textarea': TextAreaComponent
    },
    data: function() {
      return {
        value: 'Comments'
      }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
  margin: 50px auto;
  text-align: center;
}

</style>
```

* You can dynamically retrieve the value of the TextArea component using the value property bound to `v-model` of the TextArea component.

```
<template>
    <div class='wrap'>
        <ejs-textarea id="default" v-model="value"></ejs-textarea>
        <button id="valuebtn" @click="onButtonClick">Get Value</button>
    </div>
</template>

<script>
import Vue from 'vue';
import { TextAreaComponent  } from "@syncfusion/ej2-vue-inputs";

export default {
    components: {
        'ejs-textarea': TextAreaComponent
    },
    data() {
        return {
            value: 'Comments'
        }
    },
    methods: {
        onButtonClick() {
            // Retrieve the value from the textarea
            const textareaValue = this.value;
            console.log(textareaValue);
        }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
  margin: 50px auto;
  text-align: center;
}
</style>
```

* You can retrieve the value of the TextArea by accessing it as an argument from the [`change`](https://ej2.syncfusion.com/vue/documentation/api/textarea/#change) event.

```
<template>
    <div class='wrap'>
        <ejs-textarea id="default" v-model="value" :change="onChange"></ejs-textarea>
    </div>
</template>

<script>
import Vue from 'vue';
import { TextAreaComponent  } from "@syncfusion/ej2-vue-inputs";

export default {
    components: {
        'ejs-textarea': TextAreaComponent
    },
    data() {
        return {
            value: 'Comments'
        }
    },
    methods: {
        onChange: function(args) {
          let textareaValue = args.value;
        }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
  margin: 50px auto;
  text-align: center;
}
</style>
```
