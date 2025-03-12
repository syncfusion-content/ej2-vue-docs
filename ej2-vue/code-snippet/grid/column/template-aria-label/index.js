
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ChipListPlugin } from '@syncfusion/ej2-vue-buttons';
import { employeeData } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(ChipListPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid :dataSource="data" height=310>
        <e-columns>
          <e-column headerText='Employee Image' width='150' textAlign='Center' :template="'columnTemplate'" :templateOptions='imageTemplateOptions'></e-column>
          <e-column field='FirstName' headerText='FirstName' :template="'chipTemplate'" :templateOptions='nameTemplateOptions' width=120></e-column>
          <e-column field='LastName' headerText='Last Name' width='100'></e-column>
          <e-column field='City' headerText='City' width='100'></e-column>
        </e-columns>
        <template v-slot:columnTemplate="{data}">
          <div class="image">
            <img :src="'./images/' + data.EmployeeID + '.png'" :alt="data.EmployeeID"/>
          </div>
        </template>
        <template v-slot:chipTemplate="{data}">
          <div>
            <ejs-chiplist id="chip" :text='data.FirstName'></ejs-chiplist>
          </div>
        </template>
      </ejs-grid>
    </div>
  `,

  data: () => {
    return {
      data: employeeData,
      imageTemplateOptions: { enableAriaLabel: true },
      nameTemplateOptions: { enableAriaLabel: false },
    };
  }

});