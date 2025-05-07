---
layout: post
title: Aggregates in Vue Grid component | Syncfusion
description: Learn here all about Aggregates in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Aggregates 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in Vue Grid component

The Aggregates feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component allows you to display aggregate values in the footer, group footer, and group caption of the grid. With this feature, you can easily perform calculations on specific columns and show summary information. This feature can be configured using the **e-aggregates** directive. To represent an aggregate column, you need to specify the minimum required properties, such as [field](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnDirective/#field) and [type](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnDirective/#type).

To use aggregate feature, you need to inject the **Aggregate** module into the **provide** section.

**Displaying aggregate values**

By default, the aggregate values are displayed in the footer, group, and caption cells of the grid. However, you can choose to display the aggregate value in any of these cells by using the following properties:

* **[footerTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#footertemplate):** Use this property to display the aggregate value in the footer cell. You can define a custom template to format the aggregate value as per your requirements.

* **[groupFooterTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#groupfootertemplate):** Use this property to display the aggregate value in the group footer cell. Similar to the footerTemplate, you can provide a custom template to format the aggregate value.

* **[groupCaptionTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#groupcaptiontemplate):** Use this property to display the aggregate value in the group caption cell. You can define a custom template to format the aggregate value.

For a quick start with Aggregate options, you can refer to this video:

{% youtube "https://www.youtube.com/watch?v=SGpR92dMHnw" %}

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='290px' :allowPaging="true" :allowGrouping="true" :groupSettings="groupOptions">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='OrderDate' headerText='Order Date' format='yMd' width=120 type='date'></e-column>
                <e-column field='Freight' format='C2' width=150></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
            <e-aggregates>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Sum" field="Freight" format="C2" :groupFooterTemplate ='footerSum'></e-column>
                    </e-columns>
                </e-aggregate>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Average" field="Freight" format="C2" :groupCaptionTemplate ='footerAvg'></e-column>
                    </e-columns>
                </e-aggregate>
          </e-aggregates>
        </ejs-grid>
    </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates, AggregatesDirective, Group, Aggregate, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { createApp } from "vue";
const app = createApp();
      const groupOptions = {showDropArea: false, columns: ['ShipCountry'] };
      const footerSum = function () {
        return  { template : app.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data () {return { data: {}};}
            })
          }
      }
      const footerAvg = function () {
        return  { template : app.component('maxTemplate', {
            template: `<span>Average: {{data.Average}}</span>`,
            data () {return { data: {}};}
            })
          }
      }
  provide : {
      grid: [Group, Aggregate, Page]
  }
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% raw %}
<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='290px' :allowPaging="true" :allowGrouping="true" :groupSettings="groupOptions">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='OrderDate' headerText='Order Date' format='yMd' width=120 type='date'></e-column>
                <e-column field='Freight' format='C2' width=150></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
            <e-aggregates>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Sum" field="Freight" format="C2" :groupFooterTemplate ='footerSum'></e-column>
                    </e-columns>
                </e-aggregate>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Average" field="Freight" format="C2" :groupCaptionTemplate ='footerAvg'></e-column>
                    </e-columns>
                </e-aggregate>
          </e-aggregates>
        </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, Group, Aggregate, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { createApp } from "vue";
const app = createApp();
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"e-aggregates":AggregatesDirective,
"e-aggregate":AggregateDirective
},
  data() {
    return {
      data: data,
      groupOptions: {showDropArea: false, columns: ['ShipCountry'] },
      footerSum: function () {
        return  { template : app.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data () {return { data: {}};}
            })
          }
      },
      footerAvg: function () {
        return  { template : app.component('maxTemplate', {
            template: `<span>Average: {{data.Average}}</span>`,
            data () {return { data: {}};}
            })
          }
      }
    };
  },
  provide : {
      grid: [Group, Aggregate, Page]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates/default-cs8" %}

> * When using local data, the total summary is calculated based on the entire dataset available in the grid. The aggregate values will reflect calculations across all the rows in the grid.

> * When working with remote data, the total summary is calculated based on the current page records. This means that if you have enabled pagination and are displaying data in pages, the aggregate values in the footer will represent calculations only for the visible page.

## Built-in aggregate types

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component provides several built-in aggregate types that can be specified in the [type](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnDirective/#type) property to configure an aggregate column.

The available built-in aggregate types are:

* **Sum:** Calculates the sum of the values in the column.
* **Average:** Calculates the average of the values in the column.
* **Min:** Finds the minimum value in the column.
* **Max:** Finds the maximum value in the column.
* **Count:** Counts the number of values in the column.
* **TrueCount:** Counts the number of true values in the column.
* **FalseCount:** Counts the number of false values in the column.

Here is an example that demonstrates how to use built-in aggregates types in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='290px' :allowPaging="true" :aggregates='aggregates'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='OrderDate' headerText='Order Date' format='yMd' width=120 type='date'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' format='yMd' width=120 type='date'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' width=150></e-column>
                <e-column field='Verified' format='C2' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn, Aggregate, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { provide } from "vue";
      const aggregates = [
        {
          columns: [
            {
              type: 'Average',
              field: 'Freight',
              footerTemplate: 'Average: ${Average}',
              format: 'C2',
            },
            {
              type: 'Max',
              field: 'ShippedDate',
              footerTemplate: 'Max: ${new Date(Max).toLocaleDateString()}',
            },
            {
              type: 'Min',
              field: 'OrderDate',
              footerTemplate: 'Min: ${new Date(Min).toLocaleDateString()}',
            },
            {
              type: 'TrueCount',
              field: 'Verified',
              footerTemplate: 'True Count: ${TrueCount}',
            }
          ]
        }
      ];
  provide('grid', [Aggregate, Page]);
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% raw %}
<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='290px' :allowPaging="true" :aggregates='aggregates'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='OrderDate' headerText='Order Date' format='yMd' width=120 type='date'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' format='yMd' width=120 type='date'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' width=150></e-column>
                <e-column field='Verified' format='C2' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Aggregate, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      aggregates: [
        {
          columns: [
            {
              type: 'Average',
              field: 'Freight',
              footerTemplate: 'Average: ${Average}',
              format: 'C2',
            },
            {
              type: 'Max',
              field: 'ShippedDate',
              footerTemplate: 'Max: ${new Date(Max).toLocaleDateString()}',
            },
            {
              type: 'Min',
              field: 'OrderDate',
              footerTemplate: 'Min: ${new Date(Min).toLocaleDateString()}',
            },
            {
              type: 'TrueCount',
              field: 'Verified',
              footerTemplate: 'True Count: ${TrueCount}',
            },
          ],
        },
      ],
    };
  },
  provide : {
      grid: [Aggregate, Page]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates/default-cs9" %}

## Multiple aggregates for a column

Multiple aggregates for a column allows you to calculate and display different summary values simultaneously for a single column in a grid. Normally, a column is associated with a single aggregate function, such as sum, average, count and etc., which provides a single summary value for the entire column.

However, in scenarios where you need to display multiple summary values for the same column, multiple aggregates come into play. This feature enables you to calculate and display various aggregate values, such as sum, average, minimum, maximum, or custom calculations, concurrently for a specific column.

You can use multiple aggregates for a single column in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid by specifying the aggregate [type](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnDirective/#type) as an array.

Here's an example of how to use multiple aggregates in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='290px' :allowPaging="true" :aggregates='aggregates'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' width=80></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn, Aggregate, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
      const aggregates = [
      {
        columns: [
          {
            type: ['Sum', 'Max', 'Min'],
            field: 'Freight',
            columnName: 'Freight',
            format: 'C2',
            footerTemplate: 'Sum: ${Sum}, Min:${Min}, Max:${Max}',
          }
        ]
      }
    ]
  provide('grid', [Aggregate, Page]);
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% raw %}
<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='290px' :allowPaging="true" :aggregates='aggregates'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' width=80></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Aggregate, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      aggregates: [
      {
        columns: [
          {
            type: ['Sum', 'Max', 'Min'],
            field: 'Freight',
            columnName: 'Freight',
            format: 'C2',
            footerTemplate: 'Sum: ${Sum}, Min:${Min}, Max:${Max}',
          },
        ],
      },
    ],
    };
  },
  provide : {
      grid: [Aggregate, Page]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates/default-cs10" %}