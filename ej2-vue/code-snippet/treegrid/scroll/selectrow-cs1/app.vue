<template>
<div id="app">
    <ejs-numerictextbox ref='numeric' format='N' min='0' placeholder='Enter index to select a row' width=200 :showSpinButton='false' :change='onchange'></ejs-numerictextbox>
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' height='280' width='100%' :treeColumnIndex='1' :rowSelected='rowSelected'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='180'></e-column>
                <e-column field='startDate' headerText='Start Date' width='120' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='110' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { sampleData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-numerictextbox":NumericTextBoxComponent,
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data ()  {
    return {
      data: sampleData
    };
  },
  methods: {
    onchange: function(){
      this.$refs.treegrid.selectRow(parseInt(this.$refs.numeric.getText(), 10));
    },
    rowSelected: function () {
        let rowHeight = this.$refs.treegrid.getRows()[this.$refs.treegrid.getSelectedRowIndexes()[0]].scrollHeight;
        this.$refs.treegrid.getContent().children[0].scrollTop = rowHeight * this.$refs.treegrid.getSelectedRowIndexes()[0];
    }
  }
}
</script>