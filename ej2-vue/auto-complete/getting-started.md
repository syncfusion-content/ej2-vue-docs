---
layout: post
title: Getting started with Vue Auto complete component | Syncfusion
description:  Checkout and learn about Getting started with Vue Auto complete component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Auto compleye Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Auto complete component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

{% youtube "https://www.youtube.com/watch?v=oFZf8uFAtQE" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The list of dependencies required to use the AutoComplete component in your application is given below:

```javascript
|-- @syncfusion/ej2-vue-dropdowns
  |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
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

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Auto complete component](https://www.syncfusion.com/vue-components/vue-autocomplete) as an example. Install the `@syncfusion/ej2-vue-dropdowns` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-dropdowns --save
```
or

```bash
yarn add @syncfusion/ej2-vue-dropdowns
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Auto complete component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

Follow the below steps to add the Vue Auto complete component using `Composition API` or `Options API`:

1\. First, import and register the Auto complete component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { AutoCompleteComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
  components: {
    'ejs-autocomplete': AutoCompleteComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Binding data source

After initialization, populate the AutoComplete with data using the dataSource property. Here, an array of string values is passed to the AutoComplete component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div id="app">
    <ejs-autocomplete :dataSource='sportsData' :placeholder="waterMark"></ejs-autocomplete>
  </div>
</template>
<script setup>
import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';
const waterMark = 'e.g. Basketball';
const sportsData = ['American Football', 'Badminton', 'Basketball', 'Cricket',
                'Football', 'Golf', 'Gymnastics',
                'Hockey', 'Rugby', 'Snooker', 'Tennis'
            ];
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

</template>
<script>
import { AutoCompleteComponent } from '@syncfusion/ej2-vue-dropdowns';
export default {
  components: {
    'ejs-autocomplete': AutoCompleteComponent
  },
  name: 'app',
  data () {
    return {
      waterMark : 'e.g. Basketball',
      sportsData: ['American Football', 'Badminton', 'Basketball', 'Cricket',
                'Football', 'Golf', 'Gymnastics',
                'Hockey', 'Rugby', 'Snooker', 'Tennis'
            ]
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs11/app.vue %}
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
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs11" %}

## Custom values

The AutoComplete allows the user to give input as custom value which is not required to present in predefined set of values. By default, this support is enabled by [`allowCustom`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#allowcustom) property. The custom value will be sent to post back handler when a form is about to be submitted.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs12" %}

## Configure the suggestion list

By default, suggestion list width automatically adjusts according to the AutoComplete input element's width, and the height of the suggestion list has '300px'. The height and width of the popup list can also be customized using the [`popupHeight`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#popupheight) and [`popupWidth`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#popupwidth) property respectively. In the following sample, suggestion list's width and height are configured.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs13" %}

N> You can refer to our [Vue AutoComplete](https://www.syncfusion.com/vue-ui-components/vue-autocomplete) feature tour page for its groundbreaking feature representations. You can also explore our [Vue AutoComplete example](https://ej2.syncfusion.com/vue/demos/#/material/auto-complete/default.html) to know how to render and configure the autocomplete.

## See Also

* [How to bind the data](./data-binding)