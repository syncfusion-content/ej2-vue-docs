---
layout: post
title: Getting started with Vue Inplace editor component | Syncfusion
description:  Checkout and learn about Getting started with Vue Inplace editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section briefly explains about how to create a simple **In-place Editor** using VueJS and demonstrates the basic of the In-place Editor component in a Vue environment.

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

## Get Started with Vue CLI

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.
To install Vue CLI use the following command.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Start a new project using the following Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, use the In-place Editor component.

To install the In-place Editor component, use the following command

```bash
npm install @syncfusion/ej2-vue-inplace-editor --save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue package and register the same using Vue.use() with the Component Plugin as its argument.

Refer the following code snippet.

```ts
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';

Vue.use(InPlaceEditorPlugin);
```

> By registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package,
register the same using the Vue.component() with the name of Component from Component Plugin
and the EJ2 Vue Component as its arguments.

Refer to the following code snippet.

```ts
import { InPlaceEditorComponent, InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';

Vue.component(InPlaceEditorPlugin.name, InPlaceEditorComponent);
```

Note: By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Creating Vue Sample

Add the EJ2 Vue In-place Editor using `<ejs-inplaceeditor>` to the `<template>` section of the `App.vue` file in src directory,
the content attribute of the In-place Editor component is provided as name in data option in the `<script>` section.

```
<template>
  <div id="app">
    <ejs-inplaceeditor id="inplace_editor" type="Text" value="Andrew" :model="model">
    </ejs-inplaceeditor>
  </div>
</template>

<script>
import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';

Vue.use(InPlaceEditorPlugin);
export default {
  name: 'app',
  data () {
    return {
      model: {
          placeholder: 'Enter employee name'
      },
    }
  }
}
</script>

```

## Adding CSS reference

Add the In-place Editor component's styles as given below in `<style>` section of the `App.vue` file.

```
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
```

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
import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';

Vue.use(InPlaceEditorPlugin);
export default {
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
import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';

Vue.use(InPlaceEditorPlugin);
export default {
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

You can render [DatePicker](https://ej2.syncfusion.com/vue/documentation/api/datepicker) by changing the [`type`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType/) property as [`Date`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType/)  and also configure its properties and methods using [`model`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor#model) property.

In the below sample, [`type`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/inputType/) and [`model`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor#model) values are configured to render the [DatePicker](https://ej2.syncfusion.com/vue/documentation/api/datepicker) component.

```
<template>
  <div id="app">
    <ejs-inplaceeditor id="inplace_editor" type="Date" :model="model" :value="value">
    </ejs-inplaceeditor>
  </div>
</template>

<script>
import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';

Vue.use(InPlaceEditorPlugin);
export default {
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

## Run the application

Now, run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs11" %}

## Two-way binding

In In-place Editor, two-way binding support is achieved using the `v-model` directive in Vue. When you change a value in the first In-place Editor component, the changed value gets updated automatically to the second In-place Editor. The following example demonstrates, how to achieve two-way binding in In-place Editor.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs12" %}

## Submitting data to the server (save)

You can submit editor value to server by configuring the [`url`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor#url), [`adaptor`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/adaptorType/), and [`primaryKey`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor#primarykey) property.

| Property   | Usage                                           |
|------------|---------------------------------------------------------|
| **`url`**        | Gets the url for server submit action.        |
| **`adaptor`**    | Specifies the adaptor type that is used by DataManager to communicate with DataSource.                |
| **`primaryKey`** | Defines the unique primary key of editable field which can be used for saving data in the data-base.|

> The [`primaryKey`](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor#primarykey) property is mandatory. If it's not set, edited data are not sent to the server.

## Refresh with modified value

The edited data is submitted to the server and you can see the new values getting reflected in the In-place Editor.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs13" %}

## See Also

* [Types of rendering the editor](./integration/)