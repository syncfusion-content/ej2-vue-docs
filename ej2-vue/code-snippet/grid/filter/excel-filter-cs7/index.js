import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { ordersTrackData } from './datasource.js'
Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

new Vue({
    el: '#app',
    template: `
  <div id="app">
    <div class="filter-dropdown-container">
      <label for="filterType">Select Filter Type:</label>
      <ejs-dropdownlist
        ref="dropdownList"
        id="filterType"
        width="100px"
        :dataSource="filterTypeData"
        :fields="fields"
        :value="filterOptions.type"
        @change="onFilterTypeChange"
      ></ejs-dropdownlist>
    </div>
    <ejs-grid :key="filterOptions.type" ref="grid" :dataSource="data" :allowFiltering="true" :filterSettings="filterOptions">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="100" isPrimaryKey="true"></e-column>
        <e-column field="CustomerName" headerText="Customer Name" width="120"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="100" textAlign="Right" format="yMd"></e-column>
        <e-column field="Product" headerText="Product" width="80"></e-column>
        <e-column field="Status" headerText="Status" width="80"></e-column>
        <e-column field="Amount" headerText="Amount" width="80" textAlign="Right"></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

    data() {
        return {
            data: ordersTrackData,
            fields: { text: 'text', value: 'value' },
            filterTypeData: [
              { text: 'CheckBox', value: 'CheckBox' },
              { text: 'Excel', value: 'Excel' }
            ],
            filterOptions: { type: "CheckBox", mode: "Immediate" },
        };
    },
    methods: {
        onFilterTypeChange(event) {
            this.filterOptions = { ...this.filterOptions, type: event.value };
        }
    },
    provide: {
        grid: [Filter],
    },

});

const style = document.createElement('style');
style.textContent = `
.filter-dropdown-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.filter-dropdown-container label {
    font-weight: 600;
}

.filter-dropdown-container .e-ddl {
    width: 150px;
    margin: 10px;
}
`;
document.head.appendChild(style);