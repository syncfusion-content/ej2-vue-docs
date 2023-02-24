

<template>
    <div id="app">
       <button id="restore"  @click="clickRestore">Restore</button>
      <br /><br />
        <ejs-grid ref="grid" :dataSource='data' :enablePersistence='true' :allowPaging='true' height='230px' id="Grid">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150 :headerTemplate="hTemplate"></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150 :template='cTemplate'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
 <script id="template" type="text/x-template">
        <a rel='nofollow' href=https://en.wikipedia.org/wiki/${ShipName}><span class="e-icons e-column"></span></a>
    </script>
  
    <script id="customertemplate" type="text/x-template">
        <span class="e-icons e-header" ></span>
        Customer ID
    </script>
<script>
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

var headTemplate = Vue.component("header", {
    template: '<span class="e-icons e-header">CustomerID</span>',
    data() {
    return {
        data: {}
    };
    }
});

var columnTemplate = Vue.component("column", {
     template: '<a rel="nofollow" href="https://en.wikipedia.org/wiki/${ShipName}"><span class="e-icons e-column"></span></a>',
     data() {
     return {
         data: {}
     };
     }
});

export default {
  data() {
    return {
      data: data,
      hTemplate: function (e) {
          return {
              template: headTemplate
          };
      },
      cTemplate: function (e) {
          return {
              template: columnTemplate
          };
      }
    };
  },
  methods: {
    clickRestore: function () {
        let savedProperties = JSON.parse(this.$refs.grid.ej2Instances.getPersistData());
        let gridColumnsState = Object.assign([], this.$refs.grid.ej2Instances.getColumns());
        savedProperties.columns.forEach((col: {
            field: any;
            headerText: any;
            template: any;
            headerTemplate: any;
        }) => {
            let headerText = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerText'];
            let colTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['template'];
            let headerTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerTemplate'];
            col.headerText = 'Text Changed';
            col.template = colTemplate;
            col.headerTemplate = headerTemplate; //likewise you can restore required column properties as per your wants.
        }
        );
       console.log(savedProperties);
       this.$refs.grid.ej2Instances.setProperties(savedProperties);
    }
  },
  provide: {
    grid: [Page]
  }
}
</script>
<style>
   .e-column:before {
      content: '\e815';
    }

    .e-header:before {
      content: '\ea9a';
    }
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


