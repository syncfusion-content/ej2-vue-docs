
import Vue from 'vue';
import { RibbonItemSize, RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";

Vue.use(RibbonPlugin);

new Vue({
  el: '#app',
  template: `
  <template>
  <ejs-ribbon id="ribbon">
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
            <e-ribbon-groups>
                <e-ribbon-group>
                    <e-ribbon-collections>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="SplitButton" :allowedSizes="largeSize" :splitButtonSettings="pasteButton">
                                </e-ribbon-item>
                            </e-ribbon-items>
                        </e-ribbon-collection>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="Button" :allowedSizes="mediumSize" :buttonSettings="cutButton">
                                </e-ribbon-item>
                                <e-ribbon-item type="Button" :allowedSizes="smallSize" :buttonSettings="copyButton">
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
data: function () {
  return {
    largeSize: RibbonItemSize.Large,
    mediumSize: RibbonItemSize.Medium,
    smallSize: RibbonItemSize.Small,
    pasteButton:{ 
      iconCss: "e-icons e-paste", content: "Paste",
      items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
    },
    cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
    copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
    formatButton:  { iconCss: "e-icons e-format-painter", content: "Format Painter" }
  };
}
});