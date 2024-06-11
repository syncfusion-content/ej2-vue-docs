<template>
    <div id="app">
        <ejs-treegrid ref='treegrid' :dataSource="virtualData" :enableInfiniteScrolling='true' :treeColumnIndex='1' childMapping='Crew' :height=317 :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='TaskID' headerText='Player Jersey' width='140' textAlign='Right'></e-column>
                <e-column field='FIELD1' headerText='Player Name' width='140'></e-column>
                <e-column field='FIELD2' headerText='Year' width='105' textAlign='Right'></e-column>
                <e-column field='FIELD3' headerText='Stint' width='90' textAlign='Right'></e-column>
                <e-column field='FIELD4' headerText='TMID' width='90' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
</template>
<script>


import { TreeGridComponent, InfiniteScroll, TreeGridComponent, Page, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { dataSource, virtualData } from './datasource.js';

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data: function() {
    return {
        virtualData: dataSource(),
        pageSettings: { pageSize: 50 }
    };
  },
  provide: {
      treegrid: [InfiniteScroll, Page]
  }
}
</script>