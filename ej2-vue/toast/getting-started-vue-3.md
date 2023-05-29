---
layout: post
title: Getting started vue 3 with Vue Toast component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Toast component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to use Syncfusion Vue Toast component in Vue 3 application.

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

## Adding Syncfusion Toast package in the application

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

Install the `Toast` component by using the below npm command.

```bash
npm install @syncfusion/ej2-vue-notifications --save
```

## Adding CSS reference for Syncfusion Vue Toast component

Import the needed css styles for the Toast component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>
```

## Adding Syncfusion Vue Toast component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the Toast component using following steps.

1. Import the Toast component in the `<script>` section of the `src/App.vue` file.

     ```
    <script>
        import { ToastComponent, ToastCloseArgs } from "@syncfusion/ej2-vue-notifications";
    </script>
     ```

2. Register the Toast component.

     ```javascript
            import { ToastComponent, ToastCloseArgs } from "@syncfusion/ej2-vue-notifications";
            //Component registeration
            export default {
                name: "App",
                components: {
                    "ejs-toast": ToastComponent,
                }
            }
     ```
3. Add the component definition in template section.

     ```
     <template>
        <div id="app">
          <ejs-toast ref='defaultRef' title='Matt sent you a friend request' timeOut=0 content='Hey, wanna dress up as wizards and ride our hoverboards?'></ejs-toast>
        </div>
      </template>
     ```

4. Summarizing the above steps, update the `src/App.vue` file with following code.

    ```

    <template>
      <div id="app">
        <ejs-toast
          id="toast_default"
          ref="defaultRef"
          title="Adaptive Tiles Meeting"
          timeOut="0"
          icon="e-meeting"
          content="Conference Room 01 / Building 135 10:00 AM-10:30 AM"
        ></ejs-toast>
      </div>
    </template>
    <script>
    import {
      ToastComponent,
      ToastCloseArgs,
    } from "@syncfusion/ej2-vue-notifications";

    export default {
      name: "App",
      components: {
        "ejs-toast": ToastComponent,
      },
      mounted: function () {
        this.$refs.defaultRef.show();
      },
      data: function () {
        return {};
      },
    };
    </script>
    <style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
    #toast_default .e-meeting::before {
      content: "\e705";
      font-size: 17px;
    }

    .bootstrap4 #toast_default .e-meeting::before {
      content: "\e763";
      font-size: 20px;
    }
    </style>
    ```

## Running the application

Run the application using the following command.

```bash

npm run serve

```

Web server will be initiated, Open the quick start app in the browser at port [`localhost:8080`](http://localhost:8080/).

![Output](./images/toast.png)
