<template>
  <ejs-ribbon id="ribbon">
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
            <e-ribbon-groups>
                <e-ribbon-group header="Clipboard" groupIconCss="e-icons e-paste">
                    <e-ribbon-collections>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="SplitButton" :splitButtonSettings="pasteButton">
                                </e-ribbon-item>
                            </e-ribbon-items>
                        </e-ribbon-collection>
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
                <e-ribbon-group header="Font" :isCollapsible=false>
                    <e-ribbon-collections>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="ComboBox" :comboBoxSettings="fontStyleSettings">
                                </e-ribbon-item>
                                <e-ribbon-item type="ComboBox" :comboBoxSettings="fontSizeSettings">
                                </e-ribbon-item>
                            </e-ribbon-items>
                        </e-ribbon-collection>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="Button" :buttonSettings="boldButton">
                                </e-ribbon-item>
                                <e-ribbon-item type="Button" :buttonSettings="italicButton">
                                </e-ribbon-item>
                                <e-ribbon-item type="Button" :buttonSettings="underlineButton">
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
        const cutButton = { iconCss: "e-icons e-cut", content: "Cut" }
        const copyButton = { iconCss: "e-icons e-copy", content: "Copy" }
        const formatButton = { iconCss: "e-icons e-format-painter", content: "Format Painter"}
        const boldButton = { iconCss: "e-icons e-bold", content: "Bold", isToggle: true }
        const italicButton = { iconCss: "e-icons e-italic", content: "Italic", isToggle: true }
        const underlineButton = { iconCss: "e-icons e-underline", content: "Underline", isToggle: true }
        const fontStyleSettings = { 
          dataSource: ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"],
          index: 3 
        }
        const fontSizeSettings = { 
          dataSource: ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72", "96"], 
          index: 3 
        }

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
</style>