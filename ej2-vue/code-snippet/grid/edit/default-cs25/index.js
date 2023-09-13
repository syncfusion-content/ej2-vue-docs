
import Vue from "vue";
import { GridPlugin, parentsUntil } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref="grid" :dataSource='data' height='315px' :created = 'created'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=120></e-column>
                <e-column field='OrderDate' headerText='Order Date' width=130 textAlign='Right' format='yMd'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=120></e-column>
                <e-column field='Freight' headerText='Receipt Amount'  width=120 :template='cTemplate'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      cTemplate: function () {
          return { template : Vue.component('columnTemplate',{
             template: `<div class="image">
                     <input :id='id' :value='value' class='custemp' type='text' style='width: 100%'/>
                </div>`,
                data: function() {
                    return {
                        data: {}
                    }
                },
                computed: {
                    id: function() {
                        return this.data.OrderID;
                    },
                    value: function() {
                        return this.data.Freight;
                    }
                }
          })}
      }
    };
  },
  methods: {
    created(args) {
        this.$refs.grid.ej2Instances.element.addEventListener('keyup', function (e) { // Bind the keyup event for the grid.
            if (e.target.classList.contains('custemp')) { // Based on this condition, you can find whether the target is an input element or not.
                var row = parentsUntil(e.target, 'e-row');
                var rowIndex = row.rowIndex; // Get the row index.
                var uid = row.getAttribute('data-uid');
                var grid = document.getElementsByClassName('e-grid')[0].ej2_instances[0];
                var rowData = grid.getRowObjectFromUID(uid).data; // Get the row data.
                rowData.Freight = e.target.value; // Update the new value for the corresponding column.
                grid.updateRow(rowIndex, rowData); // Update the modified value in the row data.
            }
        });
    }
  },

});