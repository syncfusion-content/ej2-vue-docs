---
layout: post
title: Getting started vue 3 with Vue Smithchart component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Smithchart component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Smith Chart component in Vue 3

This section explains how to use Smith Chart component in Vue 3 application.

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

## Adding Syncfusion Smith Chart package in the application

Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. The Smith Chart component will be used in this example. To install it in the **quickstart** folder use the following command.

```bash
npm install @syncfusion/ej2-vue-charts --save
```

## Adding Syncfusion Smith Chart component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the Smith Chart component using following steps.

1. Import the Smith Chart component in the `<script>` section of the `src/App.vue` file.

    ```
    <script>
    import { SmithchartComponent, SmithchartLegend, TooltipRender, SeriesCollectionDirective, SeriesDirective } from "@syncfusion/ej2-vue-charts";
    </script>
    ```

2. Register the Smith Chart component along with the required child directives which are used in this example. Find the list of child directives and tag names that can be used in the Smith Chart component in the following table.

    | Directive Name   | Tag Name    |
    |------------------|-------------|
    | `SeriesCollectionDirective` | `e-seriesCollection` |
    | `SeriesDirective`  | `e-series`  |

    ```js
    import { SmithchartComponent, SmithchartLegend, TooltipRender, SeriesCollectionDirective, SeriesDirective } from "@syncfusion/ej2-vue-charts";

    //Component registration.
    export default {
      components: {
        "ejs-smithchart": SmithchartComponent,
        "e-seriesCollection": SeriesCollectionDirective,
        "e-series" : SeriesDirective
      }
    };
    ```

3. Add the Smith Chart component definition in template section.

    ```
    <template>
      <ejs-smithchart id="smithchart" :title='title' :legendSettings='legendSettings'>
        <e-seriesCollection>
          <e-series :points='dataSource' :marker='marker' :tooltip='tooltip' :name='name' :reactance='reactance' :resistance='resistance'></e-series>
          <e-series :points='points' :tooltip='tooltip' :name='name1'></e-series>
        </e-seriesCollection>
      </ejs-smithchart>
    </template>
    ```

    Above is the Smith Chart component definition with [`title`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/#title), [`legendsettings`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/#legendsettings), [`series`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/#series) and its [`points`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartSeriesModel/#points), [`marker`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartSeriesModel/#marker), [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartSeriesModel/#tooltip), [`name`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartSeriesModel/#name), [`reactance`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartSeriesModel/#reactance) and [`resistance`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartSeriesModel/#resistance) properties.

4. Declare the bound properties in the `script` section.

    ```js
    export default {
      components: {
        "ejs-smithchart": SmithchartComponent,
        "e-seriesCollection": SeriesCollectionDirective,
        "e-series" : SeriesDirective
      },
      data() {
        return {
          dataSource: [
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0.3, reactance: 0.1 }, { resistance: 0.5, reactance: 0.2 },
            { resistance: 1.5, reactance: 0.5 }, { resistance: 2.0, reactance: 0.5 },
            { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
            { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
            { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
            { resistance: 4.5, reactance: -0.5 }, { resistance: 5.0, reactance: -1.0 }
          ],
          points: [
            { resistance: 0, reactance: 0.15 }, { resistance: 0, reactance: 0.15 },
            { resistance: 0, reactance: 0.15 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.5, reactance: 0.4 }, { resistance: 1.0, reactance: 0.8 },
            { resistance: 2.5, reactance: 1.3 }, { resistance: 3.5, reactance: 1.6 },
            { resistance: 3.5, reactance: 1.6 }, { resistance: 3.5, reactance: 1.6 },
            { resistance: 4.5, reactance: 2.0 }, { resistance: 6.0, reactance: 4.5 },
            { resistance: 8, reactance: 6 }, { resistance: 10, reactance: 25 }
          ],
          tooltip: {
            visible: true
          },
          legendSettings: {
            visible: true
          },
          marker: {
            visible: true,
            dataLabel: {
              visible: true
            }
          },
          title: { text: 'Transmission lines applied for both impedance and admittance'},
          name: 'Transmission1',
          name1: 'Transmission2',
          reactance: 'reactance',
          resistance: 'resistance'
        };
      },
      provide: {
        smithchart:[SmithchartLegend, TooltipRender]
      }
    };
    ```

5. Summarizing the above steps, update the `src/App.vue` file with following code.

    ```
    <template>
      <ejs-smithchart id="smithchart" :title='title' :legendSettings='legendSettings'>
        <e-seriesCollection>
          <e-series :points='dataSource' :marker='marker' :tooltip='tooltip' :name='name' :reactance='reactance' :resistance='resistance'></e-series>
          <e-series :points='points' :tooltip='tooltip' :name='name1'></e-series>
        </e-seriesCollection>
      </ejs-smithchart>
    </template>

    <script>
    import { SmithchartComponent, SmithchartLegend, TooltipRender, SeriesCollectionDirective, SeriesDirective } from "@syncfusion/ej2-vue-charts";

    export default {
      components: {
        "ejs-smithchart": SmithchartComponent,
        "e-seriesCollection": SeriesCollectionDirective,
        "e-series" : SeriesDirective
      },
      data() {
        return {
          dataSource: [
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0.3, reactance: 0.1 }, { resistance: 0.5, reactance: 0.2 },
            { resistance: 1.5, reactance: 0.5 }, { resistance: 2.0, reactance: 0.5 },
            { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
            { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
            { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
            { resistance: 4.5, reactance: -0.5 }, { resistance: 5.0, reactance: -1.0 }
          ],
          points: [
            { resistance: 0, reactance: 0.15 }, { resistance: 0, reactance: 0.15 },
            { resistance: 0, reactance: 0.15 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.5, reactance: 0.4 }, { resistance: 1.0, reactance: 0.8 },
            { resistance: 2.5, reactance: 1.3 }, { resistance: 3.5, reactance: 1.6 },
            { resistance: 3.5, reactance: 1.6 }, { resistance: 3.5, reactance: 1.6 },
            { resistance: 4.5, reactance: 2.0 }, { resistance: 6.0, reactance: 4.5 },
            { resistance: 8, reactance: 6 }, { resistance: 10, reactance: 25 }
          ],
          tooltip: {
            visible: true
          },
          legendSettings: {
            visible: true
          },
          marker: {
            visible: true,
            dataLabel: {
              visible: true
            }
          },
          title: { text: 'Transmission lines applied for both impedance and admittance'},
          name: 'Transmission1',
          name1: 'Transmission2',
          reactance: 'reactance',
          resistance: 'resistance'
        };
      },
      provide: {
        smithchart:[SmithchartLegend, TooltipRender]
      }
    };
    </script>
    ```

6. Run the application using the following command.

    ```bash
    npm run serve
    ```

The web server will be initiated and open the **quickstart** app in the browser at port `localhost:8080`.

![Output](./images/vue3-smith-chart-demo.png)

Refer the following sample, [vue3-smith-chart-getting-started](https://github.com/SyncfusionExamples/vue3-smith-chart-getting-started).