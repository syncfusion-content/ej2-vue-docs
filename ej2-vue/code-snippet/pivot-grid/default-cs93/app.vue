


<template>
    <div id="app">
        <ejs-button id="calculated-field-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">Calculated Field</ejs-button>
        <ejs-pivotview id="pivotview" :height= "height" :dataSourceSettings="dataSourceSettings" :allowCalculatedField="allowCalculatedField"> </ejs-pivotview>
    </div>
</template>

<script>
import { PivotViewComponent, CalculatedField } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
    'ejs-button': ButtonComponent
  },
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
    btnClick: function() {
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
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/material.css";
</style>



