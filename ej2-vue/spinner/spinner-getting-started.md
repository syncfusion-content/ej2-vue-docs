---
layout: post
title: Spinner getting started with Vue Spinner component | Syncfusion
description:  Checkout and learn about Spinner getting started with Vue Spinner component of Syncfusion Essential JS 2 and more details.
control: Spinner getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to use Syncfusion Vue Spinner component in Vue 3 application.

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

## Adding Syncfusion Spinner package in the application

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

Install the `Spinner` component by using the below npm command.

```bash
npm install @syncfusion/ej2-popups --save
```

## Adding CSS reference for Syncfusion Vue3 Spinner component

Import the needed css styles for the Spinner component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>
```

## Adding Syncfusion Vue3 Spinner component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the Spinner.

    ```
    <template>
      <div id="app"></div>
    </template>
    <script>
    import {
      createSpinner,
      showSpinner,
      hideSpinner,
    } from "@syncfusion/ej2-vue-popups";

    export default {
      name: "App",
      mounted: function () {
        //createSpinner() method is used to create spinner
        createSpinner({
          // Specify the target for the spinner to show
          target: document.getElementById("app"),
        });

        // showSpinner() will make the spinner visible
        showSpinner(document.getElementById("app"));

        setInterval(function () {
          // hideSpinner() method used hide spinner
          hideSpinner(document.getElementById("app"));
        }, 100000);
      },

      data: function () {
        return {};
      },
      methods: {},
    };
    </script>
    <style>
      @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
    </style>
    ```

## Running the application

Run the application using the following command.

```bash

npm run serve

```

Web server will be initiated, Open the quick start app in the browser at port [`localhost:8080`](http://localhost:8080/).

![Output](./images/spinner.png)
