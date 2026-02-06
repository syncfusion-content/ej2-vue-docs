<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard" groupIconCss="e-icons e-paste">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :splitButtonSettings="pasteSettigs">
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
          <e-ribbon-group header="Gallery">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Gallery" :gallerySettings="gallerySettings">
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

import { RibbonComponent, RibbonGroupDirective, RibbonGroupsDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonItemsDirective, RibbonItemDirective, RibbonTabsDirective, RibbonTabDirective, RibbonGallery } from "@syncfusion/ej2-vue-ribbon";

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
  provide: {
    ribbon: [RibbonGallery]
  },
  data: function () {
    return {
      cutButton: { iconCss: "e-icons e-cut", content: "Cut" },
      copyButton: { iconCss: "e-icons e-copy", content: "Copy" },
      formatButton: { iconCss: "e-icons e-format-painter", content: "Format Painter" },
      pasteSettigs: {
        iconCss: "e-icons e-paste", content: "Paste",
        items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
      },
      gallerySettings: {
        groups: [{
          header: 'Styles',
          items: [{
            content: 'Normal'
          }, {
            content: 'No Spacing'
          }, {
            content: 'Heading 1'
          }, {
            content: 'Heading 2'
          }]
        }],
        popupOpen: function () {
          //Your required action here
        }
      }
    };
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material3.css";
</style>