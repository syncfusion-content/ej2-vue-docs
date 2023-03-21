---
layout: post
title: Getting started vue3 with Vue Multi select component | Syncfusion
description:  Checkout and learn about Getting started vue3 with Vue Multi select component of Syncfusion Essential JS 2 and more details.
control: Getting started vue3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to use Syncfusion Vue MultiSelect components in Vue 3 application.

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

## Adding Syncfusion MultiSelect package in the application

Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

The MultiSelect component will be used in this example. To install it use the following command.

```bash
npm install @syncfusion/ej2-vue-dropdowns --save
```

## Adding CSS reference for Syncfusion Vue MultiSelect component

Import the needed css styles for the MultiSelect component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
```

## Adding Syncfusion Vue MultiSelect component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the MultiSelect component using following steps.

Import the MultiSelect component in the `<script>` section of the `src/App.vue` file.

```
<script>
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
</script>
```

Register the MultiSelect component.

 ```js
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
//Component registeration
export default {
    name: "App",
    components: {
        'ejs-multiselect' : MultiSelectComponent,
    }
}
```

Add the component definition in template section.

```
<template>
    <div class="control_wrapper">
       <ejs-multiselect id='multiselect' :dataSource='sportsData'></ejs-combobox>
    </div>
</template>
```

Summarizing the above steps, update the `src/App.vue` file with following code.

```
<template>
    <div class="control_wrapper">
        <ejs-multiselect id='multiselect' :dataSource='sportsData'></ejs-multiselect>
    </div>
</template>
<script>
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
//Component registeration
export default {
    name: 'App',
    components: {
        "ejs-multiselect": MultiSelectComponent
    },
    data () {
        return {
            sportsData: ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis']
        }
    }
}
</script>
<style>
@import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
```

## Running the application

Run the application using the following command.

```bash
npm run serve
```

## Configure the Popup List

By default, the width of the popup list automatically adjusts according to the MultiSelect input element's width and the height of the popup list has '300px'.

You can also customize the suggestion list height and width using [popupHeight](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#popupheight) &nbsp;and [popupWidth](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#popupwidth) properties respectively.

In the following sample, popup list's width and height are configured.

```
<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-multiselect id='multiselect' :dataSource='sportsData' popupHeight="250px" popupWidth="250px" placeholder="Find a game"></ejs-multiselect>
    </div>
  </div>
</template>
<script>
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
//Component registeration
export default {
    name: 'App',
    components: {
        "ejs-multiselect": MultiSelectComponent
    },
    data (){
        return {
            sportsData: ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis']
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
```

Output be like the below.

![Multiselect suggestion list customized height and width](./images/popup.png)

## See Also

* [How to bind the data](./data-binding/)