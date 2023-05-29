
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' height='200px' :editSettings='editSettings' :toolbar='toolbar' :toolbarClick='clickHandler'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel','Print', 'Search', { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }]
    };
  },
  methods: {
      clickHandler: function(args) {
        if (args.item.id === 'Click') {
            alert("Custom Toolbar Click...");
        }
    }
  },
  provide: {
      grid: [Toolbar, Edit]
  }

});