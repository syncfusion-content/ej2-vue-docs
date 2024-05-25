<template>
  <div>
    <button class="e-btn" id="show-contextual" @click="showContextualTab"> Show tab </button>
    <button class="e-btn" id="hide-contextual" @click="hideContextualTab"> Hide tab </button>
    <ejs-ribbon ref="ribbonContextualTab">
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
        <e-ribbon-contextual-tab>
          <e-ribbon-tabs>
            <e-ribbon-tab header="Arrange & View" id="ArrangeView">
              <e-ribbon-groups>
                <e-ribbon-group header="Arrange" showLauncherIcon=true>
                <e-ribbon-collections>
                  <e-ribbon-collection>
                    <e-ribbon-items>
                      <e-ribbon-item type="Button" :buttonSettings="forward">
                      </e-ribbon-item>
                      <e-ribbon-item type="Button" :buttonSettings="backward">
                      </e-ribbon-item>
                      <e-ribbon-item type="Button" :buttonSettings="selection ">
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
  </div>
</template>

<script setup>
import { provide } from "vue";
 import {ref} from 'vue'; 
  import { RibbonContextualTab, RibbonComponent as EjsRibbon, RibbonGroupDirective as ERibbonGroup, RibbonGroupsDirective as ERibbonGroups, RibbonCollectionsDirective as ERibbonCollections, RibbonCollectionDirective as ERibbonCollection, RibbonItemsDirective as ERibbonItems, RibbonItemDirective as ERibbonItem, RibbonTabsDirective as ERibbonTabs, RibbonTabDirective as ERibbonTab, RibbonContextualTabDirective as ERibbonContextualTab, RibbonContextualTabsDirective as ERibbonContextualTabs} from "@syncfusion/ej2-vue-ribbon";
  
    provide('ribbon',  [RibbonContextualTab]);

      const ribbonContextualTab=ref(null);
      const cutButton = { iconCss: "e-icons e-cut", content: "Cut" };
      const copyButton = { iconCss: "e-icons e-copy", content: "Copy" };
      const formatButton = { iconCss: "e-icons e-format-painter", content: "Format Painter" };
      const forward = { iconCss: "e-icons e-bring-forward", content: "Bring Forward" };
      const backward = { iconCss: "e-icons e-send-backward", content: "Send Backward" };
      const selection = { iconCss: "e-icons e-show-hide-panel", content: "Selection Pane" };


     const showContextualTab = () => {
        ribbonContextualTab.value.showTab('ArrangeView', true);
      }
     const hideContextualTab = () => {
        ribbonContextualTab.value.hideTab('ArrangeView', true);
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