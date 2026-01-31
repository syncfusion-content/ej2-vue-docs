<template>
  <ejs-ribbon id="ribbon">
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
            <e-ribbon-groups>
                <e-ribbon-group header="Clipboard">
                    <e-ribbon-collections>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                            <e-ribbon-item type="SplitButton" :splitButtonSettings="pasteButton" :ribbonTooltipSettings="pasteOptions">
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
  


       const pasteButton =  {
        iconCss: "e-icons e-paste", 
        content: "Paste", 
        items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
        };
       const cutButton = { iconCss: "e-icons e-cut", content: "Cut" };
       const copyButton = { iconCss: "e-icons e-copy", content: "Copy" };
       const formatButton = { iconCss: "e-icons e-format-painter", content: "Format Painter" };
        
       const cutOptions = { title: "Cut", content: "Places the selected text or object on the clipboard so that you can paste it somewhere else.", cssClass: "custom-tooltip" };
       const copyOptions = { title: "Copy", content: "Copies the chosen text or object to the clipboard so that you can reuse it elsewhere.", cssClass: "custom-tooltip" };
       const pasteOptions = { title: "Paste", content: "Insert the clipboard content where the cursor is currently placed.", cssClass: "custom-tooltip" };
       const formatOptions = { title: "Format Painter", content: "Copies the formatting style of a selected text or object and applies it to other content within the document.", cssClass: "custom-tooltip" };


</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";

  :root {
    --borderColor: rgb(72, 72, 72);
    --black: #000000;
  }  
  
  /* To customize the appearance of the tooltip */
  .custom-tooltip.e-ribbon-tooltip.e-popup {
    border: 2px solid var(--borderColor);
    border-radius: 5px;
    background: var(--black);
  }
  
  /* To customize the arrow of the tooltip */
  .custom-tooltip.e-ribbon-tooltip .e-arrow-tip .e-arrow-tip-inner.e-tip-top,
  .custom-tooltip.e-ribbon-tooltip .e-arrow-tip .e-arrow-tip-inner.e-tip-bottom {
    color: var(--black);;
  }
  .custom-tooltip.e-ribbon-tooltip .e-arrow-tip-outer.e-tip-top {
    border-bottom: 8px solid var(--borderColor); 
  }
  .custom-tooltip.e-ribbon-tooltip .e-arrow-tip-outer.e-tip-bottom {
    border-top: 8px solid var(--borderColor);; 
  }
  
  /* To change the size of the tooltip title */
  .custom-tooltip.e-ribbon-tooltip .e-tip-content .e-ribbon-tooltip-title {
    font-size: 14px;
  }
  
  /* To change the size of the tooltip content */
  .custom-tooltip.e-ribbon-tooltip .e-tip-content .e-ribbon-text-container .e-ribbon-tooltip-content {
    font-size: 11px;
  }
</style>