---
layout: post
title: Getting started with Vue Ribbon component | Syncfusion
description:  Checkout and learn about Getting started with Vue Ribbon component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Ribbon, and configure its available
functionalities in Vue using [`Vue quickstart`](https://github.com/vuejs/vue-cli) seed repository.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the Ribbon component in your application.

```js
|-- @syncfusion/ej2-vue-ribbon
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-dropdowns    
    |-- @syncfusion/ej2-navigations        
    |-- @syncfusion/ej2-ribbon
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

Install Syncfusion `Ribbon` packages using below command.

```bash
npm install @syncfusion/ej2-vue-ribbon --save
```

## Registering Ribbon component using `Vue.use()`

Import the Ribbon Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```javascript
import Vue from "vue";
import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
Vue.use(RibbonPlugin);
export default {};
```

> By registering component plugin in Vue, all child directives are also globally registered.
> We can also use `Vue.Component()` to register `Ribbon`.
> Refer [here](https://ej2.syncfusion.com/vue/documentation/getting-started/tutorial#register-the-syncfusion-vue-component) to know more about component registration.

## Initialize Ribbon

Add the EJ2 Vue Ribbon using `<ejs-ribbon>` to the `<template>` section of the `App.vue` file in `src` directory.

```
  <template>
    <ejs-ribbon id="ribbon"></ejs-ribbon>
  </template>

  <script>
    import Vue from "vue";
    import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
    Vue.use(RibbonPlugin);
    export default {};
  </script>

```

## Adding Ribbon Tab

In Ribbon, the options are arranged in tabs for easy access. You can use the `e-ribbon-tab` directive to define the ribbon tab like below.

```
  <template>
    <ejs-ribbon id="ribbon">
      <e-ribbon-tabs>
        <e-ribbon-tab header="Home"></e-ribbon-tab>
      </e-ribbon-tabs>
    </ejs-ribbon>
  </template>

  <script>
    import Vue from "vue";
    import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
    Vue.use(RibbonPlugin);
    export default {};
  </script>

```

## Adding Ribbon Group

To define a ribbon group under each tab, you can use the `e-ribbon-group` directive like below. The `orientation` property of ribbon group defines whether the collection of items will be rendered column-wise or row-wise.

```
  <template>
    <ejs-ribbon id="ribbon">
      <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
          <e-ribbon-groups>
            <e-ribbon-group header="Clipboard" orientation="Row"></e-ribbon-group>
          </e-ribbon-groups>
        </e-ribbon-tab>
      </e-ribbon-tabs>
    </ejs-ribbon>
  </template>

  <script>
    import Vue from "vue";
    import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
    Vue.use(RibbonPlugin);
    export default {};
  </script>

```

## Adding Ribbon Items

You can use the `e-ribbon-collection` directive to define each ribbon collection that contains one or more items. To define each ribbon item, you can use the `e-ribbon-item` directive and the `type` property to specify the type of control to be rendered, like a button, a drop-down button, a combo box, and more.

```
  <template>
    <ejs-ribbon id="ribbon">
      <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
          <e-ribbon-groups>
            <e-ribbon-group header="Clipboard" orientation="Column">
              <e-ribbon-collections>
                <e-ribbon-collection id="paste-collection">
                  <e-ribbon-items>
                    <e-ribbon-item type="SplitButton" :splitButtonSettings="pasteSettigs"></e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
                <e-ribbon-collection id="cutcopy-collection">
                  <e-ribbon-items>
                    <e-ribbon-item type="Button" :buttonSettings="cutButton"></e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="copyButton"></e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
          </e-ribbon-groups>
        </e-ribbon-tab>
      </e-ribbon-tabs>
    </ejs-ribbon>
  </template>

  <script>
    import Vue from "vue";
    import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
    Vue.use(RibbonPlugin);

    export default {
      data: function () {
        return {
          pasteSettigs:{ 
            iconCss: "e-icons e-paste", content: "Paste",
            items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
          },
          cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
          copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
        }
      }
    };
  </script>

```

## Adding CSS reference for Syncfusion Vue Ribbon component

Import the needed CSS styles for the Ribbon component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>

```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example illustrates how tabs, groups, collections, and items are used in a ribbon control to form the ribbon layout.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/getting-started-cs1" %}
