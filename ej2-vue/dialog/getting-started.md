---
layout: post
title: Getting started with Vue Dialog Component | Syncfusion
description:  Checkout and learn about getting started with Vue Dialog component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue Dialog Component

This section explains how to create a simple Dialog and how to configure the Dialog component.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The list of dependencies required to use the Dialog component in your application is given below:

```javascript
|-- @syncfusion/ej2-vue-popups
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-vue-buttons
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-buttons
```

## Get Started with Vue CLI

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

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use Dialog component.

To install Dialog component, use the following command

```bash
npm install @syncfusion/ej2-vue-popups –save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';

Vue.use(DialogPlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of Component from Component Plugin and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { DialogComponent, DialogPlugin } from '@syncfusion/ej2-vue-popups';

Vue.component(DialogPlugin.name, DialogComponent);
```

> By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Creating Vue sample

Add the EJ2 Vue Dialog using `<ejs-dialog>` to the `<template>` section of the `App.vue` file in src directory, the content attribute of the Dialog component is provided as name in data option in the `<script>` section.

```
<template>
    <div id="app">
    <ejs-dialog :header="Dialog" :content="content" ></ejs-dialog>
  </div>
</template>
<script>
import Vue from 'vue';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';

Vue.use(DialogPlugin);
export default {
  name: 'app',
   data () {
    return {
      content: 'The dialog component is used to display information and get input from the user.'
    }
  }
}
</script>
```

## Adding CSS reference

Add Dialog component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Running the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs1" %}

> In the dialog control, max-height is calculated based on the dialog target element height. If the target property is not configured, the document.body is considered as a target. Therefore, to show a dialog in proper height, you need to add min-height to the target element.
> If the dialog is rendered based on the body, then the dialog will get the height based on its body element height. If the height of the dialog is larger than the body height, then the dialog's height will not be set. For this scenario, we can set the CSS style for the html and body to get the dialog height.

```

html, body {
   height: 100%;
}

```

## Modal dialog

A modal shows an overlay behind the Dialog. So, the user should interact the Dialog compulsory before interacting with the remaining content in an application.

While the user clicks the overlay, the action can be handled through the [overlayClick](https://ej2.syncfusion.com/vue/documentation/api/dialog/#overlayclick) event. In the below sample, the Dialog close action is performed while clicking on the overlay.

> When the modal dialog is opened, the Dialog's target scrolling will be disabled. The scrolling will be enabled again once close the Dialog.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/modal-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/modal-cs1" %}

## Enable header

The Dialog header can be enabled by adding the header content as text or HTML content through the [header](https://ej2.syncfusion.com/vue/documentation/api/dialog/#header) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/header-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/header-cs1" %}

## Enable footer

The Dialog provides built-in support to render the buttons on the footer (for ex: 'OK' or 'Cancel' buttons). Each Dialog button allows the user to perform any action while clicking on it.

The primary button will be focused automatically on open the Dialog, and add the `click` event to handle the actions

> When the Dialog initialize with more than one primary buttons, the first primary button gets focus on open the Dialog.

The below sample is rendered with button and its click event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/footer-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/footer-cs1" %}

## Draggable

The Dialog supports to drag within its target container by grabbing the Dialog header, which allows the user to reposition the Dialog dynamically.

> The Dialog can be draggable only when the Dialog header is enabled. From `16.2.x` version, enabled draggable support for modal dialog also.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/draggable-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/draggable-cs1" %}

## Positioning

The Dialog can be positioned using the [position](https://ej2.syncfusion.com/vue/documentation/api/dialog/#position) property by providing the X and Y co-ordinates. It can be positioned inside the target of the container or `<body>` of the element based on the given X and Y values.

for X is: left, center, right (or) any offset value
for Y is: top, center, bottom (or) any offset value
The below example demonstrates the different Dialog positions.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/position-cs1" %}

## See Also

* [Load dialog content using AJAX](./how-to/load-dialog-content-using-ajax)
* [How to position the dialog on center of the page on scrolling](./how-to/position-the-dialog-on-center-of-the-page-on-scrolling)
* [Prevent closing of modal dialog](./how-to/prevent-closing-of-modal-dialog)
* [Close dialog while click on outside of dialog](./how-to/close-dialog-while-click-on-outside-of-dialog)
* [How to make a reusable alert and confirm dialog](./dialog-utlility)
