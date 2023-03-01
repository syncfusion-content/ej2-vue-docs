

<template>
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='Children' :treeColumnIndex='0'  :allowFiltering='true' height='275px'  :filterSettings='filterSettings'>
            <e-columns>
                <e-column field='EmpID' headerText='Employee ID' width='90' textAlign='Right'></e-column>
                <e-column field='Name' headerText='Name' width='110'></e-column>
                <e-column field='DOB' headerText='DOB' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='Country' width='65'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Filter } from "@syncfusion/ej2-vue-treegrid";
import { diacritics } from "./datasource.js";

Vue.use(TreeGridPlugin),

export default {
  data ()  {
    return {
      data: diacritics,
       filterSettings: {
        ignoreAccent: true
      }
    };
    },
  provide: {
    treegrid: [Filter]
  }
  }
</script>



