<template>
<div id="app">
        <ejs-treegrid  :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' height='315px'>
            <e-columns>
                <e-column field='orderID' headerText='Order ID' width=110 textAlign='Right'></e-column>
                <e-column field='orderName' headerText='Order Name' width=210></e-column>
                <e-column field='units' headerText='Units' width=120 textAlign='Right'></e-column>
                <e-column field='unitPrice' headerText='Unit Price' width=120 textAlign='Right'></e-column>
                <e-column field='price' headerText='Price' width=120 :valueAccessor='totalPrice'
                textAlign='Right'></e-column>
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
    };
    },
    methods:{
        totalPrice: function (field, data, column) {
            return data.units * data.unitPrice;
    }
  }
}
</script>