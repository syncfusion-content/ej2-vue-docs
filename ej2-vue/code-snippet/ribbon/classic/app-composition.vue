<template>
  <ejs-ribbon activeLayout="Classic">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :allowedSizes="largeSize" :splitButtonSettings="pasteSettigs" >
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
              <e-ribbon-collection>
              <e-ribbon-items>
                <e-ribbon-item type="Button" :buttonSettings="cutButton">
                </e-ribbon-item>
                <e-ribbon-item type="Button" :buttonSettings="copyButton">
                </e-ribbon-item>
              </e-ribbon-items>
            </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
      <e-ribbon-tab header="Insert">
        <e-ribbon-groups>
          <e-ribbon-group header="Tables">
            <e-ribbon-collections>
             <e-ribbon-collection>
              <e-ribbon-items>
                <e-ribbon-item type="DropDown" :dropDownSettings="tableSettings">
                </e-ribbon-item>
              </e-ribbon-items>
            </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script setup>

import { RibbonItemSize } from "@syncfusion/ej2-vue-ribbon";
import { RibbonComponent as EjsRibbon, RibbonGroupDirective as ERibbonGroup, RibbonGroupsDirective as ERibbonGroups, RibbonCollectionsDirective as ERibbonCollections, RibbonCollectionDirective as ERibbonCollection, RibbonItemsDirective as ERibbonItems, RibbonItemDirective as ERibbonItem, RibbonTabsDirective as ERibbonTabs, RibbonTabDirective as ERibbonTab } from "@syncfusion/ej2-vue-ribbon";

const largeSize = RibbonItemSize.Large;
const pasteSettigs = {
  iconCss: "e-icons e-paste", content: "Paste",
  items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
};
const cutButton = { iconCss: "e-icons e-cut", content: "Cut" };
const copyButton = { iconCss: "e-icons e-copy", content: "Copy" };
const tableSettings = {
  iconCss: "e-icons e-table",
  content: "Table",
  items: [
    { text: "Insert Table" }, { text: "Draw Table" },
    { text: "Convert Table" }, { text: "Excel SpreadSheet" }
  ]
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