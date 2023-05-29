---
layout: post
title: Getting started with Vue Maskedtextbox component | Syncfusion
description:  Checkout and learn about Getting started with Vue Maskedtextbox component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the MaskedTextBox component with its basic usage in step-by-step procedure.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Installation and configuration

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.

To install Vue CLI use the following command.

```bash
npm install -g @vue/cli
```

Start a new project using below Vue CLI command.

```bash
vue init webpack-simple quickstart
cd quickstart
npm install

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install. For this application, we are going to use MaskedTextBox component.

To install MaskedTextBox component, use the following command

```bash
npm install @syncfusion/ej2-vue-inputs –save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the MaskedTextBox Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with
MaskedTextBox Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { MaskedTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(MaskedTextBoxPlugin);
```

Note : By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the MaskedTextBox Component and MaskedTextBox Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of MaskedTextBox Component from MaskedTextBox Component Plugin and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { MaskedTextBoxComponent, MaskedTextBoxPlugin } from '@syncfusion/ej2-vue-inputs';

Vue.component(MaskedTextBoxPlugin.name, MaskedTextBoxComponent);
```

> By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Adding MaskedTextBox component

Add the EJ2 Vue MaskedTextBox using `<ejs-maskedtextbox>` to the `<template>` section of the `App.vue` file in src directory, the content attribute of the MaskedTextBox component is provided as name in data option in the `<script>` section.

```
<template>
    <div class="control_wrapper">
      <div class="control-label">MaskedTextbox
      </div>
      <ejs-maskedtextbox></ejs-maskedtextbox>
    </div>
</template>
<script>
import Vue from "vue";
import { MaskedTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(MaskedTextBoxPlugin);
export default Vue.extend ({});

</script>
```

## Set the mask

You can set the mask to the MaskedTextBox to validate the user input by using the [mask](https://ej2.syncfusion.com/vue/documentation/api/maskedtextbox#mask) property. To know more about the usage of mask and configuration, refer to this [link](./mask-configuration/).

The following example demonstrates the usage of mask element 0 that allows any single digit from 0 to 9.

```
<template>
    <div class="control_wrapper">
        <div class="control-label">MaskedTextBox
        </div>
        <ejs-maskedtextbox mask="000-000-0000"></ejs-maskedtextbox>
    </div>
</template>
<script>
import Vue from "vue";
import { MaskedTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(MaskedTextBoxPlugin);
export default Vue.extend ({});

</script>
```

## Adding CSS reference

Import the MaskedTextBox component's required CSS references as follows in `src/App.css`.

```
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
```

> If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Run the application

Use the `npm run dev` command to run the application in the browser.

```
npm run dev
```

The following example shows the MaskedTextBox.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/masked-textbox/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/masked-textbox/getting-started-cs1" %}

## Model binding

In MaskedTextBox, the `value` property supports model binding functionality.

The following example demonstrates model binding functionality with the MaskedTextBox and HTML input element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/masked-textbox/model-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/masked-textbox/model-cs1" %}

## See Also

* [How to perform custom validation using FormValidator](./how-to/perform-custom-validation-using-form-validator/)
* [How to customize the UI appearance of the control](./how-to/customize-the-ui-appearance-of-the-control/)
* [How to set cursor position while focus on the input textbox](./how-to/set-cursor-position-while-focus-on-the-input-textbox/)
* [How to display numeric keypad when focus on mobile devices](./how-to/display-numeric-keypad-when-focus-on-mobile-devices/)