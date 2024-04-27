
import Vue from "vue";
import { GridPlugin, Group, Sort, Resize, ColumnMenu, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid :dataSource="data" id="gridcomp" :allowPaging='true' :allowGrouping='true' :allowSorting='true' :showColumnMenu='true'
        :groupSettings='groupOptions' :allowFiltering='true' :filterSettings='filterSettings'
        :columnMenuClick='columnMenuClick' :columnMenuItems='columnMenuItems'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width='120'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right' type='date'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' :visible='false' width='150'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      groupOptions: { showGroupedColumn: true },
      filterSettings: { type: "CheckBox" },
      columnMenuItems: [
        'SortAscending',
        'SortDescending',
        'Group',
        'Ungroup',
        'Filter',
        {
          text: 'Sub Menu',
          items: [
            { text: 'Option 1', id: 'option1' },
            { text: 'Option 2', id: 'option2' },
            { text: 'Option 3', id: 'option3' },
            {
              text: 'Nested Sub Menu',
              items: [
                { text: 'Nested Option 1', id: 'nestedoption1' },
                { text: 'Nested Option 2', id: 'nestedoption2' },
              ],
            },
          ],
        },
      ],
    };
  },
  provide: {
    grid: [Group, Sort, Resize, ColumnMenu, Page]
  },
  methods: {
    columnMenuClick: function (args) {
      if (args.item.id === 'option1') {
        // custom function
      }
    }
  }

});