
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { productData } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
    el: '#app',
    template: `
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
`,

    data: () => {
        return {
            data: productData,
        };  
    },
});