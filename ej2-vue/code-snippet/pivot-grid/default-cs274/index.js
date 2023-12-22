
import Vue from "vue";
import { PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";
import { PdfExportProperties } from '@syncfusion/ej2-grids';
import { ButtonPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';
import { image } from './image.ts';

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template:
    `<div id="app">
      <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">PDF Export</ejs-button>
      <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :allowPdfExport="allowPdfExport"> </ejs-pivotview>
    </div>`,

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
      isPrimary: true
    }
  },
  methods: {
    btnClick: function(args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      let pdfExportProperties: PdfExportProperties = {
        header: {
          fromTop: 0,
          height: 130,
          contents: [
            {
              type: 'Image',
              src: image,
              position: { x: 20, y: 10 },
              size: { height: 100, width: 100 },
            }
          ]
        }
      };
      pivotGridObj.pdfExport(pdfExportProperties);
    }
  }

});