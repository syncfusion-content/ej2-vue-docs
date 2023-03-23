---
layout: post
title: Getting started with Vue Menu component | Syncfusion
description:  Checkout and learn about Getting started with Vue Menu component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Menu, and configure its available functionalities in Vue using Vue quickstart seed repository.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the Menu component in your application.

```js
|-- @syncfusion/ej2-vue-navigations
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-data
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Installation and configuration

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.

To install Vue CLI use the following command.

```bash
npm install -g @vue/cli

npm install -g @vue/cli-init
```

Start a new project using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart

npm install

```

Install Syncfusion `Menu` packages using below command.

```bash
npm install @syncfusion/ej2-vue-navigations --save
```

## Registering Menu component using `Vue.use()`

Import the Menu Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```javascript
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(MenuPlugin);

export default {}
```

> By registering component plugin in Vue, all child directives are also globally registered. We can also use `Vue.Component()` to register `Menu`. Refer [here](https://ej2.syncfusion.com/vue/documentation/base/getting-started/#registering-vue-component) to know more about component registration.

## Initialize Menu

Add the EJ2 Vue Menu using `<ejs-menu>` to the `<template>` section of the `App.vue` file in `src` directory.

```
<template>
<div>
<ejs-menu :items='menuItems'></ejs-menu>
</div>
</template>

<script>
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(MenuPlugin);

export default {
  data: function() {
        return {
            //Menu items definition
           menuItems:  [
        {
        text: 'File',
        items: [
            { text: 'Open' },
            { text: 'Save' },
            { text: 'Exit' }
        ]
    },
    {
        text: 'Edit',
        items: [
            { text: 'Cut' },
            { text: 'Copy' },
            { text: 'Paste' }
        ]
    },
    {
        text: 'View',
        items: [
            { text: 'Toolbar' },
            { text: 'Sidebar' }
        ]
    },
    {
        text: 'Tools',
        items: [
            { text: 'Spelling & Grammar' },
            { text: 'Customize' },
            { text: 'Options' }
        ]
    },
    { text: 'Go' },
    { text: 'Help' }
    ]
    };
  }
}
</script>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic Menu component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/menu/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs6" %}

## Group menu items with separator

The separators are both horizontal and vertical lines used to separate the menu items. You cannot select the separators, but you can enable separators to group the menu items using the [`separator`](https://ej2.syncfusion.com/vue/documentation/api/menu/menuItemModel/#separator) property. The `Open` and `Save` sub menu items are grouped using the `separator` property in the following sample.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/menu/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs7" %}

> The [`separator`](https://ej2.syncfusion.com/vue/documentation/api/menu/menuItemModel/#separator) property `should not` be given along with
the other fields in the [`MenuItem`](https://ej2.syncfusion.com/vue/documentation/api/menu/menuItemModel). You can also enable the separator to group **horizontal** menu items.

## See Also

* [Create menu using data source](./data-source-binding-and-custom-menu-items#data-binding)
* [Customize menu items using template support](./data-source-binding-and-custom-menu-items#custom-menu-items)
* [Integrating with Toolbar component](./use-case-scenarios#menu-in-toolbar)