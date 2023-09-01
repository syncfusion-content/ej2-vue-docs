---
layout: post
title: Getting started with Vue Sidebar component | Syncfusion
description:  Checkout and learn about Getting started with Vue Sidebar component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section briefly explains how to create a simple **Sidebar** component, and configure it in VueJS using Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart) &nbsp;seed repository.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the Sidebar component in your application.

```js
|-- @syncfusion/ej2-vue-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-inputs
            |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Get Started with Vue CLI

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

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use Sidebar component.

To install Sidebar component, use the following command

```bash
npm install @syncfusion/ej2-vue-navigations --save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { SidebarComponent, SidebarPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.component(SidebarPlugin.name, SidebarComponent);
```

> By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Creating Vue Sample

Add the EJ2 Vue Sidebar using `<ejs-sidebar>` to the `<template>` section of the `App.vue` file in src directory, the content attribute of the Sidebar component is provided as name in data option in the `<script>` section.

```
<template>
    <div id="app">
        <ejs-sidebar>
              <div class="title"> Sidebar content</div>
        </ejs-sidebar>
  </div>
</template>
<script>
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(SidebarPlugin);
export default {
}
</script>
```

## Adding CSS Reference

To render the Sidebar component, need to import Sidebar and its dependent component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Running the Application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sidebar/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/getting-started-cs4" %}

## Enable backdrop

Enabling the [showBackdrop](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#showbackdrop) in the Sidebar component will prevent the main content from user interactions, when it is in expanded state. Here, the DOM elements will not get changed. It only closes the main content by covering with a black backdrop overlay and focuses the Sidebar in the screen. Sidebar can be rendered with specific width by setting `width` property.

N> To achieve a proper **backdrop**, we suggest that you create a wrapper parent container for the div block in which you intend to enable the backdrop. Set the class name of this parent container as the **target** for the Sidebar. Alternatively, you can place an empty div container after the target container.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sidebar/backdrop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/backdrop-cs1" %}

## Position

Positioning the Sidebar to the right or left of the main content can be achieved by using the [position](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#position) property. If the position is not set, the Sidebar will expand from the left to the body element. [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#enablepersistence) will persist the component's state between page reloads. [`change`](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#change) event will be triggered when the state(expand/collapse) of the component is changed.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sidebar/position-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/position-cs2" %}

## Animate

Animation transitions can be set while expanding or collapsing the Sidebar using the [`animate`](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#animate) property. By default , [`animate`](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#animate) property is set to true. [`enableRTL`](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#enablertl) will display the sidebar in the right-to-left direction.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sidebar/animate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/animate-cs1" %}

## Close on document click

Sidebar can be closed on document click by setting [`closeOnDocumentClick`](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#closeondocumentclick) to true. If this property is not set, the Sidebar will not close on document click since its default value is false. Sidebar can be kept opened during rendering using [`isOpen`](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#isopen) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sidebar/document-click-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/document-click-cs1" %}

## Enable gestures

Expand or collapse the Sidebar while swiping in touch devices using `enableGestures` property. By default, `enableGestures` is set to true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sidebar/gestures-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/gestures-cs1" %}

## See Also

* [Sidebar with navigation menu](https://ej2.syncfusion.com/vue/demos/#/material/sidebar/sidebar-menu.html)
* [Sidebar responsive panel](https://ej2.syncfusion.com/vue/demos/#/material/sidebar/responsive-panel.html)
* [Sidebar with listView](./how-to/sidebar-with-listview)
