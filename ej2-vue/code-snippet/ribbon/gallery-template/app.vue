<template>
    <ejs-ribbon id="ribbon" >
      <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
          <e-ribbon-groups>
            <e-ribbon-group header="Clipboard" groupIconCss='e-icons e-paste'>
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
                    <e-ribbon-item type="Button" :buttonSettings="formatPainter">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
            <e-ribbon-group header="Table Styles">
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="Gallery" :gallerySettings="gallerySettings">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
            <e-ribbon-group header="Insert">
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="Button" :buttonSettings="aboveButton">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="belowButton">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="Button" :buttonSettings="leftButton">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="rightButton">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
          </e-ribbon-groups>
        </e-ribbon-tab>
      </e-ribbon-tabs>
      <template v-slot:galleryTemplate="{ data }">
        <div :class="'gallery-template' + data.items.cssClass">
            <table class="table">
                <tbody>
                    <tr class="row_one">
                        <td class="tableContent">—</td>
                        <td class="tableContent">—</td>
                        <td class="tableContent">—</td>
                        <td class="tableContent">—</td>
                        <td class="tableContent">—</td>
                    </tr>
                    <tr class="row_two">
                        <td class="tableContent">—</td>
                        <td class="tableContent">—</td>
                        <td class="tableContent">—</td>
                        <td class="tableContent">—</td>
                        <td class="tableContent">—</td>
                    </tr>
                    <tr class="row_three">
                        <td class="tableContent">—</td>
                        <td class="tableContent">—</td>
                        <td class="tableContent">—</td>
                        <td class="tableContent">—</td>
                        <td class="tableContent">—</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </template>
    </ejs-ribbon>
  </template>
  
  <script>
    import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionDirective, RibbonCollectionsDirective, RibbonItemsDirective, RibbonItemDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonGallery } from "@syncfusion/ej2-vue-ribbon";
    
    export default {
  
      provide: {
        ribbon: [RibbonGallery]
      },
      components: {
          "ejs-ribbon": RibbonComponent,
          "e-ribbon-tabs": RibbonTabsDirective,
          "e-ribbon-tab": RibbonTabDirective,
          "e-ribbon-collections": RibbonCollectionsDirective,
          "e-ribbon-collection": RibbonCollectionDirective,
          "e-ribbon-items": RibbonItemsDirective,
          "e-ribbon-item": RibbonItemDirective,
          "e-ribbon-groups": RibbonGroupsDirective,
          "e-ribbon-group": RibbonGroupDirective
      },
      data: function () {
        return {
          pasteButton: { iconCss: 'e-icons e-paste', items: [{ text: 'Keep Source Format' }, { text: 'Merge Format' }, { text: 'Keep Text Only' }], content: 'Paste' },
          cutButton: { iconCss: "e-icons e-cut", content: "Cut" },
          copyButton: { iconCss: "e-icons e-copy", content: "Copy" },
          formatPainter: { iconCss: "e-icons e-format-painter", content: "Format Painter" },
          aboveButton: { content: "Above", iconCss: "e-icons e-insert-above" },
          belowButton: { content: "Below", iconCss: "e-icons e-insert-below" },
          leftButton: { content: "Left", iconCss: "e-icons e-insert-left" },
          rightButton: { content: "Right", iconCss: "e-icons e-insert-right" },
          gallerySettings: {
            template: 'galleryTemplate',
            popupTemplate: 'galleryTemplate',
            itemCount: 7,
            groups: [{
                header: 'Plain Tables',
                items: [
                  {
                    cssClass: "plainTables_item_1"
                  },
                  {
                    cssClass: "plainTables_item_2"
                  },
                  {
                    cssClass: "plainTables_item_3"
                  },
                  {
                    cssClass: "plainTables_item_4"
                  },
                  {
                    cssClass: "plainTables_item_5"
                  },
                  {
                    cssClass: "plainTables_item_6"
                  },
                  {
                    cssClass: "plainTables_item_7"
                  }
                ]
              }, {
                header: 'List Tables',
                items: [
                  {
                    cssClass: "listTables_item_1"
                  },
                  {
                    cssClass: "listTables_item_2"
                  },
                  {
                    cssClass: "listTables_item_3"
                  },
                  {
                    cssClass: "listTables_item_4"
                  },
                  {
                    cssClass: "listTables_item_5"
                  },
                  {
                    cssClass: "listTables_item_6"
                  },
                  {
                    cssClass: "listTables_item_7"
                  }
                ]
              }]
            }
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
  
  .table {
      border-collapse: collapse; 
  }
  
  /* plain table styles */
  
  .plainTables_item_1 .tableContent {
      border: 1px solid black;
  }
  
  .plainTables_item_2 .tableContent,
  .plainTables_item_3 .tableContent {
      border: 1px solid #c1c1c1;
  }
  
  .plainTables_item_4 .row_one .tableContent {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
  }
  .plainTables_item_4 .row_three .tableContent {
      border-bottom: 1px solid black;
  }
  
  .plainTables_item_5 .row_one .tableContent {
      border-bottom: 1px solid black;
  }
  
  .plainTables_item_5 .row_one .tableContent,
  .plainTables_item_7 .row_one .tableContent {
      border-bottom: 1px solid black;
  }
  .plainTables_item_5 .row_two .tableContent:first-child,
  .plainTables_item_5 .row_three .tableContent:first-child,
  .plainTables_item_7 .row_two .tableContent:first-child,
  .plainTables_item_7 .row_three .tableContent:first-child{
      border-right: 1px solid black;
  }
  
  /* list table styles */
  
  .listTables_item_1 .row_one .tableContent {
      border-bottom: 1px solid #83caeb;
  }
  
  .listTables_item_2 .row_one .tableContent,
  .listTables_item_2 .row_two .tableContent ,
  .listTables_item_2 .row_three .tableContent  {
      border-bottom: 1px solid #83caeb;
      border-top: 1px solid #83caeb;
  }
  
  .listTables_item_3 .row_one .tableContent {
      border-top: 1px solid #156082;
      border-bottom: 1px solid #156082;
      background-color: #156082;
      color: white;
  }
  .listTables_item_3 .row_three .tableContent {
      border-bottom: 1px solid #156082;
  }
  
  .listTables_item_5 .row_one .tableContent,
  .listTables_item_7 .row_one .tableContent {
      border-bottom: 1px solid white;
  }
  .listTables_item_5 .row_two .tableContent:first-child,
  .listTables_item_5 .row_three .tableContent:first-child,
  .listTables_item_7 .row_two .tableContent:first-child,
  .listTables_item_7 .row_three .tableContent:first-child{
      border-right: 1px solid white;
  }
  
  .listTables_item_5 .tableContent {
      background-color:  #156082;
      color: white;
  }
  
  .listTables_item_7 .row_one .tableContent {
      border-bottom: 1px solid black;
  }
  .listTables_item_7 .row_two .tableContent:first-child,
  .listTables_item_7 .row_three .tableContent:first-child{
      border-right: 1px solid black;
  }
  
  .listTables_item_4 .row_one .tableContent {
      border-top: 1px solid #156082;
      border-bottom: 1px solid #156082;
  }
  .listTables_item_4 .row_three .tableContent {
      border-bottom: 1px solid #156082;
  }
  
  </style>
  