<template>
  <ejs-ribbon ref="ribbonKeyTip" :backStageMenu="backstageSettings" :enableKeyTips="true" :created="ribbonCreated">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :allowedSizes="largeSize" :splitButtonSettings="pasteSettigs">
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
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script>

import { RibbonKeyTip, RibbonItemSize, RibbonBackstage } from "@syncfusion/ej2-vue-ribbon";
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

  provide: {
    ribbon: [RibbonKeyTip, RibbonBackstage]
  },
  data: function () {
    return {
      largeSize: RibbonItemSize.Large,
      backstageSettings: {
        keyTip: 'F',
        visible: true,
        items: [
          { id: 'home', keyTip: 'H', text: 'Home', iconCss: 'e-icons e-home', content: this.homeContentTemplate() },
          { id: 'new', keyTip: 'N', text: 'New', iconCss: 'e-icons e-file-new', content: this.newContentTemplate() },
          { id: 'open', keyTip: 'O', text: 'Open', iconCss: 'e-icons e-folder-open', content: this.openContentTemplate() }
        ],
        backButton: {
          text: 'Close',
        }
      },
      cutButton: { iconCss: "e-icons e-cut", content: "Cut" },
      copyButton: { iconCss: "e-icons e-copy", content: "Copy" },
      pasteSettigs: {
        iconCss: "e-icons e-paste", content: "Paste",
        items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
      },
    };
  },
  methods: {
    homeContentTemplate() {
      return `
        <div id='home-wrapper' style="padding: 20px;">
          <div id='new-section' class='new-wrapper'>
              <div class='section-title'> New </div>
              <div class='category_container'>
                  <div class='doc_category_image'></div> 
                  <span class='doc_category_text'> New document </span>
              </div>
          </div>
          <div id='block-wrapper'><div class='section-title'> Recent </div>
              <div class="section-content" style="padding: 12px 0px; cursor: pointer">
                  <table>
                      <tbody>
                          <tr>
                              <td> <span class="doc_icon e-icons e-open-link"></span> </td>
                              <td> 
                                  <span style="display: block; font-size: 14px"> Ribbon.docx </span>
                                  <span style="font-size: 12px"> EJ2 >> Components >> Navigations >> Ribbon >> default </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
        `;
    },
    newContentTemplate() {
      return `
        <div id='new-content' style="padding: 20px;">
          <div id='new-section' class='new-wrapper'>
              <div class='section-title'> New </div>
              <div class='category_container'>
                  <div class='doc_category_image'></div> 
                  <span class='doc_category_text'> New document </span>
              </div>
          </div>
      </div>
        `;
    },
    openContentTemplate() {
      return `
        <div style="padding: 20px;">
          <div class="section-content" style="padding: 12px 0px; cursor: pointer">
              <table>
                  <tbody>
                      <tr>
                          <td> <span class="doc_icon e-icons e-open-link"></span> </td>
                          <td> 
                              <span style="display: block; font-size: 14px"> Open in Desktop App </span>
                              <span style="font-size: 12px"> Use the full functionality of Ribbon </span>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="section-content" style="padding: 12px 0px cursor: pointer">
              <table>
                  <tbody>
                      <tr>
                          <td> <span class="doc_icon e-icons e-protect-sheet"></span> </td>
                          <td> 
                              <span style="display: block; font-size: 14px"> Protect Document </span>
                              <span style="font-size: 12px">To prevent accidental changes,
                                  this document has been set to open as view-only.</span>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
        `;
    },
    ribbonCreated: function () {
      this.$refs.ribbonKeyTip.ej2Instances.ribbonKeyTipModule.showKeyTips('F');
    }
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

.e-ribbon-backstage-content {
  width: 550px;
  height: 350px;
}

.section-title {
  font-size: 22px;
}

.new-docs {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.category_container {
  width: 150px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
}

.doc_category_image {
  width: 80px;
  height: 100px;
  background-color: #fff;
  border: 1px solid rgb(125, 124, 124);
  text-align: center;
  overflow: hidden;
  margin: 0px auto 10px;
}

.doc_category_text {
  font-size: 16px;
}

.section-content {
  padding: 12px 0px;
  cursor: pointer;
}

.doc_icon {
  font-size: 16px;
  padding: 0px 10px;
}

.category_container:hover,
.section-content:hover {
  background-color: #dfdfdf;
  border-radius: 5px;
  transition: all 0.3s;
}
</style>