


<template>
    <div id="app">
        <ejs-button id="calculated-field-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">Calculated Field</ejs-button>
        <ejs-pivotview id="pivotview" :height= "height" :dataSourceSettings="dataSourceSettings" :allowCalculatedField="allowCalculatedField"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, CalculatedField } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }, { name: 'Total', caption: 'Total Amount', type: 'CalculatedField' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
        calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
      },
      height: 320,
      allowCalculatedField: true,
      isPrimary: true
    }
  },
  methods: {
    btnClick: function(args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.calculatedFieldModule.createCalculatedFieldDialog();
    }
  },
  provide: {
        pivotview: [CalculatedField]
    }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>



