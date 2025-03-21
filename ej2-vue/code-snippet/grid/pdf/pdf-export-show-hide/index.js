
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' 
      :allowPdfExport='true' :pdfExportComplete='pdfExportComplete' :toolbarClick='toolbarClick'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
          <e-column headerText='Order Details' :columns='orderColumns' textAlign="Center" width=150></e-column>
          <e-column headerText='Ship Details' :columns='shipColumns' textAlign="Center" width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>`,

  data() {
    return {
      data: data,
      toolbarOptions: ['PdfExport'],
      orderColumns: [{
        field: 'OrderDate',
        headerText: 'Order Date',
        format: 'yMd',
        width: 130,
        textAlign: 'Right',
        minWidth: 10,
      },
      {
        field: 'Freight',
        headerText: 'Freight ($)',
        width: 120,
        format: 'C1',
        textAlign: 'Right',
        minWidth: 10,
      }],      
      shipColumns: [
        {
          field: 'ShippedDate',
          headerText: 'Shipped Date',
          format: 'yMd',
          textAlign: 'Right',
          width: 150,
          minWidth: 10,
        },
        {
          field: 'ShipCountry',
          headerText: 'Ship Country',
          width: 150,
          minWidth: 10,
        },
        {
          field: 'ShipName',
          headerText: 'Ship Name',
          width: 150,
          minWidth: 10,
          visible:false
        },
      ]
    };
  },
  methods: {
    toolbarClick: function(args) {
      if (args.item.id === 'Grid_pdfexport') {
        this.$refs.grid.ej2Instances.columns[1].columns[0].visible = false;
        this.$refs.grid.ej2Instances.columns[2].columns[2].visible = true;
        this.$refs.grid.pdfExport();
      }
    },
    pdfExportComplete: function(args) {
      this.$refs.grid.ej2Instances.columns[1].columns[0].visible = true;
      this.$refs.grid.ej2Instances.columns[2].columns[2].visible = false;
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }

});