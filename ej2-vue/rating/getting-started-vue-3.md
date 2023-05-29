---
layout: post
title: Getting started vue 3 with Vue Rating component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Rating component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Rating Component in Vue 3

This section explains how to use Rating component in Vue 3 application.

## Prerequisites

* `vue` : `3+`
* `node` : `10.15+`
* `vue-class-component` : `8.0.0-rc.1`

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

## Adding Syncfusion Rating package in the application

Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. The Rating component will be used in this example. To install it use the following command.

```bash
npm install @syncfusion/ej2-vue-inputs --save
```

## Adding CSS reference for Syncfusion Vue Rating component

Import the needed css styles for the Rating component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
</style>
```

## Adding Syncfusion Vue Rating component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the Rating component using following steps.

1. Import the Rating component in the `<script>` section of the `src/App.vue` file.

    ```
      <script>
      import { RatingComponent } from "@syncfusion/ej2-vue-inputs";
      </script>
    ```

2. Register the Rating component which is used in this example.
  
    ```js
        import { RatingComponent } from "@syncfusion/ej2-vue-inputs";

        export default {
            name: "App",
            components: {
            "ejs-rating": RatingComponent
            }
        }
    ```

3. Add the component definition in template section.

    ```
    <template>
        <ejs-rating id="rating"></ejs-rating>
    </template>

    ```

4. Summarizing the above steps, update the `src/App.vue` file with following code.

    ```
    <template>
        <ejs-rating id="rating"></ejs-rating>
    </template>

    <script>
    import { RatingComponent } from "@syncfusion/ej2-vue-inputs";

    export default {
        name: "App",
        components: {
          "ejs-rating": RatingComponent
        },
        data () {
            return {};
        }
    }
    </script>
    <style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
    </style>
    ```

![Output](./images/rating-component.png)

## Value

You can set the rating value by using the [`value`](https://ej2.syncfusion.com/vue/documentation/api/rating#value) property.

```
<template>
    <ejs-rating id="rating" value="3.0"></ejs-rating>
</template>

<script>
import { RatingComponent } from "@syncfusion/ej2-vue-inputs";

export default {
    name: "App",
    components: {
        "ejs-rating": RatingComponent
    },
    data () {
        return {};
    }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
</style>
```

![Output](./images/rating-value-sample.png)

## Running the application

Run the application using the following command.

```bash
npm run serve
```

Web server will be initiated, Open the quick start app in the browser at port `localhost:8080`.
