---
layout: post
title: Getting started vue 3 with Vue Speed dial component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Speed dial component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion SpeedDial Component in Vue 3

This section explains how to use Speed Dial component in Vue 3 application.

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

## Adding Syncfusion Speed Dial package in the application

Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. The Speed Dial component will be used in this example. To install it use the following command.

```bash
npm install @syncfusion/ej2-vue-buttons --save
```

## Adding CSS reference for Syncfusion Vue Speed Dial component

Import the needed css styles for the Speed Dial component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## Adding Syncfusion Vue Speed Dial component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the Speed Dial component using following steps.

1. Import the ProgressButton component in the `<script>` section of the `src/App.vue` file.

    ```
      <script>
      import { SpeedDialComponent } from "@syncfusion/ej2-vue-buttons";
      </script>
    ```

2. Register the SpeedDial component which is used in this example.
  
    ```js
        import { SpeedDialComponent } from "@syncfusion/ej2-vue-buttons";

        export default {
            name: "App",
            components: {
            "ejs-speeddial": SpeedDialComponent
            }
        }
    ```

3. Add the component definition in template section.

    ```
    <template>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;">
            <ejs-speeddial id='speeddial'  content='Edit' target='#targetElement' :items='items'></ejs-speeddial>
        </div>
    </template>

    ```

4. Summarizing the above steps, update the `src/App.vue` file with following code.

    ```
    <template>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;">
            <ejs-speeddial id='speeddial'  content='Edit' target='#targetElement' :items='items'></ejs-speeddial>
        </div>
    </template>

    <script>
    import { SpeedDialComponent } from "@syncfusion/ej2-vue-buttons";

    export default {
        name: "App",
        components: {
          "ejs-speeddial": SpeedDialComponent
        },
        data () {
            return {
                items:[
                {
                    text: 'Cut'
                },
                {
                    text: 'Copy'
                },
                {
                    text: 'Paste'
                }]
            };
        }
    }
    </script>
    <style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
    </style>
    ```
![Output](./images/speeddial-component.png)

## Positioning

The speed dial can be positioned using the [`position`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#position) property. The speed dial is positioned based on the [`target`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#target), if target is defined else positioned based on the browser viewport. The position values are TopLeft, TopCenter, TopRight, MiddleLeft, MiddleCenter, MiddleRight, BottomLeft, BottomCenter and BottomRight.

```
<template>
    <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;">
        <ejs-speeddial id='speeddial' content='Edit' position='BottomLeft' target='#targetElement' :items='items'></ejs-speeddial>
    </div>
</template>

<script>
import { SpeedDialComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    name: "App",
    components: {
        "ejs-speeddial": SpeedDialComponent
    },
    data () {
        return {
            items:[
            {
                text: 'Cut',
                iconCss:'e-icons e-cut'
            },
            {
                text: 'Copy',
                iconCss:'e-icons e-copy'
            },
            {
                text: 'Paste',
                iconCss:'e-icons e-paste'
            }]
        };
    }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

![Output](./images/speeddial-position-sample.png)

## Display Modes

You can use the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#mode) property to either display the menu in linear order like a list or like a radial menu in radial (circular) direction.

```
<template>
    <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;">
        <ejs-speeddial id='speeddial' content='Edit' position='BottomLeft' target='#targetElement' openIconCss='e-icons e-edit' :items='items' mode='Radial'></ejs-speeddial>
        <ejs-speeddial id='speeddial1' position='BottomRight' target='#targetElement' openIconCss='e-icons e-edit' :items='items' mode='Linear'></ejs-speeddial>
</div>
</template>

<script>
import { SpeedDialComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    name: "App",
    components: {
        "ejs-speeddial": SpeedDialComponent
    },
    data () {
        return {
            items:[
            {
                text: 'Cut',
                iconCss:'e-icons e-cut'
            },
            {
                text: 'Copy',
                iconCss:'e-icons e-copy'
            },
            {
                text: 'Paste',
                iconCss:'e-icons e-paste'
            }]
        };
    }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

![Output](./images/speeddial-mode-linear-sample.png)

![Output](./images/speeddial-mode-radial-sample.png)

## Action Item click

The speed dial control triggers the [`clicked`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#clicked) event when an action item is clicked. You can use this event to perform the required action.

```
<template>
    <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;">
        <ejs-speeddial id='speeddial' content='Edit'  target='#targetElement' openIconCss='e-icons e-edit' :items='items' :clicked="clicked"></ejs-speeddial>
</div>
</template>

<script>
import { SpeedDialComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    name: "App",
    components: {
        "ejs-speeddial": SpeedDialComponent
    },
    data () {
        return {
            items:[
            {
                text: 'Cut',
                iconCss:'e-icons e-cut'
            },
            {
                text: 'Copy',
                iconCss:'e-icons e-copy'
            },
            {
                text: 'Paste',
                iconCss:'e-icons e-paste'
            }]
        };
    },
    methods: {
      clicked: function(args) {
          alert(args.item.text+" is clicked");
      }
    }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

![Output](./images/speeddial-event-sample.png)

## Running the application

Run the application using the following command.

```bash
npm run serve
```

Web server will be initiated, Open the quick start app in the browser at port [`localhost:8080`](http://localhost:8080/).
