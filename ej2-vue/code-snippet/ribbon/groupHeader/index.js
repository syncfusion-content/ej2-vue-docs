
import Vue from 'vue';
import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";

Vue.use(RibbonPlugin);

new Vue({
  el: '#app',
  template: `
  <template>
  <ejs-ribbon id="ribbon">
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
                    </e-ribbon-collections>
                </e-ribbon-group>
                <e-ribbon-group header="Font">
                    <e-ribbon-collections>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="Button" :buttonSettings="boldButton">
                                </e-ribbon-item>
                                <e-ribbon-item type="Button" :buttonSettings="italicButton">
                                </e-ribbon-item>
                                <e-ribbon-item type="Button" :buttonSettings="underlineButton">
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
    pasteButton:  {
      iconCss: "e-icons e-paste", 
      content: "Paste", 
      items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }] 
    },
    boldButton:  { iconCss: "e-icons e-bold", content: "Bold", isToggle: true },
    italicButton:  { iconCss: "e-icons e-italic", content: "Italic", isToggle: true },
    underlineButton:  { iconCss: "e-icons e-underline", content: "Underline", isToggle: true },
  };
},
});