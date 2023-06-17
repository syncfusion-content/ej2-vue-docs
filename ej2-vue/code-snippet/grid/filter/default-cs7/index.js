
import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { MultiSelect, CheckBoxSelection } from "@syncfusion/ej2-dropdowns";
import { DataManager } from "@syncfusion/ej2-data";
import {createElement} from "@syncfusion/ej2-base";
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
MultiSelect.Inject(CheckBoxSelection);

Vue.use(MultiSelectPlugin);

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='Grid' id="Grid" :dataSource='data' :allowFiltering='true' :filterSettings='filterSettings' height='273px'>
            <e-columns>
                <e-column field='OrderID' :filter= 'filter' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
      let dropInstance = null;
    return {
      data: data,
      filterSettings: {
           type: 'Menu'
        },
        filter: {
            ui: {
                create: function (args) {
                    let db = new DataManager(data);
                    let flValInput = createElement('input', { className: 'flm-input' });
                    args.target.appendChild(flValInput);
                    dropInstance = new MultiSelect({
                    dataSource: new DataManager(data),
                    fields: { text: 'OrderID', value: 'OrderID' },
                    placeholder: 'Select a value',
                    popupHeight: '200px',
                    allowFiltering: true,
                    mode: "CheckBox",
                });
                dropInstance.appendTo(flValInput);
                },
                write: function (args) {
                  var grid = document.getElementById("Grid").ej2_instances[0];
                  var filteredValue = [];
                  grid.filterSettings.columns.map((item) => {
                    if (item.field === "OrderID" && item.value) {
                    filteredValue.push(item.value);
                  }
                });
                  if (filteredValue.length > 0) {
                    dropInstance.value = filteredValue;
                  }
                },
                read: function (args) {
                  var grid = document.getElementById("Grid").ej2_instances[0];
                  grid.removeFilteredColsByField(args.column.field);
                  args.fltrObj.filterByColumn(
                    args.column.field,
                    "contains",
                    dropInstance.value
                  );
                }
            }
        }
    };
  },
  provide: {
    grid: [Filter,CheckBoxSelection]
  }

});