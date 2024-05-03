---
layout: post
title: Custom aggregate in Vue Grid component | Syncfusion
description: Learn here all about Custom aggregate in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Custom aggregate 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom aggregate in Vue Grid component

The custom aggregate feature in Syncfusion's Vue Grid component allows you to calculate aggregate values using your own aggregate function. This feature can be useful in scenarios where the built-in aggregate functions do not meet your specific requirements. To use the custom aggregate option, follow the steps below:

* Set the [type](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnDirective/#type) property to **Custom** in the [e-aggregate -> e-column](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnDirective/).

* Provide your custom aggregate function in the [customAggregate](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnDirective/#CustomAggregate) property.

The custom aggregate function will be invoked differently for total and group aggregations:

**Total Aggregation:** The custom aggregate function will be called with the whole dataset and the current aggregate column object as arguments.

**Group Aggregation:** The custom aggregate function will be called with the current group details and the aggregate column object as arguments.

Here's an example that demonstrates how to use the custom aggregate feature in the Vue Grid component:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% raw %}
<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='268px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='Freight' format='C2' width=150></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
            <e-aggregates>
                <e-aggregate>
                    <e-columns>
                        <e-column columnName="ShipCountry" type="Custom" :customAggregate="customAggregateFn" :footerTemplate='footerTemplate'></e-column>
                    </e-columns>
                </e-aggregate>
          </e-aggregates>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Aggregate } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      footerTemplate: function () {
        return  { template : Vue.component('footerTemplate', {
            template: `<span>Brazil Count: {{data.Custom}}</span>`,
            data () {return { data: {}};}
            })
          }
      }
    };
  },
  methods: {
      customAggregateFn : function (data) {
           return data.result.filter((item) => item.ShipCountry === 'Brazil').length;
      }
  },
  provide: {
      grid: [Aggregate]
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
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates/default-cs1" %}

> To access the custom aggregate value inside template, use the key as `Custom`.

## Show the count of distinct values in aggregate row

You can calculate the count of distinct values in an aggregate row by using custom aggregate functions. By specifying the [type](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnDirective/#type) as **Custom** and providing a custom aggregate function in the [customAggregate](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnDirective/#CustomAggregate) property, you can achieve this behavior.

Here's an example that demonstrates how to show the count of distinct values for the **ShipCountry** column using a custom aggregate.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% raw %}
<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='268px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='Freight' format='C2' width=150></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
            <e-aggregates>
                <e-aggregate>
                    <e-columns>
                        <e-column columnName="ShipCountry" type="Custom" :customAggregate="customAggregateFn" :footerTemplate='footerTemp'></e-column>
                    </e-columns>
                </e-aggregate>
          </e-aggregates>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Aggregate } from "@syncfusion/ej2-vue-grids";
import { DataUtil } from '@syncfusion/ej2-data';
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      footerTemp: function () {
        return  { template : Vue.component('footerTemplate', {
            template: `<span>Distinct Count: {{data.Custom}}</span>`,
            data () {return { data: {}};}
            })
          }
      }
    };
  },
  methods: {
    customAggregateFn: function () {
      const distinct = DataUtil.distinct(this.data, 'ShipCountry', true);
      return distinct.length;
    }
  },
  provide: {
      grid: [Aggregate]
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
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates/default-cs11" %}