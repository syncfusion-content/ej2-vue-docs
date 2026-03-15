<template>
  <div id="app">
    <ejs-grid :dataSource="data" :allowPaging="true" :pageSettings='pageSettings' :allowSorting='true' :sortSettings='sortSettings' :showColumnChooser='true' 
    :toolbar="toolbar" :editSettings='editSettings' :allowFiltering='true' :filterSettings='filterSettings' :searchSettings='searchSettings' :selectedRowIndex='6' 
    :selectionSettings='selectionSettings' :allowGrouping='true' :groupSettings='groupSettings' :allowRowDragAndDrop="true" :allowReordering='true'>
      <e-columns>
        <e-column type="checkbox" width=50></e-column>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' editType='datetimepickeredit'  width=120></e-column>
        <e-column field='Freight' headerText='Freight($)' textAlign='Right' format='C2' width=90></e-column>                    
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=140></e-column>
        <e-column field='ShipName' headerText='Shipped Name' textAlign='Right' width=140></e-column>          </e-columns>
        <e-aggregates>
          <e-aggregate>
            <e-columns>
              <e-column type="Sum" field="Freight" format="C2" :footerTemplate="footerTemplate" >
              </e-column>
            </e-columns>
          </e-aggregate>
          <e-aggregate>
            <e-columns>
              <e-column type="Sum" field="Freight" format="C2" :groupFooterTemplate="groupFooterTemplate">
              </e-column>
            </e-columns>
          </e-aggregate>
          <e-aggregate>
            <e-columns>
              <e-column type="Max" field="Freight" format="C2" :groupCaptionTemplate="groupCaptionTemplate">
              </e-column>
            </e-columns>
          </e-aggregate>
        </e-aggregates>
      </ejs-grid>
  </div>
</template>
<script setup>
/* eslint-disable */
import { createApp, provide } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates,  ColumnChooser, Page, Toolbar, Sort, Filter, 
Group, Aggregate, Edit, RowDD, Reorder } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
    const app = createApp();
    const pageSettings = { pageCount: 2, pageSizes: true };
    const searchSettings = { fields: ['ShipCountry'], operator: 'contains', key: 'a', ignoreCase: true };
    const sortSettings = { columns: [{ field: 'OrderID', direction: 'Ascending' }, { field: 'ShipCity', direction: 'Descending' }] };
    const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser'];
    const selectionSettings = { type: 'Multiple', mode: 'Both' };
    const filterSettings = { type: 'Excel' };
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    const groupSettings = { columns: ['CustomerID'] };
    const footerTemplate = function () {
      return  { template : app.component('sumTemplate', {
          template: `<span>Sum: {{data.Sum}}</span>`,
          data () {return { data: {}};}
          })
        }
    }
    const groupFooterTemplate = function () {
      return  { template : app.component('sumTemplate', {
          template: `<span>Sum: {{data.Sum}}</span>`,
          data () {return { data: {}};}
          })
        }
    }
    const groupCaptionTemplate = function () {
      return  { template : app.component('sumTemplate', {
          template: `<span>Max: {{data.Max}}</span>`,
          data () {return { data: {}};}
          })
        }
    }
provide('grid',  [Page, Sort, Filter, Group, Aggregate, ColumnChooser, Toolbar, Edit, RowDD, Reorder ]);
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
</style>