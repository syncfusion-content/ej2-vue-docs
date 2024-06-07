
import Vue from "vue";
import { TreeGridPlugin, Page } from "@syncfusion/ej2-vue-treegrid";
import { DataManager, WebApiAdaptor , Query } from "@syncfusion/ej2-data";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid :dataSource="data" idMapping='TaskID' parentIdMapping='ParentItem' hasChildMapping='isParent' :query='query' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='TaskName' headerText='Task Name' width='180'></e-column>
                <e-column field='StartDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
`,

  data () {
      let SERVICE_URI: string =
      "https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData";
    return {
      data: new DataManager({
        url: SERVICE_URI,
        adaptor: new WebApiAdaptor(),
      }),
      pageSettings: { pageCount: 4 }
      query: new Query().addParams('ej2treegrid', 'true');
    };
  },
  provide: {
      treegrid: [ Page ]
    },

});