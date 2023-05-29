

<template>
    <div id="app">
        <ejs-treegrid ref='treegrid' :dataSource="virtualData" :enableInfiniteScrolling='true' :treeColumnIndex='1' childMapping='Crew' :height=317 :pageSettings='pageSettings' :infiniteScrollSettings='infiniteScrollSettings'>
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

import Vue from "vue";
import { TreeGridPlugin, InfiniteScroll, TreeGridComponent, Page } from "@syncfusion/ej2-vue-treegrid";
import { DataManager, JsonAdaptor } from '@syncfusion/ej2-data';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { dataSource, virtualData } from './datasource.js';

Vue.use(TreeGridPlugin);

export default {
  data: function() {
    return {
        virtualData: dataSource(),
        pageSettings: { pageSize: 50 },
        infiniteScrollSettings : { initialBlocks: 5 }
    };
  },
  provide: {
      treegrid: [InfiniteScroll, Page]
  }
}
</script>



