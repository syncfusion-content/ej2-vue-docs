---
layout: post
title: Getting started vue3 with Vue Maskedtextbox component | Syncfusion
description:  Checkout and learn about Getting started vue3 with Vue Maskedtextbox component of Syncfusion Essential JS 2 and more details.
control: Getting started vue3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue MaskedTextBox Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion Vue MaskedTextBox component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

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

This article uses the [Vue MaskedTextBox component](https://www.syncfusion.com/vue-components/vue-masked-input-mask) as an example. To use the Vue MaskedTextBox component in the project, the `@syncfusion/ej2-vue-inputs` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-inputs --save
```

or

```bash
yarn add @syncfusion/ej2-vue-inputs
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the MaskedTextBox component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with its dependency graph.

## Add Syncfusion Vue component

Follow the below steps to add the Vue MaskedTextBox component using `Composition API` or `Options API`:

  1.First, import and register the MaskedTextBox component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<script setup>
import { MaskedTextBoxComponent as EjsMaskedtextbox } from "@syncfusion/ej2-vue-inputs";
</script>

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
//Component registeration
export default {
name: "App",
components: {
"ejs-maskedtextbox':":MaskedTextBoxComponent
}
}
</script>

{% endhighlight %}
{% endtabs %}
   
2.In the `template` section, define the MaskedTextBox component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/maskedtextbox/#datasource) property and column definitions.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div class="control_wrapper">
        <ejs-maskedtextbox></ejs-maskedtextbox>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
        <ejs-maskedtextbox></ejs-maskedtextbox>
    </div>
</template>
<script setup>
import { MaskedTextBoxComponent as EjsMaskedtextbox } from "@syncfusion/ej2-vue-inputs";
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
    .control_wrapper {
        margin: 0 auto;
        width: 240px;
    }
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
        <ejs-maskedtextbox></ejs-maskedtextbox>
    </div>
</template>
<script>
import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
//Component registeration
export default {
name: "App",
components: {
"ejs-maskedtextbox":MaskedTextBoxComponent
},
}
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
    .control_wrapper {
        margin: 0 auto;
        width: 240px;
    }
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

## Set the mask

You can set the mask to the MaskedTextBox to validate the user input by using the
[mask](https://ej2.syncfusion.com/vue/documentation/api/maskedtextbox/#mask) property. To know more about
the usage of mask and configuration, refer to this [link](./mask-configuration/).

The following example demonstrates the usage of mask element 0 that allows any single digit from 0 to 9.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div id="app">
        <div class='wrap'>
            <ejs-maskedtextbox mask='000-000-0000' placeholder='MaskedTextBox' floatLabelType='Always'></ejs-maskedtextbox>
        </div>
    </div>
</template>
<script setup>
import { MaskedTextBoxComponent as EjsMaskedtextbox } from "@syncfusion/ej2-vue-inputs";
  const data = [];
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
    .wrap {
        margin: 0 auto;
        width: 240px;
    }
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div id="app">
        <div class='wrap'>
            <ejs-maskedtextbox mask='000-000-0000' placeholder='MaskedTextBox' floatLabelType='Always'></ejs-maskedtextbox>
        </div>
    </div>
</template>
<script>
import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
//Component registeration
export default {
name: "App",
components: {
"ejs-maskedtextbox":MaskedtextboxComponent
}
data () {
    eturn {}
}
}
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
    .wrap {
        margin: 0 auto;
        width: 240px;
    }
</style>

{% endhighlight %}
{% endtabs %}

The output will appear as follows:

![MaskedTextBox with mask element](./images/mask.png)

## Model binding

In MaskedTextBox, the `value` property supports model binding functionality.

The following example demonstrates model binding functionality with the MaskedTextBox and HTML input element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div id="app">
        <div class='wrap'>
            <div class='e-input-group' style='margin-bottom:30px'>
                <input class='e-input' type='text' v-model='value' placeholder='Mobile Number' />
            </div>
            <ejs-maskedtextbox v-model="value" :value="value" mask='000-000-0000'></ejs-maskedtextbox>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { MaskedTextBoxComponent as EjsMaskedtextbox } from "@syncfusion/ej2-vue-inputs";
  const value = ref('');
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
    .wrap {
        margin: 35px auto;
        width: 240px;
    }
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div id="app">
        <div class='wrap'>
            <div class='e-input-group' style='margin-bottom:30px'>
                <input class='e-input' type='text' v-model='value' placeholder='Mobile Number' />
            </div>
            <ejs-maskedtextbox v-model="value" :value="value" mask='000-000-0000'></ejs-maskedtextbox>
        </div>
    </div>
</template>
<script>
import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
//Component registeration
export default {
name: "App",
components: {
"ejs-maskedtextbox":MaskedtextboxComponent
},
data () {
    return {
        value : ''
    }
}
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

.wrap {
    margin: 35px auto;
    width: 240px;
}
</style>

{% endhighlight %}
{% endtabs %}

The output will appear as follows:

![MaskedTextBox with model binding](./images/model.png)

## See Also

* [How to perform custom validation using FormValidator](./how-to/perform-custom-validation-using-form-validator/)
* [How to customize the UI appearance of the control](./how-to/customize-the-ui-appearance-of-the-control/)
* [How to set cursor position while focus on the input textbox](./how-to/set-cursor-position-while-focus-on-the-input-textbox/)
* [How to display numeric keypad when focus on mobile devices](./how-to/display-numeric-keypad-when-focus-on-mobile-devices/)