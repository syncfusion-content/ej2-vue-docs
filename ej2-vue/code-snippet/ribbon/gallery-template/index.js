import Vue from 'vue';
import { RibbonPlugin, RibbonGallery } from "@syncfusion/ej2-vue-ribbon";

Vue.use(RibbonPlugin);

new Vue({
  el: '#app',
  template: `
  <template>
    <ejs-ribbon id="ribbon" >
      <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
          <e-ribbon-groups>
            <e-ribbon-group header="Clipboard">
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
  `,
  provide: {
    ribbon: [RibbonGallery]
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
});