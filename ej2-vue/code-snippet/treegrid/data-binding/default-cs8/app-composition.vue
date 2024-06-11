<template>
<div id="app">
        <ejs-treegrid ref=treegrid :dataSource="data" idMapping='TaskID' parentIdMapping='parentItem':treeColumnIndex='1' :actionFailure='actionFailure'>
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' width=90 textAlign='Right'></e-column>
                <e-column field='TaskName' headerText='Task Name' width=180></e-column>
                <e-column field='StartDate' headerText='Start Date' width=90 format="yMd" textAlign='Right'></e-column>
                <e-column field='Duration' headerText='Duration' width=80 textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

let SERVICE_URI = "http://some.com/invalidUrl";

const data = new DataManager({
  url: SERVICE_URI,
  adaptor: new WebApiAdaptor(),
  offline: true
});

const pageSettings = { pageCount: 4 };

provide('treegrid',  [ Page ]);

const actionFailure = function() {
       let span = document.createElement('span');
       let treegrid = document.getElementsByClassName("e-treegrid")[0].ej2_instances[0];
       treegrid.element.parentNode.insertBefore(span, treegrid.element);
       span.style.color = '#FF0000'
       span.innerHTML = 'Server exception: 404 Not found';
};

</script>