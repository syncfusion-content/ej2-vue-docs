
import Vue from "vue";
import { GridPlugin, Edit  } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' id='grid' :dataSource='data' :load='load' :editSettings='editSettings' :toolbar='toolbar' :allowPaging="true">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100 :isPrimaryKey='true'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' width=120 format='C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data: function() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
       toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  methods: {
      load: function() {
        this.$refs.grid.ej2Instances.element.addEventListener('mouseup', function(e) {
            var instance = this.ej2_instances[0];
            if (e.target.classList.contains("e-rowcell")) {
            if (instance.isEdit)
                instance.endEdit();
                let index = parseInt(e.target.getAttribute("Index"));
                instance.selectRow(index);
                instance.startEdit();
            };
        });
      }
  },
  provide: {
    grid: [Edit]
  }

});