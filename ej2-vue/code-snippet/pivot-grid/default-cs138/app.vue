


<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :editSettings="editSettings"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, DrillThrough, DrillThroughEventArgs } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Normal' }
    }
  },
  provide: {
        pivotview: [DrillThrough]
  },
  methods: {
    drillThrough:function(args: DrillThroughEventArgs) {
        for (var i = 0; i < args.gridColumns.length; i++) {
            if (args.gridColumns[i].field === 'Country') {
                args.gridColumns[i].editType = 'dropdownedit';
                //args.gridColumns[i].editType = 'numericedit';
                //args.gridColumns[i].editType = 'textedit';
                //args.gridColumns[i].editType = 'booleanedit';
                //args.gridColumns[i].editType = 'datepickeredit';
                //args.gridColumns[i].editType = 'datetimepickeredit';
            }
        }
    }
  }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>



