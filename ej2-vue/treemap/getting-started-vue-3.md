---
layout: post
title: Getting started vue 3 with Vue Treemap component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Treemap component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion TreeMap component in Vue 3

This section explains how to use TreeMap component in Vue 3 application.

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

![Vue 3 Terminal](./images/vue3-terminal.png)

## Adding Syncfusion TreeMap package in the application

Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. The TreeMap component will be used in this example. To install it in the **quickstart** folder use the following command.

```bash
npm install @syncfusion/ej2-vue-treemap --save
```

## Adding Syncfusion TreeMap component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the TreeMap component using following steps.

1. Import the TreeMap component in the `<script>` section of the `src/App.vue` file.

    ```
    <script>
    import { TreeMapComponent, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
    </script>
    ```

2. Register the TreeMap component which is used in this example. Find the list of child directives and tag names that can be used in the TreeMap component in the following table.

    | Directive Name   | Tag Name    |
    |------------------|-------------|
    | `LevelsDirective` | `e-levels` |
    | `LevelDirective`  | `e-level`  |
    | `ColorMappingsDirective`  | `e-colorMappings`  |
    | `ColorMappingDirective`  | `e-colorMapping`  |

    ```js
    import { TreeMapComponent, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
    //Component registration.
    export default {
        name: "App",
        components: {
            "ejs-treemap": TreeMapComponent
        }
    }
    ```

3. Add the TreeMap component definition in template section.

    ```
    <template>
      <ejs-treemap id="treemap" :dataSource="dataSource" :weightValuePath="weightValuePath" :leafItemSettings="leafItemSettings" :equalColorValuePath="equalColorValuePath" :legendSettings="legendSettings"></ejs-treemap>
    </template>
    ```

    Above is the TreeMap component definition with [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#datasource), [`weightValuePath`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#weightvaluepath), [`leafItemSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#leafitemsettings), [`equalColorValuePath`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#equalcolorvaluepath) and [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/) properties.

4. Declare the bound properties in the `script` section.

    ```js
    export default {
      name: "App",
      components: {
        "ejs-treemap": TreeMapComponent
      },
      data() {
        return {
          dataSource: [
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Falkland Islands",Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "French Guiana", Count:1 },
            { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 }
          ],
          weightValuePath: 'Count',
          equalColorValuePath: "Count",
          leafItemSettings: {
            labelPath: "State",
            colorMapping: [
              { value: "25", color: "#634D6F" },
              { value: "12", color: "#B34D6D" },
              { value: "9", color: "#557C5C" },
              { value: "7", color: "#44537F" },
              { value: "6", color: "#637392" },
              { value: "3", color: "#7C754D" },
              { value: "2", color: "#2E7A64" },
              { value: "1", color: "#95659A" }
            ]
          },
          legendSettings: {
            visible: true
          }
        };
      },
      provide: {
        treemap: [TreeMapLegend]
      },
    };
    ```

5. Summarizing the above steps, update the `src/App.vue` file with following code.

    ```
    <template>
      <ejs-treemap id="treemap" :dataSource="dataSource" :weightValuePath="weightValuePath" :leafItemSettings="leafItemSettings" :equalColorValuePath="equalColorValuePath" :legendSettings="legendSettings"></ejs-treemap>
    </template>

    <script>
    import { TreeMapComponent, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";

    export default {
      name: "App",
      components: {
        "ejs-treemap": TreeMapComponent
      },
      data() {
        return {
          dataSource: [
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Falkland Islands",Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "French Guiana", Count:1 },
            { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 }
          ],
          weightValuePath: 'Count',
          equalColorValuePath: "Count",
          leafItemSettings: {
            labelPath: "State",
            colorMapping: [
              { value: "25", color: "#634D6F" },
              { value: "12", color: "#B34D6D" },
              { value: "9", color: "#557C5C" },
              { value: "7", color: "#44537F" },
              { value: "6", color: "#637392" },
              { value: "3", color: "#7C754D" },
              { value: "2", color: "#2E7A64" },
              { value: "1", color: "#95659A" }
            ]
          },
          legendSettings: {
            visible: true
          }
        };
      },
      provide: {
        treemap: [TreeMapLegend]
      }
    };
    </script>
    ```

6. Run the application using the following command.

    ```bash
    npm run serve
    ```

The web server will be initiated and open the **quickstart** app in the browser at port [`localhost:8080`](http://localhost:8080/).

![Output](./images/vue3-treemap-demo.png)

Refer the following sample, [vue3-treemap-getting-started](https://github.com/SyncfusionExamples/vue3-treemap-getting-started).