
import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { data, FileType } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

new Vue(
  {
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid ref="grid" :dataSource='data' allowFiltering='true' height='315px' >
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
          <e-column field="Type" headerText="Type" :template="'dropdownTemplate'" :filterTemplate="'dropDownFilterTemplate'" width=130></e-column>
        </e-columns>
        <template v-slot:dropdownTemplate="{data}">
          {{ data.Type === 1 ? 'Base' : data.Type === 2 ? 'Replace' : data.Type === 3 ? 'Delta' : '' }}
        </template>
        <template v-slot:dropDownFilterTemplate>
          <div>
            <ejs-dropdownlist cssClass='e-fltrtemp-focus' :dataSource="filterDropData"
              value="filterDropData[0].Type" :fields="fields" :change="onTypeFilterChange"></ejs-dropdownlist>
          </div>
        </template>
      </ejs-grid>
    </div>`,

    data() {
      return {
        data: data,
        fields: { text: "Type", value: "Type" },
        filterDropData: [
          { Type: 'All' },
          { Type: 'Base' },
          { Type: 'Replace' },
          { Type: 'Delta' },
        ]
      }
    },
    methods: {
      onTypeFilterChange: function (args) {
        if (this.$refs.grid) {
          if (args.value === "All") {
            this.$refs.grid.clearFiltering();
          } else {
            this.$refs.grid.filterByColumn("Type", "contains", FileType[args.value]);
          }
        }        
      }
    },
    provide: {
      grid: [Filter]
    }
  }
);