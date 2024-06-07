<template>
<div id="app">
        <ejs-treegrid :dataSource="data" idMapping='TaskID' parentIdMapping='ParentItem' hasChildMapping='isParent' :treeColumnIndex='1' :allowPaging='true' :allowSorting='true' :pageSettings='pageSettings' :loadingIndicator='loadingIndicator'>
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' width=120 textAlign='Right'></e-column>
                <e-column field='TaskName' headerText='Task Name' width=240 textAlign='Left'></e-column>
                <e-column field='StartDate' headerText='Start Date' width=140 format="yMd" textAlign='Right' type='date'></e-column>
                <e-column field='Duration' headerText='Duration' width=130 textAlign='Right'></e-column>
                <e-column field='Progress' headerText='Progress' width=130></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, Page, Sort, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

   data() {
    let SERVICE_URI ="https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData";
    return {
      data: new DataManager({
        url: SERVICE_URI,
        adaptor: new WebApiAdaptor(),
        crossDomain: true
      }),
      pageSettings: { pageCount: 3 },
      loadingIndicator: { indicatorType: 'Shimmer' },
    };
  },
  provide: {
      treegrid: [ Page, Sort ]
    },
}
</script>