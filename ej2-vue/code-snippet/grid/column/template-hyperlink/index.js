

import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
         <ejs-grid ref="grid" :dataSource="data" height=315>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' width='130' textAlign='Right'></e-column>
                <e-column field='LastName' headerText='Last Name' width=150></e-column>
                <e-column field='FirstName' headerText='FirstName' width='120' :template="'cTemplate'">
                </e-column>
            </e-columns>
            <template v-slot:cTemplate="{data}">
            <a href="#" @click="onClick(data.FirstName)">{{data.FirstName}}</a>
          </template>
        </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: employeeData,
      
    };
    
  },
  methods: {
    onClick(firstName) {
      var url = 'https://www.google.com/search?q=';
      var searchUrl = url + firstName;
      window.open(searchUrl);
    },
  },
});