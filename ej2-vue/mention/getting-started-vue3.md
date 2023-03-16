---
layout: post
title: Getting started vue3 with Vue Mention component | Syncfusion
description:  Checkout and learn about Getting started vue3 with Vue Mention component of Syncfusion Essential JS 2 and more details.
control: Getting started vue3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to use Syncfusion Vue Mention components in Vue 3 application.

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

## Adding Syncfusion Mention package in the application

Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. The Mention component will be used in this example. To install it use the following command.

```bash
npm install @syncfusion/ej2-vue-dropdowns --save
```

## Adding CSS reference for Syncfusion Vue Mention component

Import the needed css styles for the Mention component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-vue-popups/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-vue-list/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css";
</style>
```

## Adding Syncfusion Vue Mention component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the Mention component using following steps.

Import the Mention component in the `<script>` section of the `src/App.vue` file.

```
<script>
    import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";
</script>
```

Register the Mention component.

 ```js
import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";
//Component registeration
export default {
    name: "App",
    components: {
      'ejs-mention' : MentionComponent,
    }
}
```

Add the component definition in template section.

```
<template>
    <div class="control_wrapper">
        <label style="font-size: 15px; font-weight: 600;">Comments</label>
        <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
        <ejs-mention id='defaultMention' :target='mentionTarget' :dataSource='userData'></ejs-mention>
    </div>
</template>
```

Summarizing the above steps, update the `src/App.vue` file with following code.

```
<template>
    <div class="control_wrapper">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type # and tag user"></div>
        <ejs-mention id='defaultMention' :target='mentionTarget' :dataSource='userData'></ejs-mention>
    </div>
</template>
<script>
    import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";
    //Component registration
    export default {
        name: 'App',
        components: {
            "ejs-mention": MentionComponent
        },
        data () {
            return {
                target: "#mentionElement",
                userData: ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph']
            }
        }
    }
</script>
<style>

    @import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-list/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css";

    #app {
        color: #008cff;
        height: 40px;
        left: 15%;
        position: absolute;
        top: 10%;
        width: 30%;
    }

    #comment {
        font-size: 15px;
        font-weight: 600;
    }

    #mentionElement {
        min-height: 100px;
        border: 1px solid #D7D7D7;
        border-radius: 4px;
        padding: 8px;
        font-size: 14px;
        width: 600px;
    }

    div#mentionElement[placeholder]:empty:before {
        content: attr(placeholder);
        color: #555;
    }
</style>
```

## Running the application

Run the application using the following command.

```bash
npm run serve
```

## Display Mention character

By using the [showMentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#showMentionChar) property, the text content can be displayed along with the mention character. You can customize the mention character by using the [mentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#mentionChar) property in the Mention component.

> By default, the [mentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#mentionChar) is `@` and the [showMentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#showMentionChar) property is disabled.

The following example code displays the text content along with the mention character configured as `#`.

```
<template>
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type # and tag user"></div>
        <ejs-mention id='defaultMention' showMentionChar='true' mentionChar='#' :target='mentionTarget' :dataSource='userData'></ejs-mention>
  </div>
</template>
<script>
    import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";
    //Component registration
    export default {
        name: 'App',
        components: {
            "ejs-mention": MentionComponent
        },
        data () {
            return {
                target: "#mentionElement",
                userData: ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph']
            }
        }
    }
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-vue-popups/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-vue-list/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css";

    #app {
        color: #008cff;
        height: 40px;
        left: 15%;
        position: absolute;
        top: 10%;
        width: 30%;
    }

    #comment {
        font-size: 15px;
        font-weight: 600;
    }

    #mentionElement {
        min-height: 100px;
        border: 1px solid #D7D7D7;
        border-radius: 4px;
        padding: 8px;
        font-size: 14px;
        width: 600px;
    }

    div#mentionElement[placeholder]:empty:before {
        content: attr(placeholder);
    }
</style>
```
