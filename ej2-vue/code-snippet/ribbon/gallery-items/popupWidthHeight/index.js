
import Vue from 'vue';
import { RibbonPlugin, RibbonGallery } from "@syncfusion/ej2-vue-ribbon";

Vue.use(RibbonPlugin);

new Vue({
  el: '#app',
  template: `
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
`,
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
      popupHeight: '180',
      popupWidth: '350',
      groups: [{
        header: 'Styles',
        items: [{
          content: 'Normal',
        }, {
          content: 'No Spacing'
        }, {
          content: 'Heading 1'
        }, {
          content: 'Heading 2'
        }, {
          content: 'Title'
        }, {
          content: 'Subtitle'
        }]
      }]
    }
  };
}
});