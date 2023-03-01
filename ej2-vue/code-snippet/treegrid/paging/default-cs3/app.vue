

<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :dataBound='ondataBound'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, TreeGridComponent,  Page } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);

let initialGridLoad = true;

export default {
  data ()  {
    return {
      data: sampleData,
      pageSettings: { pageSize: 7, pageSizes: true },
      initialGridLoad : true
      };
  },
  provide: {
      treegrid: [ Page ]
    },
     methods: {
    ondataBound: function() {
      if (this.initialGridLoad) {
          this.initialGridLoad = false;
          let pager = document.getElementsByClassName('e-gridpager e-control e-pager e-lib');
          let topElement;
         if ( this.$refs.treegrid.toolbar) {
             topElement = document.getElementsByClassName('e-toolbar');
        } else {
          topElement = document.getElementsByClassName('e-gridheader e-lib e-droppable');
        }
          topElement[0].before(pager[0]);
      }
    }
}
}
</script>



