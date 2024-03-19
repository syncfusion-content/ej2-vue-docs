<template>
  <ejs-ribbon ref="ribbonKeyTip" :enableKeyTips="true" :created="ribbonCreated">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home" keyTip="H">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard" groupIconCss="e-icons e-paste" keyTip="CD">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :allowedSizes="largeSize" keyTip="PA" :ribbonTooltipSettings="pasteOptions" :splitButtonSettings="pasteSettigs">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" keyTip="CU" :buttonSettings="cutButton">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" keyTip="CO" :buttonSettings="copyButton">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" keyTip="CS" :buttonSettings="formatButton">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
          <e-ribbon-group header="Font" orientation="Row" :enableGroupOverflow="true" keyTip="FB" groupIconCss="e-icons e-bold" cssClass="font-group" >
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ComboBox" keyTip="01" :comboBoxSettings="styleOptions" >
                  </e-ribbon-item>
                  <e-ribbon-item type="ComboBox" keyTip="02" :comboBoxSettings="sizeOptions">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="GroupButton" keyTip="GB" :groupButtonSettings="groupButtonSingle"></e-ribbon-item>
                  <e-ribbon-item type="ColorPicker" keyTip="CP" :colorPickerSettings="colorPicker" >
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
          <e-ribbon-group header="Gallery" groupIconCss="e-icons e-paste" :showLauncherIcon=true>
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Gallery" keyTip="GY" :gallerySettings="gallerySettings">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
          <e-ribbon-group header="Tables" groupIconCss="e-icons e-table">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="DropDown" keyTip="T" :allowedSizes="largeSize" :dropDownSettings="tableSettings">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
          <e-ribbon-group header="show" groupIconCss="e-icons e-copy">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="CheckBox" keyTip="R1" :checkBoxSettings="rulerSettings">
                  </e-ribbon-item>
                  <e-ribbon-item type="CheckBox" keyTip="R2" :checkBoxSettings="gridSettings">
                  </e-ribbon-item>
                  <e-ribbon-item type="CheckBox" keyTip="R3" :checkBoxSettings="navigationSettings">
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
import Vue from "vue";
import { RibbonPlugin, RibbonKeyTip, RibbonItemSize, RibbonGallery, RibbonGroupButtonSelection, RibbonColorPicker, } from "@syncfusion/ej2-vue-ribbon";
Vue.use(RibbonPlugin);

export default {
  provide: {
    ribbon: [RibbonKeyTip, RibbonGallery, RibbonColorPicker]
  },
  data: function () {
    return {
      largeSize: RibbonItemSize.Large,
      
      cutButton: { iconCss: "e-icons e-cut", content: "Cut" },
      copyButton: { iconCss: "e-icons e-copy", content: "Copy" },
      pasteSettigs: {
        iconCss: "e-icons e-paste", content: "Paste",
        items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
      },
      pasteOptions: { title: "Paste", cssClass: 'custom-tooltip', content: "Paste content here.</br> Add content on the clipboard to your document.", iconCss: "e-icons e-paste" },
      formatButton: { iconCss: "e-icons e-format-painter", content: "Format Painter" },
      styleOptions: {
        dataSource: ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"],
        index: 2,
        width: '150px',
        allowFiltering: true
      },
      sizeOptions: {
        dataSource: ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72", "96"],
        index: 4,
        width: "65px"
      },
      groupButtonSingle: {
        selection: RibbonGroupButtonSelection.Single,
        items: [
          {iconCss: 'e-icons e-bold', keyTip: '1', selected: true },
          {iconCss: 'e-icons e-italic', keyTip: '2' },
          {iconCss: 'e-icons e-underline', keyTip: '3' },
          {iconCss: 'e-icons e-strikethrough', keyTip: '4' },
          {iconCss: 'e-icons e-change-case', keyTip: '5' }
        ]
      },
      colorPicker: { value: "#123456" },
      gallerySettings: {
        itemCount: 3,
        groups: [{
          itemWidth: '100',
          header: 'Styles',
          items: [{
              content: 'Normal'
            },{
              content: 'No Spacing'
            }, {
              content: 'Heading 1'
            }, {
              content: 'Heading 2'
            }, {
              content: 'Heading 3'
            }, {
              content: 'Heading 4'
            }, {
              content: 'Heading 5'
            }]
        }]
      },
      tableSettings:{ 
        iconCss: 'e-icons e-table', content: 'Table',
        items: [{ text: 'Insert Table' }, { text: 'Draw Table' }, { text: 'Convert Table' }, { text: 'Excel SpreadSheet' }]
      },
      rulerSettings:  { label: "Ruler", checked: false },
      gridSettings:  { label: "Gridlines", checked: false },
      navigationSettings:  { label: "Navigation Pane", checked: true }
    };
  },
  methods: {
    ribbonCreated: function () {
      this.$refs.ribbonKeyTip.ej2Instances.ribbonKeyTipModule.showKeyTips('H');
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

.custom-tooltip.e-paste{
  font-size: 50px;
}
</style>