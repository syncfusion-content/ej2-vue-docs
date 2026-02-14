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
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates, Page, Group, Aggregate, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { provide, createApp } from "vue";
const app = createApp();
      const groupOptions = {showDropArea: false, columns: ['ShipCountry'] };
      const toolbarOptions = ['Delete', 'Update', 'Cancel'];
      const editSettings = { allowEditing: true, allowDeleting: true, mode: 'Batch' };
      const footerSum = function () {
        return  { template : app.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data () {return { data: {}};}
            })
          }
      }
      const groupFooterSum = function () {
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
      provide('grid', [Page, Group, Aggregate, Edit, Toolbar]);
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";
</style>