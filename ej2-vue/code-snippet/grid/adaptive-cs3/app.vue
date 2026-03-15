<template>
  <div id="app">
    <div class="e-adaptive-demo e-bigger">
      <div class="e-mobile-layout">
        <div class="e-mobile-content">
          <ejs-grid ref='grid' id="Grid" :dataSource="data" height='100%' :enableAdaptiveUI='true' :adaptiveUIMode= 'adaptiveUIMode'
            :allowPaging='true' :allowSorting='true' :allowFiltering='true' :editSettings='editSettings'
            :toolbar='toolbar' :filterSettings='filterSettings' :allowExcelExport='true' :allowPdfExport='true' 
            :allowGrouping=true :selectionSettings="selectionSettings" :showColumnChooser='true'
            :load='load' :toolbarClick="toolbarClick">
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
              <e-column field='CustomerID' headerText='Customer Name' width='160' minWidth=80 maxWidth=300 :validationRules='customeridrules'></e-column>
              <e-column field='Freight' headerText='Freight' width='150' minWidth=80 maxWidth=300 format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
              <e-column field='OrderDate' headerText='Order Date' width='200' :format='dateFormat' textAlign='Right' editType='datepickeredit'></e-column>
              <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit'></e-column>
            </e-columns>
          </ejs-grid>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Sort, Edit, Toolbar, Page, 
  ColumnChooser, Group, ExcelExport, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'


export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
  },
  data() {
    return {
      data: data,
      adaptiveUIMode: 'Mobile',
      orderidrules: { required: true, number: true },
      customeridrules: { required: true },
      freightrules: { required: true },
      dateFormat: { type: 'dateTime', format: 'M/d/y hh:mm a' },
      editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser', 'ExcelExport', 'PdfExport'],
      filterSettings: { type: 'Excel' },
      selectionSettings: { type: 'Multiple' },
    };
  },
  methods: {
    load: function () {
      this.$refs.grid.ej2Instances.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
    },
    toolbarClick: function(args) {
      switch (args.item.id) {
        case 'Grid_pdfexport':
          this.$refs.grid.pdfExport();
          break;
        case 'Grid_excelexport':
          this.$refs.grid.excelExport();
          break;
      }
    }
  },
  provide: {
    grid: [Filter, Sort, Edit, Toolbar, Page, 
    ColumnChooser, Group, ExcelExport, PdfExport]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
 
/* The device with borders */
.e-mobile-layout {
  position: relative;
  width: 360px;
  height: 640px;
  margin: auto;
  border: 16px solid #f4f4f4;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  box-shadow: 0 0px 2px rgb(144, 144, 144), 0 0px 10px rgb(0 0 0 / 16%);
}

/* The horizontal line on the top of the device */
.e-mobile-layout:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ebebeb;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.e-mobile-layout:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #e8e8e8;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.e-mobile-layout .e-mobile-content {
  overflow-x: hidden;
  height: 100%;
  background: white;
  border: 0px solid #dddddd;
}

.e-responsive-dialog {
  box-shadow: none;
  border: 1px solid #dddddd;
}

/* Render the mobile pager by default */
@media (max-width: 3840px) {
  .e-adaptive-demo .e-pager {
    padding: 13px 0;
  }

  .e-adaptive-demo .e-pager div.e-parentmsgbar {
    box-sizing: border-box;
    display: inline-block;
    float: initial;
    padding: 0;
    text-align: center;
    vertical-align: top;
    width: calc(60% - 48px);
  }

  .e-adaptive-demo .e-pager .e-pagesizes,
  .e-adaptive-demo .e-pager .e-pagecountmsg,
  .e-adaptive-demo .e-pager .e-pagercontainer {
    display: none;
  }

  .e-adaptive-demo .e-pager .e-icons {
    font-size: 11px;
  }

  .e-adaptive-demo .e-pager .e-mfirst,
  .e-adaptive-demo .e-pager .e-mprev,
  .e-adaptive-demo .e-pager .e-mnext,
  .e-adaptive-demo .e-pager .e-mlast {
    border: 0;
    box-sizing: border-box;
    display: inline-block;
    padding: 1% 5%;
  }

  .e-adaptive-demo .e-pager .e-mfirst {
    margin-right: 4px;
    text-align: right;
    width: calc(10% + 11px);
  }

  .e-adaptive-demo .e-pager .e-mprev,
  .e-adaptive-demo .e-pager .e-mnext {
    margin: 0 4px;
    width: 10%;
  }

  .e-adaptive-demo .e-pager .e-mprev {
    text-align: right;
  }

  .e-adaptive-demo .e-pager .e-mnext {
    text-align: left;
  }

  .e-adaptive-demo .e-pager .e-mlast {
    margin-left: 4px;
    text-align: left;
    width: calc(10% + 11px);
  }

  .e-adaptive-demo .e-bigger .e-pager,
  .e-adaptive-demo .e-pager.e-bigger {
    padding: 19px 0;
  }

  .e-adaptive-demo .e-bigger .e-pager.e-rtl div.e-parentmsgbar,
  .e-adaptive-demo .e-pager.e-bigger.e-rtl div.e-parentmsgbar {
    margin-right: 0;
  }

  .e-adaptive-demo .e-bigger .e-pager div.e-parentmsgbar,
  .e-adaptive-demo .e-pager.e-bigger div.e-parentmsgbar {
    padding: 0;
  }
}

.e-dlg-target.e-scroll-disabled {
  overflow: auto !important;
}
</style>