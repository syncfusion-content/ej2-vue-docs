<template>
    <div id="app">
        <ejs-button id="formatting-btn" :isPrimary="isPrimary" v-on:click="btnClick">APPLY FORMAT</ejs-button>
        <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :allowConditionalFormatting="allowConditionalFormatting" :conditionalFormatting="conditionalFormatting"> </ejs-pivotview>
    </div>
</template>
<script>
import { PivotViewComponent, ConditionalFormatting } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent} from "@syncfusion/ej2-vue-buttons";
import { Pivot_Data } from './Pivot_Data.js';

export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-pivotview":PivotViewComponent
},
  data () {
    return {
      dataSourceSettings: {
        dataSource: Pivot_Data,
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
        columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'In_Stock', caption: 'In Stock' },
        { name: 'Sold', caption: 'Units Sold' }],
        filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
        conditionalFormatSettings: [
            {
                measure: 'In_Stock',
                value1: 5000,
                conditions: 'LessThan',
                style: {
                    backgroundColor: '#80cbc4',
                    color: 'black',
                    fontFamily: 'Tahoma',
                    fontSize: '12px'
                }
            }
        ]
    },
    allowConditionalFormatting: true,
    height: 320,
    isPrimary: true
    }
  },
  methods: {
    btnClick: function() {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.conditionalFormattingModule.showConditionalFormattingDialog();
    },
    conditionalFormatting: function(args) {
      args.style.backgroundColor = "Blue";
      args.value1 = 23459;
    }
  },
  provide: {
        pivotview: [ConditionalFormatting]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>