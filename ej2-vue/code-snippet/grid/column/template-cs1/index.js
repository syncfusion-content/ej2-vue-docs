
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-grid :dataSource="data" height=310>
            <e-columns>
                <e-column headerText='Employee Image' width='150' textAlign='Center' :template="'columnTemplate'"></e-column>
                <e-column field='EmployeeID' headerText='Employee ID' width='125' textAlign='Right'></e-column>
                <e-column field='FirstName' headerText='Name' width='120'></e-column>
                <e-column field='Title' headerText='Title' width='170'></e-column>
            </e-columns>
            <template v-slot:columnTemplate="{data}">
                <div class="image">
                    <img :src="'./images/' + data.EmployeeID + '.png'" :alt="data.EmployeeID"/>
                </div>
            </template>
        </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: employeeData,
    };
  }

});