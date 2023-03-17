

<template>
<div id="app">
      <ejs-button id='enable' cssClass='e-flat' @click.native='enable'>Enable</ejs-button>
      <ejs-button id='disable' cssClass='e-flat' @click.native='disable'>Disable</ejs-button>
      <ejs-treegrid ref='treegrid' :dataSource='data' height='200' childMapping='subtasks' :treeColumnIndex='1' :toolbar='toolbar' :toolbarClick='toolbarClick' :allowFiltering='true'>
            <e-columns>
              <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
              <e-column field='taskName' headerText='Task Name' width='180'></e-column>
              <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
              <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
      </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Toolbar, Filter } from "@syncfusion/ej2-vue-treegrid";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { EmitType } from '@syncfusion/ej2-base';
import { sampleData } from "./datasource.js";
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';

Vue.use(TreeGridPlugin);
Vue.use(ButtonPlugin);

export default {
  data ()  {
    return {
      data: sampleData,
      toolbar: ['QuickFilter', 'ClearFilter'],
    };
  },
  methods: {
    toolbarClick: function (args: ClickEventArgs) {
      if (args.item.text === 'QuickFilter') {
        this.$refs.treegrid.filterByColumn('taskName', 'startswith', 'Testing');
      }
      if (args.item.text === 'ClearFilter') {
        this.$refs.treegrid.clearFiltering();
      }
    },
    enable: function() {
        this.$refs.treegrid.ej2Instances.toolbarModule.enableItems(['_gridcontrol_QuickFilter', '_gridcontrol_ClearFilter'], true);//Enable toolbar items.
    },
    disable: function() {
        this.$refs.treegrid.ej2Instances.toolbarModule.enableItems(['_gridcontrol_QuickFilter', '_gridcontrol_ClearFilter'], false);//Disable toolbar items.
    }
  },
  provide: {
      treegrid: [ Toolbar, Filter ]
  }
}
</script>



