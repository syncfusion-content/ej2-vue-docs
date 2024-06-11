<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :toolbar='toolbarOptions' :allowPaging='true' :allowFiltering='true' :allowPdfExport='true' :pageSettings='pageSettings' 
        :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective,Toolbar,PdfExport,Filter,Page  } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { DataManager } from "@syncfusion/ej2-data";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
      data: () => {
        return {
          data: data,
          toolbarOptions: ['PdfExport'],
          pageSettings: { pageSize: 5, pageCount:5 }

        };
      },
      methods: {
        toolbarClick: function (args) {
          if (args['item'].id.indexOf("pdfexport") != -1) {
           let pdfdata;         
           let query = this.$refs.grid.ej2Instances.renderModule.data.generateQuery(); // get grid corresponding query  
         for(var i=0; i<query.queries.length; i++ ){
            if(query.queries[i].fn=='onPage'){
            query.queries.splice(i,1);      // remove page query to get all records
            break;
            }
          }
          let fdata = new DataManager({ json: data}).executeQuery(query).then((e) => {
          pdfdata = e.result;   // get all filtered records
          let exportProperties = { 
           dataSource: pdfdata, 
          }; 
          this.$refs.grid.pdfExport(exportProperties); 
        }).catch((e) => true); 
          }
        },     
      },
      provide: {
        grid: [Toolbar, PdfExport, Filter, Page]
      },
    }
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>