---
layout: post
title: Getting started with Vue Inplace editor component | Syncfusion
description:  Checkout and learn about Getting started with Vue Inplace editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue In-Place Editor Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue In-Place Editor component.

To get started quickly with the Vue In-Place Editor, check this video:

{% youtube "https://www.youtube.com/watch?v=uEAtX_6zyJ0" %}

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

This article uses the [Vue In-Place Editor component](https://www.syncfusion.com/vue-components/vue-in-place-editor) as an example. Install the `@syncfusion/ej2-vue-inplace-editor` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-inplace-editor --save
```
or

```bash
yarn add @syncfusion/ej2-vue-inplace-editor
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> components require CSS stylesheets to display correctly. You can import themes in various ways, such as using CSS or SASS styles from npm packages, CDN, CRG, and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to reference themes in a Vue project.

In this article, the `Material3` theme is applied using CSS styles, which are available in installed packages. The necessary `Material3` CSS styles for the In-Place Editor component and its dependents were imported into the `<style>` section of the **src/App.vue** file.

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

> The order of CSS imports matters. Import base styles first, then component-specific styles. Missing CSS imports can result in misaligned layouts, buttons without styling, or missing visual elements in popups and dialogs.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow these steps to add the Vue In-Place Editor component:

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
{% highlight html tabtitle="~/src/App.vue" %}

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

## Add the In-Place Editor with TextBox

By default, the TextBox component is rendered in the In-Place Editor with the [`type`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputtype) property set as Text.

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

You can render a DropDownList by changing the [`type`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType) property to [`DropDownList`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list) and configure its properties and methods using the `model` property.

In the following sample, the [`type`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType) property and model values are configured to render the [`DropDownList`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list) component. The `genderData` property specifies the data source for the dropdown list.

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

You can render a [DatePicker](https://ej2.syncfusion.com/vue/documentation/api/datepicker/index-default) by changing the [`type`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType) property to [`Date`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType) and configuring its properties and methods using the [`model`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/index-default#model) property.

In the following sample, the [`type`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType) property and [`model`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/index-default#model) values are configured to render the [DatePicker](https://ej2.syncfusion.com/vue/documentation/api/datepicker/index-default) component.

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

In the In-Place Editor, two-way binding support is achieved using the `v-model` directive in Vue. When you change a value in the first In-Place Editor component, the changed value updates automatically to the second In-Place Editor. The following example demonstrates how to achieve two-way binding in the In-Place Editor.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs12" %}

## Submitting data to the server (save)

You can submit editor value to server by configuring the [`url`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/index-default#url), [`adaptor`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/adaptortype), and [`primaryKey`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/index-default#primarykey) property.

| Property   | Usage                                           |
|------------|---------------------------------------------------------|
| **`url`**        | Gets the url for server submit action.        |
| **`adaptor`**    | Specifies the adaptor type that is used by DataManager to communicate with DataSource.                |
| **`primaryKey`** | Defines the unique primary key of editable field which can be used for saving data in the data-base.|

> The [`primaryKey`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/index-default#primarykey) property is mandatory. If it's not set, edited data are not sent to the server.

## Refresh with modified value

The edited data is submitted to the server and you can see the new values getting reflected in the In-place Editor.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs13" %}

## See Also

* [Types of rendering the editor](./integration)