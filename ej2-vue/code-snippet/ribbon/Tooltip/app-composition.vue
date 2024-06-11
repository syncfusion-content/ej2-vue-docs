<template>
  <ejs-ribbon id="ribbon">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :splitButtonSettings="pasteButton"
                    :ribbonTooltipSettings="pasteOptions">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton" :ribbonTooltipSettings="cutOptions">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :buttonSettings="copyButton" :ribbonTooltipSettings="copyOptions">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :buttonSettings="formatButton" :ribbonTooltipSettings="formatOptions">
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

import { RibbonComponent as EjsRibbon, RibbonGroupDirective as ERibbonGroup, RibbonGroupsDirective as ERibbonGroups, RibbonCollectionsDirective as ERibbonCollections, RibbonCollectionDirective as ERibbonCollection, RibbonItemsDirective as ERibbonItems, RibbonItemDirective as ERibbonItem, RibbonTabsDirective as ERibbonTabs, RibbonTabDirective as ERibbonTab } from "@syncfusion/ej2-vue-ribbon";


const pasteButton = {
  iconCss: "e-icons e-paste",
  content: "Paste",
  items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
};
const cutButton = { iconCss: "e-icons e-cut", content: "Cut" };
const copyButton = { iconCss: "e-icons e-copy", content: "Copy" };
const formatButton = { iconCss: "e-icons e-format-painter", content: "Format Painter" };

const cutOptions = { title: "Cut", content: "Places the selected text or object on the clipboard so that you can paste it somewhere else.", iconCss: "e-icons e-cut" };
const copyOptions = { title: "Copy", content: "Copies the chosen text or object to the clipboard so that you can reuse it elsewhere.", iconCss: "e-icons e-copy" };
const pasteOptions = { title: "Paste", content: "Insert the clipboard content where the cursor is currently placed.", iconCss: "e-icons e-paste" };
const formatOptions = { title: "Format Painter", content: "Copies the formatting style of a selected text or object and applies it to other content within the document.", iconCss: "e-icons e-format-painter" };


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