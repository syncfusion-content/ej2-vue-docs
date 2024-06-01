

<template>
<div id="app">
        <ejs-treegrid :dataSource="data" idMapping='TaskID' parentIdMapping='ParentItem' hasChildMapping='isParent' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='Sno' headerText='SNO' width='90' textAlign='Right'></e-column>
                <e-column field='TaskName' headerText='Task Name' width='180'></e-column>
                <e-column field='StartDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Page } from "@syncfusion/ej2-vue-treegrid";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

Vue.use(TreeGridPlugin);

class SerialNoAdaptor extends WebApiAdaptor {
    public processResponse(): Object[] {
        let i: number = 0;
        // calling base class processResponse function
        let original: Object[] = super.processResponse.apply(this, arguments);
        // adding serial number
        original.forEach((item: Object) => item['Sno'] = ++i);
        return original;
    }
}

export default {
  data () {
      let SERVICE_URI: string =
      "https://services.syncfusion.com/vue/production/api/SelfReferenceData";
    return {
      data: new DataManager({
        url: SERVICE_URI,
        adaptor: new SerialNoAdaptor(),
        offline: true
      }),
      pageSettings: { pageCount: 4 }
    };
  },
  provide: {
      treegrid: [ Page ]
    },
}
</script>



