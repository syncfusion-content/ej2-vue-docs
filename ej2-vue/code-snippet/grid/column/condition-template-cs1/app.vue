<template>
    <div id="app">
         <ejs-grid :dataSource="data" height=310>
            <e-columns>
                <e-column headerText='Discontinued' width='150' textAlign='Center' :template="'columnTemplate'"></e-column>
                <e-column field='ProductID' headerText='Product ID' width=150></e-column>
                <e-column field='CategoryName' headerText='Category Name' width=150></e-column>
                <e-column field='ProductName' headerText='Product Name' width=150></e-column>
            </e-columns>
             <template v-slot:columnTemplate="{data}">
                <div v-if=data.Discontinued class="template_checkbox">
                    <input type="checkbox" checked />
                </div>
                <div v-else class="template_checkbox">
                    <input type="checkbox" />
                </div>
            </template>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { productData } from "./datasource.js";



export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data: () => {
    return {
      data: productData,
    };
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>