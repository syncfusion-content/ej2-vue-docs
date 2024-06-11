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

import { GridComponent, ColumnsDirective, ColumnDirective, AggregatesDirective, AggregateDirective, Page, Aggregate, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { createApp } from "vue";
const app = createApp();
let selectedRecord = {};
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
      numericParams: { params: { change: this.changeFn } },
      toolbarOptions : ['Delete', 'Update', 'Cancel'],
      editSettings : { allowEditing: true, allowDeleting: true, mode: 'Inline' },
      footerSum: function () {
        return  { template : app.component('sumTemplate', {
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