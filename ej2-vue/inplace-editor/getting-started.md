---
layout: post
title: Getting started with Vue Inplace editor component | Syncfusion
description:  Checkout and learn about Getting started with Vue Inplace editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Inplace editor Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Inplace editor component

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the In-place Editor component in your application.

```javascript
|-- @syncfusion/ej2-vue-inplace-editor
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-buttons
  |-- @syncfusion/ej2-calendars
  |-- @syncfusion/ej2-data
  |-- @syncfusion/ej2-dropdowns
  |-- @syncfusion/ej2-inputs
  |-- @syncfusion/ej2-lists
  |-- @syncfusion/ej2-navigations
  |-- @syncfusion/ej2-popups
  |-- @syncfusion/ej2-richtexteditor
  |-- @syncfusion/ej2-splitbuttons
  |-- @syncfusion/ej2-vue-base

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

This article uses the [Vue Inplace editor component](https://www.syncfusion.com/vue-components/vue-in-place-editor) as an example. Install the `@syncfusion/ej2-vue-inplace-editor` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-inplace-editor --save
```
or

```bash
yarn add @syncfusion/ej2-vue-inplace-editor
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Inplace editor component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inplace-editor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

Follow the below steps to add the Vue Inplace editor component:

1\. First, import and register the Inplace editor component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';

export default {
  components: {
    'ejs-inplaceeditor': InPlaceEditorComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Inplace editor component with the [model](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor#model) property.

{% tabs %}
{$ highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-inplaceeditor id="inplace_editor" type="Text" value="Andrew" :model="model">
    </ejs-inplaceeditor>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

3\. Declare the value for the `model` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
data () {
    return {
      model: {
          placeholder: 'Enter employee name'
      },
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

## Add the In-place Editor with Textbox

By default, the TextBox component is rendered in In-place Editor with the [`type`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType/) property sets as Text.

```
<template>
    <div id="app">
    <ejs-inplaceeditor id="inplace_editor" type="Text" value="Andrew" :model="model">
    </ejs-inplaceeditor>
  </div>
</template>
<script>
import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';

export default {
  components: {
    'ejs-inplaceeditor': InPlaceEditorComponent
  },
  name: 'app',
  data: function(){
    return {
      model: {
          placeholder: 'Enter employee name'
      },
    }
  }
}
</script>

```

## Configure DropDownList

You can render DropDownList by changing the [`type`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType/) property as [`DropDownList`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list) and configure its properties and methods using the `model` property.

In the following sample, [`type`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType/) and model values are configured to render the [`DropDownList`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list) component.

```
<template>
  <div id="app">
    <ejs-inplaceeditor id="element" type="DropDownList" mode= "Inline" :model="model">
    </ejs-inplaceeditor>
  </div>
</template>

<script>
import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';

export default {
  components: {
    'ejs-inplaceeditor': InPlaceEditorComponent
  },
  name: 'app',
  data () {
    return {
      model: {
           genderData: ['Male', 'Female'],
           placeholder: 'Select gender'
      },
    }
  }
}
</script>

```

## Integrate DatePicker

You can render [DatePicker](https://ej2.syncfusion.com/vue/documentation/api/datepicker) by changing the [`type`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType/) property as [`Date`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType/)  and also configure its properties and methods using [`model`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#model) property.

In the below sample, [`type`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType/) and [`model`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#model) values are configured to render the [DatePicker](https://ej2.syncfusion.com/vue/documentation/api/datepicker) component.

```
<template>
  <div id="app">
    <ejs-inplaceeditor id="inplace_editor" type="Date" :model="model" :value="value">
    </ejs-inplaceeditor>
  </div>
</template>

<script>
import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';

export default {
  components: {
    'ejs-inplaceeditor': InPlaceEditorComponent
  },
  name: 'app',
  data () {
    return {
      value: new Date('04/12/2018'),
      model: {
            showTodayButton: true
      },
    }
  }
}
</script>

```

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs11/app.vue %}
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

{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs11" %}

## Two-way binding

In In-place Editor, two-way binding support is achieved using the `v-model` directive in Vue. When you change a value in the first In-place Editor component, the changed value gets updated automatically to the second In-place Editor. The following example demonstrates, how to achieve two-way binding in In-place Editor.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs12" %}

## Submitting data to the server (save)

You can submit editor value to server by configuring the [`url`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#url), [`adaptor`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/adaptorType/), and [`primaryKey`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#primarykey) property.

| Property   | Usage                                           |
|------------|---------------------------------------------------------|
| **`url`**        | Gets the url for server submit action.        |
| **`adaptor`**    | Specifies the adaptor type that is used by DataManager to communicate with DataSource.                |
| **`primaryKey`** | Defines the unique primary key of editable field which can be used for saving data in the data-base.|

> The [`primaryKey`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#primarykey) property is mandatory. If it's not set, edited data are not sent to the server.

## Refresh with modified value

The edited data is submitted to the server and you can see the new values getting reflected in the In-place Editor.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs13" %}

## See Also

* [Types of rendering the editor](./integration/)