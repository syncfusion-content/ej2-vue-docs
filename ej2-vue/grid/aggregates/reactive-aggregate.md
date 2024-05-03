---
layout: post
title: Reactive aggregate in Vue Grid component | Syncfusion
description: Learn here all about Reactive aggregate in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Reactive aggregate 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Reactive aggregate in Vue Grid component

The Syncfusion Vue Grid component provides support for reactive aggregates, which allow you to update the aggregate values dynamically as the data changes. Reactive aggregates automatically recalculate their values when there are changes in the underlying data, providing real-time updates to the aggregate values in the grid.

## Auto update aggregate value in batch editing

When the grid is in batch editing mode, the aggregate values in the footer, group footer, and group caption are automatically refreshed every time a cell is saved. This ensures that the aggregate values accurately reflect the edited data.

Here's an example code snippet demonstrating how to auto update aggregate value in batch editing:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% raw %}
<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='290px' allowPaging='true' allowGrouping='true' :groupSettings='groupOptions' :toolbar='toolbarOptions' :editSettings='editSettings'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='OrderDate' headerText='Order Date' format='yMd' width=120 type='date'></e-column>
                <e-column field='Freight' format='C2' editType= 'numericedit' width=150 ></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
            <e-aggregates>
             <e-aggregate>
                    <e-columns>
                        <e-column type="Sum" field="Freight" format="C2" :footerTemplate ='footerSum'></e-column>
                    </e-columns>
                </e-aggregate>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Sum" field="Freight" format="C2" :groupFooterTemplate ='groupFooterSum'></e-column>
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
import Vue from "vue";
import { GridPlugin, Page, Group, Aggregate, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      groupOptions: {showDropArea: false, columns: ['ShipCountry'] },
      toolbarOptions : ['Delete', 'Update', 'Cancel'],
      editSettings : { allowEditing: true, allowDeleting: true, mode: 'Batch' },
      footerSum: function () {
        return  { template : Vue.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data () {return { data: {}};}
            })
          }
      },
      groupFooterSum: function () {
        return  { template : Vue.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data () {return { data: {}};}
            })
          }
      },
      footerAvg: function () {
        return  { template : Vue.component('maxTemplate', {
            template: `<span>Average: {{data.Average}}</span>`,
            data () {return { data: {}};}
            })
          }
      }
    };
  },
  provide : {
      grid: [Page, Group, Aggregate, Edit, Toolbar]
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
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates/default-cs6" %}

> Adding a new record to the grouped grid will not refresh the aggregate values.

## Refresh aggregate values in inline editing

By default, reactive aggregate update is not supported by inline and dialog edit modes as it is not feasible to anticipate the value change event for every editor. But, you can refresh the aggregates manually in the inline edit mode using the refresh method of aggregate module.

In the following code, the input event for the Freight column editor has been registered and the aggregate value has been refreshed manually.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% raw %}
<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' height='290px' allowPaging='true' :toolbar='toolbarOptions' :editSettings='editSettings' :actionBegin='actionBegin'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='Freight' format='C2' editType= 'numericedit' :edit='numericParams' width=150 ></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
            <e-aggregates>
             <e-aggregate>
                    <e-columns>
                        <e-column type="Sum" field="Freight" format="C2" :footerTemplate ='footerSum'></e-column>
                    </e-columns>
                </e-aggregate>
          </e-aggregates>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page, Aggregate, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);
let selectedRecord = {};
export default {
  data() {
    return {
      data: data,
      numericParams: { params: { change: this.changeFn } },
      toolbarOptions : ['Delete', 'Update', 'Cancel'],
      editSettings : { allowEditing: true, allowDeleting: true, mode: 'Inline' },
      footerSum: function () {
        return  { template : Vue.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data () {return { data: {}};}
            })
          }
      },
    };
  },
   methods: {
      actionBegin: function(args){
          if(args.requestType === 'beginEdit'){
           selectedRecord = {};
           selectedRecord = args.rowData;
        };
      },
    changeFn: function(args){
        selectedRecord['Freight'] = args.value;
        let gridObj = this.$refs.grid.ej2Instances;
        gridObj.aggregateModule.refresh(selectedRecord);
    }
  },
  provide : {
      grid: [Page, Aggregate, Edit, Toolbar]
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
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates/default-cs7" %}