
import Vue from "vue";
import { GridPlugin, DetailRow } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
  <ejs-grid ref="grid" :dataSource="data" height="315" width="auto" :detailTemplate="'detailTemplate'">
  <e-columns>
    <e-column field="FirstName" headerText="First Name" width="140"></e-column>
    <e-column field="LastName" headerText="Last Name" width="140"></e-column>
    <e-column field="Title" headerText="Title" width="150"></e-column>
    <e-column field="Country" headerText="Country" width="150"></e-column>
  </e-columns>
  <template v-slot:detailTemplate="{ data }">
    <table class="detailtable" width="100%">
      <colgroup>
        <col width="35%" />
        <col width="35%" />
        <col width="40%" />
      </colgroup>
      <tbody>
        <tr>
          <td class="rowphoto" rowSpan="4" style="text-align: center">
            <img
              class="photo"
              :src="
                'https://ej2.syncfusion.com/vue/demos/source/grid/images/' +
                data.EmployeeID +
                '.png'
              "
              :alt="data.EmployeeID"
            />
          </td>
          <td>
            <span style="font-weight: 500">First Name:</span>
            {{ data.FirstName }}
          </td>
          <td>
            <span style="font-weight: 500"> Postal Code:</span>
            {{ data.FirstName }}
          </td>
        </tr>
        <tr>
          <td>
            <span style="font-weight: 500">Last Name:</span>
            {{ data.FirstName }}
          </td>
          <td>
            <span style="font-weight: 500"> City:</span>
            {{ data.FirstName }}
          </td>
        </tr>
        <tr>
          <td>
            <span style="font-weight: 500">Title:</span>
            {{ data.FirstName }}
          </td>
          <td>
            <span style="font-weight: 500"> Phone:</span>
            {{ data.FirstName }}
          </td>
        </tr>
        <tr>
          <td>
            <span style="font-weight: 500">City:</span>
            {{ data.FirstName }}
          </td>
          <td>
            <span style="font-weight: 500"> Country:</span>
            {{ data.FirstName }}
          </td>
        </tr>
      </tbody>
    </table>
  </template>
</ejs-grid>
</div>
`,

data() {
  return {
    data: data,
  };
},
provide: { grid: [DetailRow] },

});