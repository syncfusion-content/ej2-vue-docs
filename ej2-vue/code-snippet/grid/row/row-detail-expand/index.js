
import Vue from "vue";
import { GridPlugin, DetailRow } from "@syncfusion/ej2-vue-grids";
import { TextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { employeeData } from "./datasource.js";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(GridPlugin);
Vue.use(TextBoxPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div>
      <ejs-textbox ref="textbox" placeholder="Enter the row Index" width="250px" floatLabelType="Auto"></ejs-textbox>
      <ejs-button style="margin: 20px 0px 0 10px" v-on:click.native="clickHandler">Expand</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" height="315" width="auto" :detailTemplate="'detailTemplate'" >
        <e-columns>
          <e-column field="FirstName" headerText="First Name" width="140"></e-column>
          <e-column field="LastName" headerText="Last Name" width="140"></e-column>
          <e-column field="Title" headerText="Title" width="150"></e-column>
          <e-column field="Country" headerText="Country" width="150"></e-column>
        </e-columns>
        <template v-slot:detailTemplate="{ data }">
          <table class="CardTable" cellpadding="3" cellspacing="2">
            <colgroup>
              <col width="35%" />
              <col width="35%" />
              <col width="40%" />
            </colgroup>
            <tbody>
              <tr>
                <td class="rowphoto" rowspan="4" style="text-align: center">
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
                  <span style="font-weight: 500">Postal Code:</span>
                  {{ data.PostalCode }}
                </td>
              </tr>
              <tr>
                <td>
                  <span style="font-weight: 500">Last Name:</span>
                  {{ data.LastName }}
                </td>
                <td>
                  <span style="font-weight: 500">City:</span>
                  {{ data.City }}
                </td>
              </tr>
              <tr>
                <td>
                  <span style="font-weight: 500">Title:</span>
                  {{ data.Title }}
                </td>
                <td>
                  <span style="font-weight: 500">Phone:</span>
                  {{ data.Phone }}
                </td>
              </tr>
              <tr>
                <td>
                  <span style="font-weight: 500">City:</span>
                  {{ data.City }}
                </td>
                <td>
                  <span style="font-weight: 500">Country:</span>
                  {{ data.Country }}
                </td>
              </tr>
            </tbody>
          </table>
        </template>
      </ejs-grid>
    </div>
  </div>
`,

data() {
  return {
    data: employeeData,
  };
},
methods: {
  clickHandler: function () {
    this.$refs.grid.ej2Instance.detailRowModule.expand(
      this.$refs.textbox.$el.value
    );
  },
},
provide: {
  grid: [DetailRow],
}

});