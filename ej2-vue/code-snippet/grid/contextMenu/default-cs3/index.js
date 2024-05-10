
import Vue from "vue";
import { GridPlugin, ContextMenu, Page, ExcelExport, PdfExport, Sort } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid ref='grid' :dataSource='data' :allowPaging='true' :allowSorting='true' height='265px' :contextMenuItems='contextMenuItems' 
      :pageSettings='pageSettings' :allowExcelExport='true' :allowPdfExport='true' :created = 'created' v-on:click.native="clicked">
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' width='90' textAlign="Right" isPrimaryKey='true'></e-column>
          <e-column field='CustomerID' headerText='Customer Name' width='100'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width='100'></e-column>
          <e-column field='ShipCity' headerText='Ship City' width='100'></e-column>
        </e-columns>
      </ejs-grid>
    </div>`,

  data() {
    return {
      values: "",
      data: data,
      pageSettings : { pageSize: 8 },
      contextMenuItems: [
        'SortAscending',
        'SortDescending',
        'FirstPage',
        'PrevPage',
        'LastPage',
        'NextPage',
        'PdfExport',
        'ExcelExport',
      ],
      editOptions: {
        allowDeleting: true,
        allowEditing: true,
        allowAdding: true,
      },
    };
  },
  methods: {
    created:function() {
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
    grid: [ContextMenu, Page, ExcelExport, PdfExport, Sort]
  }

});