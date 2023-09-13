
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
      <ejs-grid :dataSource="data" height=310 width='auto' :rowTemplate='rowTemplate' >
        <e-columns>
            <e-column field='Employee Image' headerText='Employee Image' width='150' textAlign='Center'></e-column>
            <e-column field='Employee Details' headerText='Employee Details' width='300' textAlign='Left'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: employeeData,
      rowTemplate: function () {
        return { template : Vue.component('rowTemplate',{
        template: `<tr>
        <td class="rowphoto">
            <img :src="image" :alt="altImage" />
        </td>
        <td class="details">
            <table class="CardTable" cellpadding="3" cellspacing="2">
                <colgroup>
                    <col width="50%">
                    <col width="50%">
                </colgroup>
                <tbody>
                    <tr>
                        <td class="CardHeader">First Name </td>
                        <td>{{data.FirstName}} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Last Name</td>
                        <td>{{data.LastName}} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Title</td>

                        <td>{{data.Title}} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Birth Date</td>
                        <td>{{format(data.BirthDate)}} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Hire Date</td>
                        <td>{{format(data.HireDate)}} </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>`,
          data: function() {
            return {
              data: {}
            }
          },
          methods: {
            format: function(value) {
                return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
            }
          },
          computed: {
            image: function() {
              return './images/' + this.data.EmployeeID + '.png';
            },
            altImage: function() {
              return this.data.EmployeeID;
            }
          }
        })}
      }
    };
  }

});