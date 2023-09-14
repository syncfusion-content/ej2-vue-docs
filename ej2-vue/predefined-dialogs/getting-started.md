---
layout: post
title: Getting started with Vue Predefined dialogs component | Syncfusion
description:  Checkout and learn about Getting started with Vue Predefined dialogs component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Predefined dialogs Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Predefined dialogs component

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

This article uses the `Vue Predefined dialogs` component as an example. Install the `@syncfusion/ej2-vue-popups` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-popups --save
```
or

```bash
yarn add @syncfusion/ej2-vue-popups
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the predefined dialogs component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Add Syncfusion Vue component

Follow the below steps to add the Vue Predefined dialogs component:

1\. First, import and register the Predefined dialogs component in the `script` section of the **src/App.vue** file. 

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  components: {
    'ejs-button': ButtonComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Predefined dialogs component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div>
    <div class="predefinedDialogs">
      <ejs-button id="alertDlgBtn" v-on:click.native="alertBtnClick" cssClass="e-danger">Alert</ejs-button>
      <span id="statusText"></span>
    </div>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

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
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
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
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  components: {
    'ejs-button': ButtonComponent
  },
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

### Show alert dialog

An alert dialog box used to display an errors, warnings, and information alerts that needs user awareness. This can be achieved by using the `DialogUtility.alert` method. The alert dialog is displayed along with the `OK` button. When user clicks on `OK` button, alert dialog will get closed.

In the below code example, alert dialog displayed on button click action.

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/predefined-dialogs/alert-dialog-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-dialog-cs1" %}

### Show confirm dialog

A confirm dialog box used to displays a specified message along with the `OK` and `Cancel` buttons. This can be achieved by using the `DialogUtility.confirm` method. It is used to get approval from the user, and it appears before any critical action. After get approval from the user the dialog will disappear automatically.

In the below code example, the confirm dialog displayed on `OK` and `Cancel` button click action.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/predefined-dialogs/confirm-dialog-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-dialog-cs1" %}

### Show Prompt dialog

A prompt dialog is used to get the input from the user. When the user clicks the `OK` button the input value from the dialog is returned. If the user clicks the `Cancel` button the null value is returned. After getting the input from the user the dialog will disappear automatically.

In the below code example, the confirm dialog displayed on `OK` and `Cancel` button click action.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/predefined-dialogs/prompt-dialog-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-dialog-cs1" %}
