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

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TextArea component.

To get started quickly with Vue TextArea, check this video:

{% youtube "https://www.youtube.com/watch?v=cd3JLM8r3zE" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setup the Vue 2 project

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

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add syncfusion<sup style="font-size:70%">&reg;</sup> vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue TextArea component](https://www.syncfusion.com/vue-components/vue-textarea) as an example. Install the `@syncfusion/ej2-vue-inputs` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-inputs --save
```
or

```bash
yarn add @syncfusion/ej2-vue-inputs
```

## Import syncfusion<sup style="font-size:70%">&reg;</sup> css styles

Syncfusion<sup style="font-size:70%">&reg;</sup> components require CSS stylesheets to display correctly. You can import themes in various ways, such as using CSS or SASS styles from npm packages, CDN, CRG, and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to reference themes in a Vue project.

In this article, the `Material3` theme is applied using CSS styles, which are available in installed packages. The necessary `Material3` CSS styles for the TextArea component and its dependents were imported into the `<style>` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of CSS imports matters. Import base styles first, then component-specific styles. Missing CSS imports can result in misaligned layouts, buttons without styling, or missing visual elements in popups and dialogs.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue TextArea component:

1\. First, import and register the TextArea component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<script setup>
import { TextAreaComponent as EjsTextArea } from "@syncfusion/ej2-vue-inputs";
</script>

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { TextAreaComponent } from "@syncfusion/ej2-vue-inputs";
export default {
name: "App",
components: {
"ejs-textarea':":TextareaComponent
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

<script setup>

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

<script setup>

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

<script setup>

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

<script setup>

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