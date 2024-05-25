<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard" showLauncherIcon=true groupIconCss="e-icons e-paste" id="clipboardGroup">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :buttonSettings="copyButton">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :buttonSettings="formatButton">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
    <e-ribbon-contextual-tabs>
      <e-ribbon-contextual-tab visible=true>
        <e-ribbon-tabs>
          <e-ribbon-tab header="Shape Format" id="ShapeFormat">
            <e-ribbon-groups>
              <e-ribbon-group header="Text decoration" showLauncherIcon=true>
                <e-ribbon-collections>
                  <e-ribbon-collection>
                    <e-ribbon-items>
                      <e-ribbon-item type="Button" :buttonSettings="text1">
                      </e-ribbon-item>
                      <e-ribbon-item type="Button" :buttonSettings="text2">
                      </e-ribbon-item>
                      <e-ribbon-item type="Button" :buttonSettings="text3">
                      </e-ribbon-item>
                    </e-ribbon-items>
                  </e-ribbon-collection>
                </e-ribbon-collections>
              </e-ribbon-group>
              <e-ribbon-group header="Accessibility">
                <e-ribbon-collections>
                  <e-ribbon-collection>
                    <e-ribbon-items>
                      <e-ribbon-item type="Button" :allowedSizes="largeSize" :buttonSettings="accessibility">
                      </e-ribbon-item>
                    </e-ribbon-items>
                  </e-ribbon-collection>
                </e-ribbon-collections>
              </e-ribbon-group>
              <e-ribbon-group header="Arrange" showLauncherIcon=true>
                <e-ribbon-collections>
                  <e-ribbon-collection>
                    <e-ribbon-items>
                      <e-ribbon-item type="Button" :buttonSettings="forward">
                      </e-ribbon-item>
                      <e-ribbon-item type="Button" :buttonSettings="backward">
                      </e-ribbon-item>
                      <e-ribbon-item type="Button" :buttonSettings="selection">
                      </e-ribbon-item>
                    </e-ribbon-items>
                  </e-ribbon-collection>
                </e-ribbon-collections>
              </e-ribbon-group>
            </e-ribbon-groups>
          </e-ribbon-tab>
        </e-ribbon-tabs>
      </e-ribbon-contextual-tab>
    </e-ribbon-contextual-tabs>
  </ejs-ribbon>
</template>

<script setup>
import { provide } from "vue";

import { RibbonItemSize, RibbonContextualTab, RibbonComponent as EjsRibbon, RibbonGroupDirective as ERibbonGroup, RibbonGroupsDirective as ERibbonGroups, RibbonCollectionsDirective as ERibbonCollections, RibbonCollectionDirective as ERibbonCollection, RibbonItemsDirective as ERibbonItems, RibbonItemDirective as ERibbonItem, RibbonTabsDirective as ERibbonTabs, RibbonTabDirective as ERibbonTab, RibbonContextualTabDirective as ERibbonContextualTab, RibbonContextualTabsDirective as ERibbonContextualTabs } from "@syncfusion/ej2-vue-ribbon";

provide('ribbon', [RibbonContextualTab]);

const largeSize = RibbonItemSize.Large
const cutButton = { iconCss: "e-icons e-cut", content: "Cut" };
const copyButton = { iconCss: "e-icons e-copy", content: "Copy" };
const formatButton = { iconCss: "e-icons e-format-painter", content: "Format Painter" };
const text1 = { iconCss: "e-icons e-text-header", content: "Text Header" };
const text2 = { iconCss: "e-icons e-text-wrap", content: "Text Wrap" };
const text3 = { iconCss: "e-icons e-text-annotation", content: "Text Annotation" };
const accessibility = { iconCss: "e-icons e-text-alternative", content: "Alt Text" };
const forward = { iconCss: "e-icons e-bring-forward", content: "Bring Forward" };
const backward = { iconCss: "e-icons e-send-backward", content: "Send Backward" };
const selection = { iconCss: "e-icons e-show-hide-panel", content: "Selection Pane" };

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