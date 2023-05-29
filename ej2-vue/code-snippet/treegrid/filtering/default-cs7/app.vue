

<template>
<div id="app">
 <div style="padding-top: 7px; display: inline-block">Hierarchy Mode</div>
  <div style="display: inline-block; width: 150px">
<ejs-dropdownlist id='mode' :dataSource='ddldata'  :fields='fields' :value='value' :popupHeight='height' :change='change'></ejs-dropdownlist>
</div>
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1'  :allowFiltering='true' height='225px'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='75' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='180'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Filter, TreeGridComponent  } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListPlugin, ChangeEventArgs } from '@syncfusion/ej2-vue-dropdowns';
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);
Vue.use(DropDownListPlugin);

export default {
  data () {
    return {
      data: sampleData,
      height: '220px',
      ddldata : [{ id: 'Parent', mode: 'Parent' },
      { id: 'Child', mode: 'Child' },
      { id: 'Both', mode: 'Both' },
      { id: 'None', mode: 'None' }
    ],
    fields: { text: 'mode', value: 'id' },
    value: 'Parent'
    };
  },
    provide: {
      treegrid: [ Filter ]
    },
    methods: {
        change: function (e: ChangeEventArgs)  {
        let mode: any = e.value;
        this.$refs.treegrid.ej2Instances.filterSettings.hierarchyMode = mode;
        this.$refs.treegrid.clearFiltering();
    }
    }
}
</script>



