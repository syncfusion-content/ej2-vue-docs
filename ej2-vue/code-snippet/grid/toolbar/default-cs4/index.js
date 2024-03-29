
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
        <ejs-grid ref='grid' :dataSource='data' height='200px' :editSettings='editSettings' :toolbar='toolbar' :toolbarClick='clickHandler'>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=90></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
              <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
              <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      message:'',
      orderIDRules: { required: true },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }]
    };
  },
  methods: {
      clickHandler: function(args) {
        if (args.item.id === 'Click') {
          this.message = `Custom Toolbar Clicked`;
        }
    }
  },
  provide: {
      grid: [Toolbar, Edit]
  }

});