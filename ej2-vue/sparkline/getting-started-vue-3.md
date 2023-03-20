---
layout: post
title: Getting started vue 3 with Vue Sparkline component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Sparkline component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Sparkline Charts component in Vue 3

This section explains how to use Sparkline Charts component in Vue 3 application.

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

## Adding Syncfusion Sparkline Charts package in the application

Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. The Sparkline Charts component will be used in this example. To install it in the **quickstart** folder use the following command.

```bash
npm install @syncfusion/ej2-vue-charts --save
```

## Adding Syncfusion Sparkline Charts component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the Sparkline Charts component using following steps.

1. Import the Sparkline Charts component in the `<script>` section of the `src/App.vue` file.

    ```
    <script>
    import { SparklineComponent, SparklineTooltip } from "@syncfusion/ej2-vue-charts";
    </script>
    ```

2. Register the Sparkline Charts component along with the required child directives which are used in this example. Find the list of child directives and tag names that can be used in the Sparkline Charts component in the following table.

    | Directive Name   | Tag Name    |
    |------------------|-------------|
    | `RangeBandSettingsDirective` | `e-rangeBandSettings` |
    | `RangeBandSettingDirective`  | `e-rangeBandSetting`  |

    ```js
    import { SparklineComponent, SparklineTooltip } from "@syncfusion/ej2-vue-charts";

    //Component registration.
    export default {
      components: {
        "ejs-sparkline": SparklineComponent
      }
    };
    ```

3. Add the Sparkline Charts component definition in template section.

    ```
    <template>
      <ejs-sparkline id="sparkline" :dataSource='dataSource' :height='height' :xName='xName' :yName='yName' :type='type' :tooltipSettings='tooltipSettings'></ejs-sparkline>
    </template>
    ```

    Above is the Sparkline Charts component definition with [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/#datasource), [`height`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/#height), [`xName`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/#xname), [`yName`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/#yname), [`type`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/#type) and [`tooltipSettings`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/#tooltipsettings) properties.

4. Declare the bound properties in the `script` section.

    ```js
    export default {
      components: {
        "ejs-sparkline": SparklineComponent
      },
      data() {
        return {
          dataSource: [
            { x: 0, xval: '2005', yval: 20090440 },
            { x: 1, xval: '2006', yval: 20264080 },
            { x: 2, xval: '2007', yval: 20434180 },
            { x: 3, xval: '2008', yval: 21007310 },
            { x: 4, xval: '2009', yval: 21262640 },
            { x: 5, xval: '2010', yval: 21515750 },
            { x: 6, xval: '2011', yval: 21766710 },
            { x: 7, xval: '2012', yval: 22015580 },
            { x: 8, xval: '2013', yval: 22262500 },
            { x: 9, xval: '2014', yval: 22507620 }
          ],
          type:'Area',
          xName:'xval',
          yName:'yval',
          height:'200px',
          tooltipSettings: {
            visible: true,
            format: '${xval} : ${yval}'
          }
        };
      },
      provide: {
        sparkline: [SparklineTooltip]
      }
    };
    ```

5. Summarizing the above steps, update the `src/App.vue` file with following code.

    ```
    <template>
      <ejs-sparkline id="sparkline" :dataSource='dataSource' :height='height' :xName='xName' :yName='yName' :type='type' :tooltipSettings='tooltipSettings'>
      </ejs-sparkline>
    </template>

    <script>
    import { SparklineComponent, SparklineTooltip } from "@syncfusion/ej2-vue-charts";

    export default {
      components: {
        "ejs-sparkline": SparklineComponent,
      },
      data() {
        return {
          dataSource: [
            { x: 0, xval: '2005', yval: 20090440 },
            { x: 1, xval: '2006', yval: 20264080 },
            { x: 2, xval: '2007', yval: 20434180 },
            { x: 3, xval: '2008', yval: 21007310 },
            { x: 4, xval: '2009', yval: 21262640 },
            { x: 5, xval: '2010', yval: 21515750 },
            { x: 6, xval: '2011', yval: 21766710 },
            { x: 7, xval: '2012', yval: 22015580 },
            { x: 8, xval: '2013', yval: 22262500 },
            { x: 9, xval: '2014', yval: 22507620 }
          ],
          type:'Area',
          xName:'xval',
          yName:'yval',
          height:'200px',
          tooltipSettings: {
            visible: true,
            format: '${xval} : ${yval}'
          }
        };
      },
      provide: {
        sparkline: [SparklineTooltip]
      }
    };
    </script>
    ```

6. Run the application using the following command.

    ```bash
    npm run serve
    ```

The web server will be initiated and open the **quickstart** app in the browser at port [][][[]][]`localhost:8080`.

![Output](./images/vue3-sparkline-charts-demo.png)

Refer the following sample, [vue3-sparkline-charts-getting-started](https://github.com/SyncfusionExamples/vue3-sparkline-charts-getting-started).