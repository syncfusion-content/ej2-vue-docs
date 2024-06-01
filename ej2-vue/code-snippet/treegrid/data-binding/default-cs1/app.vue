

<template>
  <div id="app">
    <ejs-button v-on:click.native="btnClick">Bind Data</ejs-button>
        <ejs-treegrid ref=treegrid :dataSource="data" idMapping='TaskID' parentIdMapping='ParentItem'  :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='TaskName' headerText='Task Name' width='100'></e-column>
                <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                </e-columns>
                <e-column field='Progress' headerText='Progress' width='80' textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Page } from "@syncfusion/ej2-vue-treegrid";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { Fetch } from '@syncfusion/ej2-base';

Vue.use(TreeGridPlugin);
Vue.use(ButtonPlugin);

export default {
  data () {
    return {
      data: {},
      pageSettings: { pageCount: 4 }
    };
  },
  provide: {
      treegrid: [ Page ]
    },
   methods:{
         btnClick: function (args){
        let treegrid = document.getElementsByClassName("e-treegrid")[0].ej2_instances[0]; // TreeGrid instance
        let fetch = new Fetch ("https://services.syncfusion.com/vue/production/api/SelfReferenceData", "GET");treegrid.showSpinner();
        fetch.send();
        fetch.onSuccess = function (result) {
        treegrid.hideSpinner();
        treegrid.dataSource = result;
        };
      }
  }
}
</script>



