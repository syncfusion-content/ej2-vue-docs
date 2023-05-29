
import Vue from "vue";
import { GridPlugin, Page, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);
var fieldName;
;
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :editSettings="editSettings" height="220" :actionComplete="actionComplete" :recordDoubleClick="recordDoubleClick">
        <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" :isPrimaryKey="true" width="120" type="number">
            </e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="140" type="string">
            </e-column>
            <e-column field="Freight" headerText="Freight" editType="numericedit" textAlign="Right" width="120" format="C2">
            </e-column>
            <e-column field="OrderDate" headerText="Order Date" textAlign="Right" width="140" editType="datetimepickeredit" format="yMMM">
            </e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="150" editType="dropdownedit" :edit="params">
            </e-column>
        </e-columns>
    </ejs-grid>
  </div>
`,

    data() {
        return {
            data: data,
            editSettings: {
                allowEditing: true,
                allowAdding: true,
                allowDeleting: true,
                 mode: "Normal",
            },
            shipFormat: { type: "dateTime", format: "dd/MM/yyyy hh:mm a" },
            params: {
                params: {
                    popupHeight: "300px",
                }
            }
        };
    },
    methods: {
        actionComplete(e) {
            if (e.requestType === "beginEdit") {
                // focus the column
                e.form.elements[this.$refs.grid.ej2Instances.element.getAttribute("id") + fieldName].focus();
            }
        },
        recordDoubleClick(e) {
            var clickedColumnIndex = e.cell.getAttribute("data-colindex");
            fieldName = this.$refs.grid.ej2Instances.columnModel[parseInt(clickedColumnIndex, 10)].field;
        }
    },
    provide: {
        grid: [Page, Edit]
    }

});