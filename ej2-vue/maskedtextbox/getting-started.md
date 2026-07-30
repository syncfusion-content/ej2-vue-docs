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

Easily set up a Vue 2 application using Vue CLI, which provides a reliable development environment, a streamlined project structure, and optimized builds compared to older setup tools. For detailed steps, refer to the Vue CLI [installation instructions](https://cli.vuejs.org/guide/installation.html).

> **Note:** To create a Vue 2 application using Vue CLI, refer to this [documentation](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-2-vue-cli) for more details.

To create a new Vue 2 application, run the following commands based on your preferred package manager:

```bash
npm install -g @vue/cli
vue create quickstart
```

or

```bash
yarn global add @vue/cli
vue create quickstart
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **Default ([Vue 2] babel, eslint)**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Navigate to the project directory:

```bash
cd quickstart
```

## Adding Vue MaskedTextBox packages

To install the MaskedTextBox package, use the following command:

```bash
npm install @syncfusion/ej2-vue-inputs --save
```
or

```bash
yarn add @syncfusion/ej2-vue-inputs
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.

Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/maskedtextbox/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding MaskedTextBox component

The MaskedTextBox code should be added in the **src/App.vue** file.

{% tabs %}
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
    components: { "ejs-maskedtextbox":MaskedTextBoxComponent },
    data () { return {} }
}
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/maskedtextbox/index.css";

    .wrap {
        margin: 0 auto;
        width: 240px;
    }
</style>
{% endhighlight %}
{% endtabs %}

## Run the application

```bash
npm run serve
```

or

```bash
yarn run serve
```
        
{% previewsample "page.domainurl/code-snippet/masked-textbox/getting-started-cs1" %}

## See Also

* [How to perform custom validation using FormValidator](./how-to/perform-custom-validation-using-form-validator)
* [How to customize the UI appearance of the control](./how-to/customize-the-ui-appearance-of-the-control)
* [How to set cursor position while focus on the input textbox](./how-to/set-cursor-position-while-focus-on-the-input-textbox)
* [How to display numeric keypad when focus on mobile devices](./how-to/display-numeric-keypad-when-focus-on-mobile-devices)