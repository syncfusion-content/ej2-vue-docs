
import Vue from "vue";
import { GridPlugin, ContextMenu, Page, Edit } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowPaging='true'
        height='265px'
        :contextMenuItems='contextMenuItems'
        :editSettings  ='editOptions'
        :created = 'created' v-on:click.native="clicked">
            <e-columns>
                <e-column field='EmployeeID' :isPrimaryKey='true' headerText='Employee ID'
                textAlign='Right' width=120></e-column>
                <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                <e-column field='LastName' headerText='Last Name' width=150></e-column>
                <e-column field='City' headerText='City' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      values: "",
      data: employeeData,
      contextMenuItems: ['Copy', 'Edit', 'Delete', 'Save', 'Cancel'],
      editOptions: {
        allowDeleting: true,
        allowEditing: true,
        allowAdding: true,
      },
    };
  },
  methods: {
    created:function(args) {
      this.$refs.grid.ej2Instances.contextMenuModule.contextMenu.beforeOpen = (
        args
      ) => {
        if (args.event && args.event.which === 3) args.cancel = true;
        args.event = this.values;
        this.$refs.grid.ej2Instances.contextMenuModule.contextMenuBeforeOpen(
          args
        );
      };
    },
    clicked: function(event) {
      this.values = event;
      this.$refs.grid.ej2Instances.contextMenuModule.contextMenu.open(
        this.values.pageY + pageYOffset,
        this.values.pageX + pageXOffset
      );
    }
  },
  provide: {
    grid: [ContextMenu, Page, Edit]
  }

});