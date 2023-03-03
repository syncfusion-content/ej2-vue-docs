---
layout: post
title: Predefined dialogs getting started with Vue Predefined dialogs component | Syncfusion
description:  Checkout and learn about Predefined dialogs getting started with Vue Predefined dialogs component of Syncfusion Essential JS 2 and more details.
control: Predefined dialogs getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to use Syncfusion Vue Predefined Dialogs in Vue 3 application.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Creating Vue application using Vue CLI

The easiest way to create a Vue application is to use the [`Vue CLI`](https://github.com/vuejs/vue-cli). Vue CLI versions above [`4.5.0`](https://v3.vuejs.org/guide/migration/introduction.html#vue-cli) are mandatory for creating applications using Vue 3. Use the following command to uninstall older versions of the Vue CLI.

```bash
npm uninstall vue-cli -g
```

Use the following commands to install the latest version of Vue CLI.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Create a new project using the command below.

```bash
vue create quickstart
cd quickstart

```

Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default (Vue 3)` from the menu.

![Reference](./images/vue3-terminal.png)

## Adding Syncfusion Predefined Dialogs package in the application

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

Install the `Predefined Dialogs` by using the below npm command.

```bash
npm install @syncfusion/ej2-vue-popups --save
```

## Adding CSS reference for Syncfusion Vue3 Predefined Dialogs

Import the needed css styles for the Predefined Dialogs along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>
```

## Adding Syncfusion Vue3 Predefined Dialogs in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the Predefined Dialogs using following steps.

* Import the `DialogUtility` in the `<script>` section of the `src/App.vue` file.

    ```
    <script>
      import { DialogUtility } from "@syncfusion/ej2-vue-popups";
    </script>
    ```

* Update the `src/App.vue` file with following code.

    ```
    <template>
        <div class="predefinedDialogs">
          <ejs-button id="alertDlgBtn" v-on:click.native="alertBtnClick" cssClass="e-danger">Alert</ejs-button>
        </div>
    </template>

    <style>
        @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
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
    export default ({
      data: function () {
        return {};
      },
      methods: {
        alertBtnClick: function () {
        DialogUtility.alert({
          title: "Low battery",
          content: "10% of battery remaining",
          });
        }
      },
    });
    </script>
    ```

## Running the application

run the application using the following command.

```bash

npm run serve

```

web server will be initiated, open the quick start app in the browser at port [`localhost:8080`](http://localhost:8080/).