
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { MultiSelect } from "@syncfusion/ej2-dropdowns";
import { purchaseData } from './datasource.js';

Vue.use(GridPlugin);

let ddElem;
let multiSelectObj;
let multiselectDatasource = [
  { ShipCity: 'Reims', Id: '1' },
  { ShipCity: 'Münster', Id: '2' },
  { ShipCity: 'Rio de Janeiro', Id: '3' },
  { ShipCity: 'Lyon', Id: '4' },
  { ShipCity: 'Charleroi', Id: '5' },
];

function createShipCityFn() {
  ddElem = document.createElement('input');
  return ddElem;
}
function readShipCityFn() {
  return multiSelectObj.value.join(",");
}
function destroyShipCityFn() {
  multiSelectObj.destroy();
}
function writeShipCityFn(args) {
  {
    let multiSelectVal = args.rowData[args.column.field]
      ? args.rowData[args.column.field].split(",")
      : [];
    multiSelectObj = new MultiSelect({
      value: multiSelectVal,
      dataSource: multiselectDatasource,
      fields: { value: "ShipCity", text: "ShipCity" },
      floatLabelType: "Never",
      mode: "Box",
    });
    multiSelectObj.appendTo(ddElem);
  }
}

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowPaging='true' :editSettings='editSettings' :pageSettings='pageSettings' :toolbar='toolbar' height='175px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' type='string' width=120>
                </e-column>
                <e-column field='Freight' headerText='Freight' type='number' textAlign='Right' editType='numericedit' format='C2' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' type='string' :edit='dsParams' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: purchaseData,
      pageSettings: { pageSizes: true, pageSize: 5 },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      dsParams: {
        create: createShipCityFn,
        destroy: destroyShipCityFn,
        read: readShipCityFn,
        write: writeShipCityFn,
      },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderIDRules: { required: true },
    };
  },

  provide: {
    grid: [Page, Edit, Toolbar],
  },

});