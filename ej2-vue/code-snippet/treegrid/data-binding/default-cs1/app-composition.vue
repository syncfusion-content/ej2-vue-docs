<template>
  <div id="app">
    <ejs-button v-on:click="btnClick">Bind Data</ejs-button>
        <ejs-treegrid ref=treegrid :dataSource="data" idMapping='TaskID' parentIdMapping='ParentItem'  :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='TaskName' headerText='Task Name' width='100'></e-column>
                <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                <e-column field='Progress' headerText='Progress' width='80' textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { Fetch } from '@syncfusion/ej2-base';

const data = {};
const pageSettings = { pageCount: 4 };

provide('treegrid',  [ Page ]);

const btnClick = function (){
        let treegrid = document.getElementsByClassName("e-treegrid")[0].ej2_instances[0]; // TreeGrid instance
        let fetch = new Fetch ("https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData", "GET");treegrid.showSpinner();
        fetch.send();
        fetch.onSuccess = function (result) {
        treegrid.hideSpinner();
        treegrid.dataSource = result;
        };
  };

</script>