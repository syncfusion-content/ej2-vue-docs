
import Vue from "vue";
import { GridPlugin, Group, PdfExport, Toolbar } from '@syncfusion/ej2-vue-grids';
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
      <ejs-grid id="CaptionTemplateGrid" ref="grid" :dataSource="data" :allowGrouping="true" :groupSettings="groupOptions"
      :allowPdfExport="true" :toolbar="toolbar" :toolbarClick="toolbarClick" :exportGroupCaption="exportGroupCaption" height=315>
          <e-columns>
              <e-column field="EmployeeID" headerText="Employee ID" width="120"></e-column>
              <e-column field="FirstName" headerText="Name" width="120"></e-column>
              <e-column field="City" headerText="City"></e-column>
              <e-column field="Title" headerText="Title" width="170"></e-column>
          </e-columns>
      </ejs-grid>`,

  data() {
    return {
      data: employeeData,
      toolbar: ['PdfExport'],
      groupOptions: {
        columns: ['EmployeeID'],
        captionTemplate: '${field} - ${key}'
      }
    };
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item.id === 'CaptionTemplateGrid_pdfexport') {
        this.$refs.grid.pdfExport();
      }
    },
    exportGroupCaption: function (args) {
      args.captionText = args.data.field + ' - ' + args.data.key;
    }
  },
  provide: {
    grid: [Group, PdfExport, Toolbar],
  }

});