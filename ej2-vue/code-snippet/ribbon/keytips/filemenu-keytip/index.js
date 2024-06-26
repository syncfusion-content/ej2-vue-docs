
import Vue from 'vue';
import { RibbonPlugin, RibbonKeyTip, RibbonItemSize, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";

Vue.use(RibbonPlugin);

new Vue({
  el: '#app',
  template: `
  <template>
  <ejs-ribbon ref="ribbonKeyTip" :fileMenu="fileSettings" :enableKeyTips="true" :created="ribbonCreated">
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
</template>
`,
provide: {
  ribbon: [RibbonFileMenu, RibbonKeyTip]
},
data: function () {
  return {
    largeSize: RibbonItemSize.Large,
    fileSettings: {
      keyTip: "F",
      visible: true,
      menuItems: [
        { text: "New", iconCss: "e-icons e-file-new", id: "new" },
        { text: "Open", iconCss: "e-icons e-folder-open", id: "open" },
        { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
        { text: "Save as", iconCss: "e-icons e-save", id: "save" }
      ]
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
  ribbonCreated: function () {
    this.$refs.ribbonKeyTip.ej2Instances.ribbonKeyTipModule.showKeyTips();
  }
}
});