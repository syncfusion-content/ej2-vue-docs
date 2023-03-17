---
layout: post
title: Getting started vue 3 with Vue Radio button component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Radio button component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion RadioButton Component in Vue 3

This section explains how to use RadioButton component in Vue 3 application.

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

## Adding Syncfusion RadioButton package in the application

Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. The RadioButton component will be used in this example. To install it use the following command.

```bash
npm install @syncfusion/ej2-vue-buttons --save
```

## Adding CSS reference for Syncfusion Vue RadioButton component

Import the needed css styles for the RadioButton component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
</style>
```

## Adding Syncfusion Vue RadioButton component in the application

You have completed all the necessary configurations needed  for rendering the Syncfusion Vue component. Now, you are going to add the RadioButton component using following steps.

1. Import the RadioButton component in the `<script>` section of the `src/App.vue` file.

    ```
      <script>
      import { RadioButtonComponent } from "@syncfusion/ej2-vue-buttons";
      </script>
    ```

2. Register the RadioButton component which is used in this example.

    ```js
      import { RadioButtonComponent } from "@syncfusion/ej2-vue-buttons";

        export default {
          name: "App",
          components: {
            "ejs-radiobutton": RadioButtonComponent
          }
        }
    ```
  
3. Add the component definition in template section.
  
    ```
      <template>
        <ul>
          <li><ejs-radiobutton label='Option 1' name='default'></ejs-radiobutton></li>
          <li><ejs-radiobutton label='Option 2' name='default' checked=true></ejs-radiobutton></li>
        </ul>
      </template>
    ```

4. Summarizing the above steps, update the `src/App.vue` file with following code.

    ```
      <template>
        <ul>
          <li><ejs-radiobutton label='Option 1' name='default'></ejs-radiobutton></li>
          <li><ejs-radiobutton label='Option 2' name='default' checked=true></ejs-radiobutton></li>
        </ul>
      </template>

      <script>
      import { RadioButtonComponent } from "@syncfusion/ej2-vue-buttons";

      export default {
        name: "App",
        components: {
          "ejs-radiobutton": RadioButtonComponent
        }
      }
      </script>
      <style>
      @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
      .e-radio-wrapper {
        margin-top: 18px;
      }

      li {
        list-style: none;
      }
      </style>
    ```

## Running the application

Run the application using the following command.

```bash
npm run serve
```

Web server will be initiated, Open the quick start app in the browser at port [`localhost:8080`](http://localhost:8080/).

![Output](./images/vue3-radioButton.PNG)