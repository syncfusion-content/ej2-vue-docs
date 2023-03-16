---
layout: post
title: Getting started vue 3 with Vue Message component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Message component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Message Component in Vue 3

This section explains how to use the Syncfusion Vue Message component in Vue 3 application.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Creating Vue application using Vue CLI

The easiest way to create a Vue application is to use the [`Vue CLI`](https://github.com/vuejs/vue-cli). The Vue CLI versions above [`4.5.0`](https://v3.vuejs.org/guide/migration/introduction.html#vue-cli) are mandatory for creating applications using Vue 3. Use the following command to uninstall older versions of the Vue CLI.

```bash
npm uninstall vue-cli -g
```

Use the following commands to install the latest version of the Vue CLI.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Create a new project using the following command.

```bash
vue create quickstart
```

Initiating a new project prompts you to choose the type of project to be used for the current application. Select the option `Default (Vue 3)` from the menu.

![Reference](./images/vue3-terminal.png)

## Adding Syncfusion packages

The Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. The Message component will be used in this example. To install it, use the following command.

```bash
npm install @syncfusion/ej2-vue-notifications --save
```

## Adding CSS reference

Import the needed CSS styles for the Message component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/message/material.css";
</style>
```

## Adding Message component

You have completed all the necessary configurations needed for rendering the Syncfusion Vue Message component. Now, add the Message component using the following steps.

1. Import the Message component in the `<script>` section of the `src/App.vue` file.

     ```
      <script>
      import { MessageComponent } from "@syncfusion/ej2-vue-notifications";
      </script>

     ```
2. Register the Message component in the `src/App.vue` file which are used in this example.

     ```js
      import { MessageComponent } from '@syncfusion/ej2-vue-notifications';
      // Component registration
      export default {
         name: "App",
         components: {
            'ejs-message': MessageComponent
         }
      }
     ```
3. Add the component definition in the template section. Here, the `content` property binding definition.

     ```
      <template>
         <ejs-message id="msg" :content="content"></ejs-message>
      </template>
     ```
     Above is the Message component definition, with `content` property binding definition.
4. Declare the bound properties in the `script` section.

      ```js
      export default {
         name: 'App',
         components: {
            'ejs-Message': MessageComponent
         },
         data() {
            return {
               content: "Please read the comments carefully"
           }
         },
      };
      ```

5. Summarizing the above steps, update the `src/App.vue` file with the following code.

     ```
      <template>
         <ejs-message id="msg" :content="content"></ejs-message>
      </template>
      <script>
      import { MessageComponent } from "@syncfusion/ej2-vue-notifications";
      export default {
         name: "app",
         components: {
            "ejs-message": MessageComponent
         },
         data() {
            return {
               content: "Please read the comments carefully",
            };
         }
      }
      </script>
      <style>
         @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
         @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/message/material.css";
      </style>
     ```

## Running the application

Run the application using the following command.

```bash
npm run serve
```

A web server will be initiated. Open the quick start app in the browser at port `localhost:8080`.

![Message component.](./images/message-default.png)