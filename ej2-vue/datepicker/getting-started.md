---
layout: post
title: Getting Started with Vue Datepicker Component | Syncfusion
description:  Learn about getting started with Syncfusion Essential Vue Datepicker component, it's elements and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Datepicker Component

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Datepicker component using the [Composition API](https://vuejs.org/guide/introduction.html#api-styles) / [Options API](https://vuejs.org/guide/introduction.html#api-styles).

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The list of dependencies required to use the DatePicker component in your application is given below:

```javascript
|-- @syncfusion/ej2-vue-calendars
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-data
  |-- @syncfusion/ej2-vue-base
  |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-inputs
       |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
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

![Vue Datepicker Getting started project](../appearance/images/vue-datepicker-getting-started-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Datepicker component](https://www.syncfusion.com/vue-components/vue-datepicker) as an example. Install the `@syncfusion/ej2-vue-calendars` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-calendars --save
```
or

```bash
yarn add @syncfusion/ej2-vue-calendars
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Datepicker component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Add Syncfusion Vue component

Follow the below steps to add the Vue Datepicker component using `Composition API` or `Options API`:

1\. First, import and register the Datepicker component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script>
import { DatePickerComponent as EjsDatepicker } from '@syncfusion/ej2-vue-calendars';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { DatePickerComponent } from '@syncfusion/ej2-vue-calendars';
export default {
components: {
  'ejs-datepicker': DatePickerComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Datepicker component with the [placeholder](https://ej2.syncfusion.com/vue/documentation/api/datepicker/#placeholder) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
      <div class='wrapper'>
        <ejs-datepicker :placeholder="waterMark"></ejs-datepicker>
      </div>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

3\. Declare the value for the `placeholder` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script>
  const waterMark = 'Select a date';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data () {
  return {
    waterMark : 'Select a date'
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/datepicker/getting-started-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/datepicker/getting-started-cs3/app.vue %}
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
        
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs3" %}

## Setting the value, min and max dates

The following example demonstrates how to set the value, min and max dates on initializing the DatePicker. Here you can able to select a date within a range from 9th to 15th in a month of May 2017. To know more about range restriction in DatePicker, please refer this [page](./date-range).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/datepicker/min-max-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/datepicker/min-max-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/min-max-cs3" %}

## See Also

* [Change the format of selected date](./date-format)
* [Render DatePicker with specific culture](./globalization)
* [How to achieve validation with DatePicker](./how-to/client-side-validation)

N> You can also explore our [Vue DatePicker example](https://ej2.syncfusion.com/vue/demos/#/bootstrap5/datepicker/default.html) that shows you how to render the DatePicker in Vue.