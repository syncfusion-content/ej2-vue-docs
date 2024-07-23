
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { Internationalization } from '@syncfusion/ej2-base';

let instance = new Internationalization();

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
      <div id="app">
      <ejs-grid :dataSource="data" height="335" :rowTemplate="'rowTemplate'" width="auto">
        <e-columns>
          <e-column headerText="Employee Image" width="150" textAlign="Center"></e-column>
          <e-column headerText="Employee Details" width="300" textAlign="Center"></e-column>
        </e-columns>
        <template v-slot:rowTemplate="{ data }">
          <tr>
            <td class="rowphoto">
             <img class="photo" :src="'https://ej2.syncfusion.com/vue/demos/source/grid/images/' + data.EmployeeID + '.png'" :alt="data.EmployeeID"/>
            </td>

            <td class="details">
              <table class="CardTable">
                <colgroup>
                  <col width="30%" />
                  <col width="10%" />
                </colgroup>
                <tbody>
                  <tr>
                    <td class="CardHeader">First Name</td>
                    <span>:</span>
                    <td class="CardData">{{ data.FirstName }}</td>
                  </tr>
                  <tr>
                    <td class="CardHeader">Last Name</td>
                    <span>:</span>
                    <td>{{ data.LastName }}</td>
                  </tr>
                  <tr>
                    <td class="CardHeader">Title</td>
                    <span>:</span>
                    <td>{{ data.Title }}</td>
                  </tr>
                  <tr>
                    <td class="CardHeader">Birth Date</td>
                    <span>:</span>
                    <td>{{ format(data.BirthDate) }}</td>
                  </tr>
                  <tr>
                    <td class="CardHeader">Hire Date</td>
                    <span>:</span>
                    <td>{{ format(data.HireDate) }}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </template>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: employeeData,
    };
  },
  methods: {
    format: function (value) {
      return instance.formatDate(value, { skeleton: "yMd", type: "date" });
    },
  },

});