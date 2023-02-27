---
layout: post
title: Getting started vue 3 with Vue Chips component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Chips component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Chips Component in Vue 3

This section explains how to use Chips component in Vue 3 application.

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

## Adding Syncfusion Chips package in the application

Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.The Chips component will be used in this example. To install it use the following command.

```bash
npm install @syncfusion/ej2-vue-buttons --save
```

## Adding CSS reference for Syncfusion Vue Chips component

Import the needed css styles for the  Chips component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
</style>
```

## Adding Syncfusion Vue Chips component in the application

You have completed all the necessary configurations needed  for rendering the Syncfusion Vue component. Now, you are going to add the Chips component using following steps.

1. Import the Chips component in the `<script>` section of the `src/App.vue` file.

    ```
      <script>
        import { ChipListComponent, ChipsDirective, ChipDirective } from "@syncfusion/ej2-vue-buttons";
      </script>
    ```

2. Register the Chips component along with the required child directives which are used in this example. Find the list of child directives and the tag names that can be used in the Chips component in the following table.
  
        | Directive Name   | Tag Name    |
        |------------------|-------------|
        | `ChipsDirective` | `e-chips` |
        | `ChipDirective`  | `e-chip`  |

    ```js
        import { ChipListComponent, ChipsDirective, ChipDirective } from "@syncfusion/ej2-vue-buttons";

        export default {
            name: "App",
            components: {
            "ejs-chiplist": ChipListComponent,
            "e-chips": ChipsDirective,
            "e-chip": ChipDirective
            }
        }
    ```

    In the above code snippet, you have registered ChipList and the chips directives. Chips directives are used to define the chip definition for the Chips component.

3. Add the component definition in template section.

    ```
    <template>
        <ejs-chiplist id="chip">
            <e-chips>
                <e-chip text="Andrew"></e-chip>
                <e-chip text="Janet"></e-chip>  
                <e-chip text="Laura"></e-chip>
                <e-chip text="Margaret"></e-chip>
            </e-chips>
        </ejs-chiplist>
    </template>

    ```

4. Summarizing the above steps, update the `src/App.vue` file with following code.

    ```
    <template>
        <ejs-chiplist id="chip">
            <e-chips>
                <e-chip text="Andrew"></e-chip>
                <e-chip text="Janet"></e-chip>  
                <e-chip text="Laura"></e-chip>
                <e-chip text="Margaret"></e-chip>
            </e-chips>
        </ejs-chiplist>
    </template>

    <script>
        import { ChipListComponent, ChipsDirective, ChipDirective } from "@syncfusion/ej2-vue-buttons";

        export default {
            name: "App",
            components: {
            "ejs-chiplist": ChipListComponent,
            "e-chips": ChipsDirective,
            "e-chip": ChipDirective
            }
        }
    </script>
    <style>
        @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
        @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
    </style>
    ```

## Running the application

Run the application using the following command.

```bash
npm run serve
```

Web server will be initiated, Open the quick start app in the browser at port [`localhost:8080`](http://localhost:8080/).

![Output](./images/vue3-chips-demo.PNG)
