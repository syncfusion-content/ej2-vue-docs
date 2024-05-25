<template>
  <div>
    <ejs-ribbon>
      <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
          <e-ribbon-groups>
            <e-ribbon-group header="Table">
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="SplitButton" :splitButtonSettings="tableSettings">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
          </e-ribbon-groups>
        </e-ribbon-tab>
      </e-ribbon-tabs>
    </ejs-ribbon>
    <ejs-listview id='tableList' :dataSource='tableOptions' headerTitle='Table' showHeader='true'></ejs-listview>
  </div>
</template>

<script>

import { RibbonComponent, RibbonGroupDirective, RibbonGroupsDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonItemsDirective, RibbonItemDirective, RibbonTabsDirective, RibbonTabDirective } from "@syncfusion/ej2-vue-ribbon";
import { ListViewComponent } from '@syncfusion/ej2-vue-lists';



export default {
  name: "App",
  components: {
    "ejs-ribbon": RibbonComponent,
    "e-ribbon-tabs": RibbonTabsDirective,
    "e-ribbon-tab": RibbonTabDirective,
    "e-ribbon-groups": RibbonGroupsDirective,
    "e-ribbon-group": RibbonGroupDirective,
    "e-ribbon-collections": RibbonCollectionsDirective,
    "e-ribbon-collection": RibbonCollectionDirective,
    "e-ribbon-items": RibbonItemsDirective,
    "e-ribbon-item": RibbonItemDirective,
    "ejs-listview": ListViewComponent
  },

  data: function () {
    return {
      tableOptions: [
        { text: "Insert Table" },
        { text: "This device" },
        { text: "Convert Table" },
        { text: "Excel SpreadSheet" }
      ],
      tableSettings: {
        content: 'Table',
        iconCss: 'e-icons e-table',
        target: "#tableList"
      }
    };
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>