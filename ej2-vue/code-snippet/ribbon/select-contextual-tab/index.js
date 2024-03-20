
import Vue from 'vue';
import { RibbonItemSize, RibbonPlugin, RibbonContextualTab } from "@syncfusion/ej2-vue-ribbon";

Vue.use(RibbonPlugin);

new Vue({
  el: '#app',
  template: `
  <template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard" showLauncherIcon=true groupIconCss="e-icons e-paste" id="clipboardGroup">
            <e-ribbon-collections>
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
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
    <e-ribbon-contextual-tabs>
      <e-ribbon-contextual-tab visible=true isSelected=true>
        <e-ribbon-tabs>
          <e-ribbon-tab header="Styles">
            <e-ribbon-groups>
              <e-ribbon-group header="Style" showLauncherIcon=true>
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="Button" :buttonSettings="style">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="textbox">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="paint">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
              </e-ribbon-group>
            </e-ribbon-groups>
          </e-ribbon-tab>
        </e-ribbon-tabs>
      </e-ribbon-contextual-tab>
    </e-ribbon-contextual-tabs>
  </ejs-ribbon>
</template>
`,
provide: {
  ribbon: [RibbonContextualTab]
},
data: function () {
  return {
    largeSize: RibbonItemSize.Large,
    cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
    copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
    formatButton:  { iconCss: "e-icons e-format-painter", content: "Format Painter" },
    style:  { iconCss: "e-icons e-style", content: "Style" },
    textbox:  { iconCss: "e-icons e-font-name", content: "Text Box" },
    paint:  { iconCss: "e-icons e-paint-bucket", content: "Paint" }
  };
}
});