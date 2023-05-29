---
layout: post
title: Getting started with Vue Predefined dialogs component | Syncfusion
description:  Checkout and learn about Getting started with Vue Predefined dialogs component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple predefined dialogs and how to configure the predefined dialogs.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The list of dependencies required to use the predefined dialogs in your application is given below:

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

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use predefined dialogs.

To install predefined dialogs, use the following command

```bash
npm install @syncfusion/ej2-vue-popups –save
```

## Registering Vue Component

### Using Vue.use()

Refer the code snippet given below.

```ts
import { DialogUtility } from '@syncfusion/ej2-vue-popups';
Vue.use(DialogUtility);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

## Creating Vue sample

Add the following code to the `App.vue` file in src directory.

```
<template>
  <div>
    <div class="predefinedDialogs">
      <ejs-button id="alertDlgBtn" v-on:click.native="alertBtnClick" cssClass="e-danger">Alert</ejs-button>
      <span id="statusText"></span>
    </div>
  </div>
</template>

<style>
    @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
#statusText {
  font-size: 16px;
  margin-top: 20px;
}
.predefinedDialogs {
  height: 100%;
  min-height: 350px;
}
</style>

<script>
import Vue from "vue";
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);
export default {
  data: function () {
    return {};
  },
  methods: {
    alertBtnClick: function () {
      document.getElementById("statusText").style.display = "none";
      DialogUtility.alert({
        title: "Low battery",
        content: "10% of battery remaining",
      });
    },
  },
}
</script>
```

## Adding CSS reference

Add Predefined Dialogs's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

### Show alert dialog

An alert dialog box used to display an errors, warnings, and information alerts that needs user awareness. This can be achieved by using the `DialogUtility.alert` method. The alert dialog is displayed along with the `OK` button. When user clicks on `OK` button, alert dialog will get closed.

In the below code example, alert dialog displayed on button click action.

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/predefined-dialogs/alert-dialog-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-dialog-cs1" %}

### Show confirm dialog

A confirm dialog box used to displays a specified message along with the `OK` and `Cancel` buttons. This can be achieved by using the `DialogUtility.confirm` method. It is used to get approval from the user, and it appears before any critical action. After get approval from the user the dialog will disappear automatically.

In the below code example, the confirm dialog displayed on `OK` and `Cancel` button click action.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/predefined-dialogs/confirm-dialog-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-dialog-cs1" %}

### Show Prompt dialog

A prompt dialog is used to get the input from the user. When the user clicks the `OK` button the input value from the dialog is returned. If the user clicks the `Cancel` button the null value is returned. After getting the input from the user the dialog will disappear automatically.

In the below code example, the confirm dialog displayed on `OK` and `Cancel` button click action.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/predefined-dialogs/prompt-dialog-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-dialog-cs1" %}
