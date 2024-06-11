<template>
<div id="app">
        <ejs-treegrid  :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' height='315px'>
            <e-columns>
                <e-column field='orderID' headerText='Order ID' width=100 textAlign='Right'></e-column>
                <e-column field='orderName' headerText='Order Name'  :valueAccessor='orderFormatter' width=215></e-column>
                <e-column field='orderDate' headerText='Order Date' width=110 :format='formatOptions' type='date' textAlign='Right'></e-column>
                <e-column field='price' headerText='Price' width=100  :valueAccessor='currencyFormatter' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
/* eslint-disable */

import { TreeGridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { formatData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

   data() {
    return {
      data: formatData,
      formatOptions: {type:'date', format:'dd/MM/yyyy'},
    };
    },
    methods:{
        currencyFormatter: function(field, data, column) {
            return '€' + data['price'];
        },
    orderFormatter: function (field, data, column) {
        return data[field] + '-' + data['Category'];
    }
  }
}
</script>