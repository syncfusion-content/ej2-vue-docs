---
layout: post
title: Getting started with Vue Dialog component | Syncfusion
description:  Checkout and learn about Getting started with Vue Dialog component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Dialog Component

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Dialog component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setup the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. Follow these steps to install Vue CLI and create a new project:

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

This article uses the [Vue Dialog component](https://www.syncfusion.com/vue-components/vue-modal-dialog) as an example. Install the `@syncfusion/ej2-vue-popups` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-popups --save
```
or

```bash
yarn add @syncfusion/ej2-vue-popups
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> components require CSS stylesheets to display correctly. You can import themes in various ways, such as using CSS or SASS styles from npm packages, CDN, CRG, and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to reference themes in a Vue project.

In this article, the `Material3` theme is applied using CSS styles, which are available in installed packages. The necessary `Material3` CSS styles for the Dialog component and its dependents were imported into the `<style>` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of CSS imports matters. Import base styles first, then component-specific styles. Missing CSS imports can result in misaligned layouts, buttons without styling, or missing visual elements in popups and dialogs.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Dialog component:

1\. First, import and register the Dialog component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<script>
import { DialogComponent } from '@syncfusion/ej2-vue-popups';

export default {
    components: {
      'ejs-dialog': DialogComponent,
    }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Dialog component.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<template>
  <div>
    <div class="col-lg-12 control-section">
        <ejs-dialog :buttons='dlgButtons' ref="dialogObj" :content='content' showCloseIcon=true >
        </ejs-dialog>
    </div> 
  </div>
</template>

<script>
import { DialogComponent } from '@syncfusion/ej2-vue-popups';

export default {
    components: {
      'ejs-dialog': DialogComponent,
    },
    data: function() {
        return {
            content: '<p>In the Succinctly series, Syncfusion created a robust, free library of more than 130 technical e-books formatted for PDF, Kindle, and EPUB.</p>',
        }
    },
}
</script>

{% endhighlight %}
{% endtabs %}

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

A modal shows an overlay behind the Dialog. The user must interact with the Dialog before interacting with the remaining content in an application.

While the user clicks the overlay, the action can be handled through the [overlayClick](https://ej2.syncfusion.com/vue/documentation/api/dialog/index-default#overlayclick) event. In the below sample, the Dialog close action is performed while clicking on the overlay.

> When the modal dialog is opened, the Dialog's target scrolling will be disabled. The scrolling will be enabled again once close the Dialog.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/modal-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/modal-cs1" %}

## Enable header

The Dialog header can be enabled by adding the header content as text or HTML content through the [header](https://ej2.syncfusion.com/vue/documentation/api/dialog/index-default#header) property.

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

The Dialog can be positioned using the [position](https://ej2.syncfusion.com/vue/documentation/api/dialog/index-default#position) property by providing the X and Y co-ordinates. It can be positioned inside the target of the container or `<body>` of the element based on the given X and Y values.

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
