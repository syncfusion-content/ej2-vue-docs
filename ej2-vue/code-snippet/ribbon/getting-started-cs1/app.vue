<template>
  <ejs-ribbon :fileMenu="fileSettings">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard" groupIconCss="e-icons e-paste" :showLauncherIcon="true" >
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :allowedSizes="largeSize" :splitButtonSettings="pasteSettigs" >
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
          <e-ribbon-group header="Font" orientation="Row" :enableGroupOverflow="true" :isCollapsible="false" groupIconCss="e-icons e-bold" cssClass="font-group" >
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ComboBox" :comboBoxSettings="styleOptions" >
                  </e-ribbon-item>
                  <e-ribbon-item type="ComboBox" :comboBoxSettings="sizeOptions">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ColorPicker" displayOptions="Simplified" :allowedSizes="smallSize" :colorPickerSettings="colorPicker" >
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :allowedSizes="smallSize" :buttonSettings="boldButton" >
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :allowedSizes="smallSize" :buttonSettings="italicButton">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :allowedSizes="smallSize" :buttonSettings="underlineButton" >
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :allowedSizes="smallSize" :buttonSettings="strikethroughButton">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :allowedSizes="smallSize" :buttonSettings="caseButton" >
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
          <e-ribbon-group header="Editor" :isCollapsible="false" groupIconCss="e-icons e-edit" >
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :allowedSizes="largeSize" :buttonSettings="editButton">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
      <e-ribbon-tab header="Insert">
        <e-ribbon-groups>
          <e-ribbon-group header="Tables" :isCollapsible=false>
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="DropDown" :allowedSizes="largeSize" :dropDownSettings="tableSettings">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
          <e-ribbon-group header="Illustrations" id="illustration" orientation="Row" :enableGroupOverflow=true groupIconCss="e-icons e-image">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="chartSettings">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
          <e-ribbon-group header="Media" :isCollapsible=false>
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Template" :itemTemplate="'ribbonTemplate'">
                    <template v-slot:ribbonTemplate = "{data}">
                      <span v-bind:class="'ribbonTemplate ' + data.activeSize"><span class="e-icons e-video"></span><span class="text">Video</span></span>
                    </template>
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
      <e-ribbon-tab header="View">
        <e-ribbon-groups>
          <e-ribbon-group header="Views" orientation="Row" groupIconCss="e-icons e-print">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="printSettings">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :buttonSettings="layoutSettings">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
          <e-ribbon-group header="show" :isCollapsible=false>
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="CheckBox" :checkBoxSettings="rulerSettings">
                  </e-ribbon-item>
                  <e-ribbon-item type="CheckBox" :checkBoxSettings="gridSettings">
                  </e-ribbon-item>
                  <e-ribbon-item type="CheckBox" :checkBoxSettings="navigationSettings">
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
  import { RibbonFileMenu, RibbonItemSize, RibbonComponent, RibbonTabDirective, RibbonTabsDirective, RibbonGroupDirective, RibbonGroupsDirective, RibbonCollectionDirective, RibbonCollectionsDirective, RibbonItemDirective, RibbonItemsDirective, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  
  export default {
name: "App",
    components: {
      'ejs-ribbon': RibbonComponent,
      'e-ribbon-tab': RibbonTabDirective,
      'e-ribbon-tabs': RibbonTabsDirective,
      'e-ribbon-group': RibbonGroupDirective,
      'e-ribbon-groups': RibbonGroupsDirective,
      'e-ribbon-collection': RibbonCollectionDirective,
      'e-ribbon-collections': RibbonCollectionsDirective,
      'e-ribbon-item': RibbonItemDirective,
      'e-ribbon-items': RibbonItemsDirective
    },
    provide: {
      ribbon: [RibbonFileMenu, RibbonColorPicker]
    },
    data: function () {
      return {
        largeSize: RibbonItemSize.Large,
        smallSize: RibbonItemSize.Small,
        fileSettings: {
          visible: true,
          menuItems: [
            { text: "New", iconCss: "e-icons e-file-new", id: "new" },
            { text: "Open", iconCss: "e-icons e-folder-open", id: "open" },
            { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
            { text: "Save as", iconCss: "e-icons e-save", id: "save" }
          ]
        },
        pasteSettigs:{ 
          iconCss: "e-icons e-paste", content: "Paste",
          items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
        },
        cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
        copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
        formatButton:  { iconCss: "e-icons e-format-painter", content: "Format Painter" },
        styleOptions: {
          dataSource: ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings" ],
          index: 3,
          width: "150px",
          allowFiltering: true
        },
        sizeOptions: {
          dataSource: ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72", "96" ],
          index: 4,
          width: "65px"
        },
        boldButton:  { iconCss: "e-icons e-bold", content: "Bold", isToggle: "true" },
        italicButton:  { iconCss: "e-icons e-italic", content: "Italic", isToggle: "true" },
        underlineButton:  { iconCss: "e-icons e-underline", content: "Underline", isToggle: "true" },
        strikethroughButton:  { iconCss: "e-icons e-strikethrough", content: "Strikethrough", isToggle: "true" },
        caseButton:  { iconCss: "e-icons e-change-case", content: "Change Case", isToggle: "true" },
        colorPicker: {value: "#123456" },
        editButton: { iconCss: "e-icons e-edit", content: "Editor" },
        tableSettings:{ 
          iconCss: "e-icons e-table", content: "Table", isDropDownButton: true,
          items: [{ text: "Insert Table" }, { text: "Draw Table" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }]
        },
        chartSettings: { iconCss: "e-icons e-chart", content: "Chart" },
        printSettings: { iconCss: "e-icons e-print-layout", content: "Print Layout" },
        layoutSettings: { iconCss: "e-icons e-web-layout", content: "Web Layout" },
        rulerSettings:  { label: "Ruler", checked: false },
        gridSettings:  { label: "Gridlines", checked: false },
        navigationSettings:  { label: "Navigation Pane", checked: true },
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
  
  .ribbonTemplate {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .ribbonTemplate.Large {
    flex-direction: column;
  }

  .ribbonTemplate.Large .e-icons {
    font-size: 35px;
  }

  .ribbonTemplate.Medium .e-icons,
  .ribbonTemplate.Small .e-icons{
    font-size: 20px;
    margin: 15px 5px;
  }

  .ribbonTemplate.Small .text {
    display:none;
  }

  .font-group .e-ribbon-group-content {
    justify-content: center;
  }

</style>