---
layout: post
title: Getting started with Vue Numerictextbox component | Syncfusion
description:  Checkout and learn about Getting started with Vue Numerictextbox component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the NumericTextBox component with its basic usage in step by step procedure.

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

## Adding syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install NumericTextBox component, use the following command

```bash
npm install @syncfusion/ej2-vue-inputs –save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the NumericTextBox Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with NumericTextBox Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the NumericTextBox Component and NumericTextBox Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of NumericTextBox Component from NumericTextBox Component Plugin
and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { NumericTextBoxComponent, NumericTextBoxPlugin } from '@syncfusion/ej2-vue-inputs';

Vue.component(NumericTextBoxPlugin.name, NumericTextBoxComponent);
```

> By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Adding NumericTextBox component

Add the EJ2 Vue NumericTextBox using `<ejs-numerictextbox>` to the `<template>` section of the `App.vue` file in src directory, the content attribute of the NumericTextBox component is provided as name in data option in the `<script>` section.

```
<template>
    <div class="control_wrapper">
        <div class="control-label">Numeric TextBox
        </div>
        <ejs-numerictextbox value="10"></ejs-numerictextbox>
    </div>
</template>
<script>
import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);
export default Vue.extend ({});

</script>
```

## Adding CSS Reference

Add Button component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>
```

> If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Run the application

Now use the `npm run dev` command to run the application in the browser.

```
npm run dev
```

The below example shows the NumericTextBox.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/numeric-textbox/getting-started/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started/getting-started-cs2" %}

## Range validation

You can set the minimum and maximum range of values in the NumericTextBox using the [`min`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox/#min) and [`max`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox/#max) properties, so the numeric value should be in the min and max range.

The validation behavior depends on the [`strictMode`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox/#strictmode) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/numeric-textbox/getting-started/range-validation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started/range-validation-cs1" %}

## Formatting the value

User can set the format of the NumericTextBox component using [`format`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox/#format)
property. The value will be displayed in the specified format, when the component is in focused out state. For more information about formatting the value, refer to this [link](./formats/).

The below example demonstrates format the value by using currency format value `c2`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/numeric-textbox/getting-started/formating-value-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started/formating-value-cs1" %}

## Precision of numbers

You can restrict the number of decimals to be entered in the NumericTextBox by using the [`decimals`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox/#decimals)
and [`validateDecimalOnType`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox/#validatedecimalontype) properties.
So, you can't enter the number whose precision is greater than the mentioned decimals.

* If `validateDecimalOnType` is false, number of decimals will not be restricted.
Else, number of decimals will be restricted while typing in the NumericTextBox.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/numeric-textbox/getting-started/precision-numbers-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started/precision-numbers-cs1" %}

## Model binding

In NumericTextBox, the `value` property supports model binding functionality.
The below example demonstrates model binding functionality with the NumericTextBox and HTML input element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/numeric-textbox/getting-started/model-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started/model-cs1" %}

## See Also

* [How to perform custom validation using FormValidator](./how-to/perform-custom-validation-using-form-validator/)
* [How to customize the UI appearance of the control](./how-to/customize-the-ui-appearance-of-the-control/)
* [How to customize the spin button’s up and down arrow](./how-to/customize-the-spin-buttons-up-and-down-arrow/)
* [How to customize the step value and hide spin buttons](./how-to/customize-the-step-value-and-hide-spin-buttons/)
* [How to prevent nullable input in NumericTextBox](./how-to/prevent-nullable-input-in-numerictextbox/)
* [How to maintain trailing zeros in NumericTextBox](./how-to/maintain-trailing-zeros-in-numerictextbox/)
