

<template>
<div id="app">
<ejs-treegrid ref='treegrid' :dataSource="virtualData" :enableVirtualization='true' :treeColumnIndex='1' childMapping='Crew' height=317>
    <e-columns>
        <e-column field='TaskID' headerText='Player Jersey' width='120' textAlign='Right'></e-column>
        <e-column field='FIELD1' headerText='Player Name' width='120'></e-column>
        <e-column field='FIELD2' headerText='Year' width='100' textAlign='Right'></e-column>
        <e-column field='FIELD3' headerText='Stint' width='120' textAlign='Right'></e-column>
        <e-column field='FIELD4' headerText='TMID' width='120' textAlign='Right'></e-column>
        <e-column field='FIELD5' headerText='LGID' width='120' textAlign='Right'></e-column>
    </e-columns>
</ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, VirtualScroll } from "@syncfusion/ej2-vue-treegrid";
import { dataSource, virtualData } from "./datasource.js";

Vue.use(TreeGridPlugin);

export default {
  data () {
    return {
      virtualData: dataSource(),
    };
  },
  provide: {
      treegrid: [VirtualScroll]
  }
}
</script>



