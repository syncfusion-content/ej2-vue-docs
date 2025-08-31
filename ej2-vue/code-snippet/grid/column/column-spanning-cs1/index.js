
import Vue from "vue";
import { GridPlugin, Freeze, Sort } from "@syncfusion/ej2-vue-grids";
import { shiftPlanData } from "./datasource.js";

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid :dataSource="shiftPlanData" :allowSorting="true" :enableColumnSpan="true" :allowTextWrap="true" :textWrapSettings="{ wrapMode: 'Content' }" gridLines="Both" height="450px" width="auto" >
      <e-columns>
        <e-column field="Name" headerText="Doctor Name" width="170" textAlign="Center" freeze="Left" :template="'doctorTemplate'" ></e-column>
        <e-column field="Time9AM" headerText="9:00 AM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time10AM" headerText="10:00 AM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time11AM" headerText="11:00 AM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time12PM" headerText="12:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time1PM" headerText="1:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time2PM" headerText="2:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time3PM" headerText="3:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time4PM" headerText="4:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time5PM" headerText="5:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time6PM" headerText="6:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time7PM" headerText="7:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
      </e-columns>
      <!-- Template for Doctor Name and Designation -->
      <template v-slot:doctorTemplate="{ data }">
        <div class="doctor-name">{{ data.Name }}</div>
        <div class="doctor-designation">{{ data.Designation }}</div>
      </template>
    </ejs-grid>
    </div>
`,

data() {
  return {
    data : shiftPlanData,
  };
},
provide: {
  grid: [Freeze, Sort]
}
});

