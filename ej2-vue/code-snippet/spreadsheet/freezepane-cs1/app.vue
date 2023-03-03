

<template>
   <ejs-spreadsheet ref="spreadsheet">
   <e-sheets>
          <e-sheet :frozenRows=2  :frozenColumns=2 >
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
             <e-columns>
                      <e-column :width=120></e-column>
                      <e-column :width=180></e-column>
                      <e-column :width=100></e-column>
                      <e-column :width=120></e-column>
                      <e-column :width=120></e-column>
              </e-columns>
          </e-sheet>
        </e-sheets></ejs-spreadsheet>
</template>

<script>
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';
Vue.use(SpreadsheetPlugin);
export default {
   data: () => {
    return {
      dataSource: defaultData,
    }
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
 @import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
 @import "../node_modules/@syncfusion/ej2-spreadsheet/styles/material.css";
</style>


