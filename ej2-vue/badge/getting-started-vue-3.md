---
layout: post
title: Getting started vue 3 with Vue Badge component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Badge component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Badge Component in Vue 3

This section explains how to use Badge component in Vue 3 application.

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

## Adding Syncfusion Badge package in the application

Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.
The Badge component will be used in this example. To install it use the following command.

```bash
npm install @syncfusion/ej2-vue-notifications --save
```

## Adding CSS reference for Syncfusion Vue Badge component

Import the needed css styles for the Badge component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>
```

## Adding Syncfusion Vue Badge component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the Badge component using following steps.

1. Add an HTML span element with `e-badge` class inside any wrapper element `(h1)` into the `<template>` section of the `App.vue` file in `src` directory.

    ```
    <template>
        <div id='element'>
            <h1>Badge Component <span class="e-badge e-badge-primary">New</span></h1>
        </div>
    </template>
    ```

2. Summarizing the above steps, update the `src/App.vue` file with following code.

    ```
    <template>
        <div id='element'>
            <h1>Badge Component <span class="e-badge e-badge-primary">New</span></h1>
        </div>
    </template>

    <script>
    export default {
        name: "App"
    }
    </script>
    <style>
    @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
    #element {
        display: flex;
        width: 400px;
        margin: auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
        justify-content: center;
    }
    </style>

    ```

## Running the application

Run the application using the following command.

```bash
npm run serve
```

Web server will be initiated, Open the quick start app in the browser at port `localhost:8080`.

![Output](./images/vue3-badge-demo.PNG)
