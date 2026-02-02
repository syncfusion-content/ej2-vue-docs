<template>
  <ejs-ribbon :fileMenu="fileSettings">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
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
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script>
  
  import { RibbonComponent, RibbonGroupDirective, RibbonGroupsDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonItemsDirective, RibbonItemDirective, RibbonTabsDirective, RibbonTabDirective, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
name: "App",
components: {
"ejs-ribbon":RibbonComponent,
"e-ribbon-tabs":RibbonTabsDirective,
"e-ribbon-tab":RibbonTabDirective,
"e-ribbon-groups":RibbonGroupsDirective,
"e-ribbon-group":RibbonGroupDirective,
"e-ribbon-collections":RibbonCollectionsDirective,
"e-ribbon-collection":RibbonCollectionDirective,
"e-ribbon-items":RibbonItemsDirective,
"e-ribbon-item":RibbonItemDirective
},
  provide: {
    ribbon: [RibbonFileMenu]
  },
  data: function () {
    return {
      fileSettings: {
        showItemOnClick: true,
        visible: true,
        menuItems: [
          { text: "New", iconCss: "e-icons e-file-new", id: "new" },
          { text: "Open", iconCss: "e-icons e-folder-open", id: "open" },
          { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
          {
            text: 'Save as',
            iconCss:'e-icons e-save',
            id: 'save',
            items: [
                { text: 'Microsoft Word (.docx)' },
                { text: 'Microsoft Word 97-2003(.doc)' },
                { text: 'Download as PDF' }
            ]
          }
        ]
      },
      cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
    };
  }
  };
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