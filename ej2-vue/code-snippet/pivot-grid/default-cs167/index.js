
import Vue from "vue";
import { PivotViewPlugin, PDFExport, BeforeExportEventArgs, VirtualScroll } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">PDF Export</ejs-button>
        <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :allowPdfExport="allowPdfExport" :enableVirtualization="enableVirtualization" :beforeExport="beforeExport"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 320,
      allowPdfExport: true,
      enableVirtualization: true,
      isPrimary: true
    }
  },
  provide: {
    pivotview: [
      PDFExport,
      VirtualScroll
    ]
  },
  methods: {
    beforeExport: function (args: BeforeExportEventArgs) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      args.width = pivotGridObj.element.offsetWidth;
      args.height = pivotGridObj.element.offsetHeight;
    },
    btnClick: function(args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.pdfExport();
    }
  }

});