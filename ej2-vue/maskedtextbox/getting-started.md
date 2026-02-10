---
layout: post
title: Getting started with Vue Maskedtextbox component | Syncfusion
description:  Checkout and learn about Getting started with Vue Maskedtextbox component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Maskedtextbox Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue MaskedTextBox component.

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

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Maskedtextbox component](https://www.syncfusion.com/vue-components/vue-input-mask) as an example. Install the `@syncfusion/ej2-vue-inputs` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-inputs --save
```
or

```bash
yarn add @syncfusion/ej2-vue-inputs
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> components require CSS stylesheets to display correctly. You can import themes in various ways, such as using CSS or SASS styles from npm packages, CDN, CRG, and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to reference themes in a Vue project.

In this article, the `Material3` theme is applied using CSS styles, which are available in installed packages. The necessary `Material3` CSS styles for the MaskedTextBox component and its dependents were imported into the `<style>` section of the **src/App.vue** file.

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

Follow the below steps to add the Vue MaskedTextBox component:

1\. First, import and register the MaskedTextBox component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<script setup>
import { MaskedTextBoxComponent as EjsMaskedtextbox} from "@syncfusion/ej2-vue-inputs";
</script>

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";

export default {
name: "App",
components: {
"ejs-maskedtextbox':":MaskedTextBoxComponent
}
}
</script>

{% endhighlight %}
{% endtabs %}

## Adding MaskedTextBox component

Add the EJ2 Vue MaskedTextBox using `<ejs-maskedtextbox>` to the `<template>` section of the `App.vue` file in src directory, the content attribute of the MaskedTextBox component is provided as name in data option in the `<script>` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div class="control_wrapper">
      <div class="control-label">MaskedTextbox
      </div>
      <ejs-maskedtextbox></ejs-maskedtextbox>
    </div>
</template>
<script setup>
import { MaskedTextBoxComponent as EjsMaskedtextbox } from "@syncfusion/ej2-vue-inputs";
</script>

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
      <div class="control-label">MaskedTextbox
      </div>
      <ejs-maskedtextbox></ejs-maskedtextbox>
    </div>
</template>
<script>
import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
export default {
name: "App",
components: {
"ejs-maskedtextbox":MaskedTextboxComponent
},
  data () {
    return {}
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Set the mask

You can set the mask to the MaskedTextBox to validate the user input by using the [mask](https://ej2.syncfusion.com/vue/documentation/api/maskedtextbox#mask) property. To know more about the usage of mask and configuration, refer to this [link](./mask-configuration).

The following example demonstrates the usage of mask element 0 that allows any single digit from 0 to 9.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div class="control_wrapper">
        <div class="control-label">MaskedTextBox
        </div>
        <ejs-maskedtextbox mask="000-000-0000"></ejs-maskedtextbox>
    </div>
</template>

<script setup>
import { MaskedTextBoxComponent as EjsMaskedtextbox } from "@syncfusion/ej2-vue-inputs";
</script>

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
        <div class="control-label">MaskedTextBox
        </div>
        <ejs-maskedtextbox mask="000-000-0000"></ejs-maskedtextbox>
    </div>
</template>

<script>
import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
export default {
name: "App",
components: {
"ejs-maskedtextbox":MaskedTextboxComponent
},

}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/masked-textbox/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/masked-textbox/getting-started-cs1/app.vue %}
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
        
{% previewsample "page.domainurl/code-snippet/masked-textbox/getting-started-cs1" %}

## Model binding

In MaskedTextBox, the [value](https://ej2.syncfusion.com/vue/documentation/api/maskedtextbox#value) property supports model binding functionality.

The following example demonstrates model binding functionality with the MaskedTextBox and HTML input element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/masked-textbox/model-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/masked-textbox/model-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/masked-textbox/model-cs1" %}

## See Also

* [How to perform custom validation using FormValidator](./how-to/perform-custom-validation-using-form-validator)
* [How to customize the UI appearance of the control](./how-to/customize-the-ui-appearance-of-the-control)
* [How to set cursor position while focus on the input textbox](./how-to/set-cursor-position-while-focus-on-the-input-textbox)
* [How to display numeric keypad when focus on mobile devices](./how-to/display-numeric-keypad-when-focus-on-mobile-devices)