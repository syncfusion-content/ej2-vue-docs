<template>
  <div id="app">
        <ejs-treegrid :dataSource="data" :treeColumnIndex="1" height='250px' childMapping='subtasks' ref='treegrid' :editSettings='editSettings' :toolbar="toolbar">
        <e-columns>
          <e-column field="orderID" headerText="Order ID" :isPrimaryKey='true' width="70" textAlign="Right"></e-column>
          <e-column field="orderName" headerText="Order Name" width="100" ></e-column>
          <e-column field="orderDate" headerText="Order Date" format="yMd" editType= 'datepickeredit' width="100" textAlign="Right"></e-column>
          <e-column field="units" headerText="Units" width="90" textAlign="Right"  editType= "numericedit"></e-column>
          <e-column field="price" headerText="Price" width="100" :edit="numericParams" editType="numericedit" format="c2" textAlign="Right"></e-column>
         </e-columns>
       </ejs-treegrid>
  </div>
</template>
<script>

import { TreeGridComponent, Page, Toolbar, Edit, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { stackedData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data() {
    return {
      data: stackedData,
      editSettings: { allowAdding:true, allowDeleting:true, allowEditing: true, mode: 'Row' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      numericParams: {
        params: {
           decimals: 0,
           format: "N",
           validateDecimalOnType: true
        }
      },
    };
  },
  provide: {
    treegrid: [Page, Edit, Toolbar]
  }
}
</script>