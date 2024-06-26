
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
      <e-ribbon-contextual-tab visible=true>
        <e-ribbon-tabs>
          <e-ribbon-tab header="Shape Format" id="ShapeFormat">
            <e-ribbon-groups>
              <e-ribbon-group header="Text decoration" showLauncherIcon=true>
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="Button" :buttonSettings="text1">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="text2">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="text3">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
              </e-ribbon-group>
              <e-ribbon-group header="Accessibility">
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="Button" :allowedSizes="largeSize" :buttonSettings="accessibility">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
              </e-ribbon-group>
              <e-ribbon-group header="Arrange" showLauncherIcon=true>
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="Button" :buttonSettings="forward">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="backward">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="selection">
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
    text1:  { iconCss: "e-icons e-text-header", content: "Text Header" },
    text2:  { iconCss: "e-icons e-text-wrap", content: "Text Wrap" },
    text3:  { iconCss: "e-icons e-text-annotation", content: "Text Annotation" },
    accessibility:  { iconCss: "e-icons e-text-alternative", content: "Alt Text" },
    forward:  { iconCss: "e-icons e-bring-forward", content: "Bring Forward" },
    backward:  { iconCss: "e-icons e-send-backward", content: "Send Backward" },
    selection:  { iconCss: "e-icons e-show-hide-panel", content: "Selection Pane" }
  };
}
});