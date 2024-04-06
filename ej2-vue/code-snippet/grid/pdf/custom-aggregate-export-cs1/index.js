
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport, Aggregate } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowPdfExport='true' :toolbarClick='toolbarClick'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        </e-columns>
        <e-aggregates>
          <e-aggregate>
            <e-columns>
              <e-column columnName="ShipCountry" type="Custom" :customAggregate="customAggregateFn" :footerTemplate='footerTemp'></e-column>
            </e-columns>
          </e-aggregate>
        </e-aggregates>
      </ejs-grid>
    </div>`,

  data() {
    return {
      data: data,
      toolbarOptions: ['PdfExport'],
      footerTemp: function () {
        return {
          template: Vue.component('footerTemplate', {
            template: `<span> {{data.Custom}} </span>`,
            data() { return { data: {} }; }
          })
        }
      }
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        this.$refs.grid.pdfExport();
      }
    },
    customAggregateFn: function (data) {
      const brazilCount = data.result ? data.result.filter((item) => item['ShipCountry'] === 'Brazil').length
        : data.filter((item) => item['ShipCountry'] === 'Brazil').length;
      return `Brazil count: ${brazilCount}`;
    }
  },
  provide: {
    grid: [Toolbar, PdfExport, Aggregate]
  }
});