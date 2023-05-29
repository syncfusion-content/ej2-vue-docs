---
layout: post
title: Getting started vue3 with Vue Textbox component | Syncfusion
description:  Checkout and learn about Getting started vue3 with Vue Textbox component of Syncfusion Essential JS 2 and more details.
control: Getting started vue3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to use Syncfusion Vue TextBox components in Vue 3 application.

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
```

Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default (Vue 3)` from the menu.

![Reference](./images/vue3-terminal.png)

## Adding Syncfusion TextBox package in the application

 Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

The TextBox component will be used in this example. To install it use the following command.

```bash
npm install @syncfusion/ej2-vue-inputs --save
```

## Adding CSS reference for Syncfusion Vue TextBox component

Import the needed css styles for the TextBox component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>
```

## Adding Syncfusion Vue TextBox component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the TextBox component using following steps.

Import the TextBox component in the `<script>` section of the `src/App.vue` file.

```
<script>
import { TextBoxComponent } from "@syncfusion/ej2-vue-inputs";
</script>
```

Register the TextBox component.

 ```js
import { TextBoxComponent } from "@syncfusion/ej2-vue-inputs";
//Component registeration
export default {
    name: "App",
    components: {
        'ejs-textbox' : TextBoxComponent,
    }
}
```

## Adding TextBox to the application

Add the input element with `e-input` class into the `<template>` section of the `App.vue` file in src directory.

    ```
    <template>
        <div id ='wrap'>
            <div id ='input-container'>
                <div>
                    <!--element which is going to render the TextBox-->
                    <input class="e-input" type="text" placeholder="Enter Date" />
                </div>
            </div>
        </div>
    </template>
    <script>
    export default {
    name: 'App',
    }
    </script>
    <style>
        @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
        @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

        .wrap {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 20px 10px;
            width: 340px;
        }
    </style>
    ```

## Adding icons to the TextBox

You can create a TextBox with icon as a group by creating the parent div element with the class `e-input-group` and add the icon element as span with the class `e-input-group-icon`. For detailed information, refer to the [Groups](./groups/) section.

```
<!--element which is going to render the TextBox with date icon-->
<div class="e-input-group">
    <input class="e-input" name='input' type="text" placeholder="Enter Date"/>
    <span class="e-input-group-icon e-input-popup-date"></span>
</div>
```

```
.e-input-group-icon.e-input-popup-date:before {
  content: "\e901";
}
```

## Running the application

Run the application using the following command.

```
npm run dev
```

## Floating label

The floating label TextBox floats the label above the TextBox after focusing, or filled with value in the TextBox.
You can create the floating label TextBox by using `floatLabelType` API.

    ```
    <template>
        <div class ='wrap'>
            <div id ='input-container'>
                <ejs-textbox id='textbox' floatLabelType="Auto" placeholder="First Name"></ejs-textbox>
            </div>
        </div>
    </template>
    <script>
    import { TextBoxComponent } from "@syncfusion/ej2-vue-inputs";
    export default {
        name: 'App',
        components: {
            "ejs-textbox": TextBoxComponent
        },
        data: function () {
            return {}
        },
    }
    </script>
    <style>
        @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
        @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

        .wrap {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 20px 10px;
            width: 340px;
        }
    </style>
    ```

Output be like the below.

![TextBox with floating label](./images/float.png)

## See Also

* [How to render TextBox programmatically](./how-to/add-textbox-programmatically)
* [How to add floating label to TextBox programmatically](./how-to/add-floating-label-to-textbox-programmatically)