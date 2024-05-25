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
                <e-ribbon-group header="Font" orientation=Row groupIconCss="e-icons e-bold" enableGroupOverflow=true>
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
                <e-ribbon-group header="Editing" groupIconCss="e-icons e-edit">
                  <e-ribbon-collections>
                    <e-ribbon-collection>
                      <e-ribbon-items>
                        <e-ribbon-item type="SplitButton" :splitButtonSettings="searchOptions" >
                        </e-ribbon-item>
                        <e-ribbon-item type="Button" :buttonSettings="replaceButton">
                        </e-ribbon-item>
                        <e-ribbon-item type="SplitButton" :splitButtonSettings="selectOptions" >
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

<script>
  
  import { RibbonComponent, RibbonGroupDirective, RibbonGroupsDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonItemsDirective, RibbonItemDirective, RibbonTabsDirective, RibbonTabDirective } from "@syncfusion/ej2-vue-ribbon";


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
    "e-ribbon-item": RibbonItemDirective
},

    data: function () {
      return {
        pasteButton:  {
          iconCss: "e-icons e-paste", 
          content: "Paste", 
          items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }] 
        },
        cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
        copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
        formatButton:  { iconCss: "e-icons e-format-painter", content: "Format Painter"},
        boldButton:  { iconCss: "e-icons e-bold", content: "Bold", isToggle: true },
        italicButton:  { iconCss: "e-icons e-italic", content: "Italic", isToggle: true },
        underlineButton:  { iconCss: "e-icons e-underline", content: "Underline", isToggle: true },
        fontStyleSettings:  { 
          dataSource: ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"],
          index: 3 
        },
        fontSizeSettings:  { 
          dataSource: ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72", "96"], 
          index: 3 
        },
        searchOptions:{
        iconCss: 'e-icons e-search', content: 'Find',
        items: [
          { text: 'Find', iconCss: 'e-icons e-search' },
          { text: 'Advanced find', iconCss: 'e-icons e-search' },
          { text: 'Go to', iconCss: 'e-icons e-arrow-right' }]
        },
        replaceButton: { iconCss: "e-icons e-replace", content: "Replace" },
        selectOptions: {
          iconCss: "e-icons e-mouse-pointer", content: "Select",
          items: [{ text: "Select All" }, { text: "Select Objects" }],
        },
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