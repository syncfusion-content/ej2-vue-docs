
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
                <e-ribbon-group header="Clipboard" groupIconCss="e-icons e-paste">
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
                                <e-ribbon-item type="Button" :buttonSettings="formatButton">
                                </e-ribbon-item>
                            </e-ribbon-items>
                        </e-ribbon-collection>
                    </e-ribbon-collections>
                </e-ribbon-group>
                <e-ribbon-group header="Font" groupIconCss="e-icons e-bold">
                    <e-ribbon-collections>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="ComboBox" :comboBoxSettings="fontStyleSettings">
                                </e-ribbon-item>
                                <e-ribbon-item type="ComboBox" :comboBoxSettings="fontSizeSettings">
                                </e-ribbon-item>
                            </e-ribbon-items>
                        </e-ribbon-collection>
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
    cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
    copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
    formatButton:  { iconCss: "e-icons e-format-painter", content: "Format Painter"},
    boldButton:  { iconCss: "e-icons e-bold", content: "Bold", isToggle: true },
    italicButton:  { iconCss: "e-icons e-italic", content: "Italic", isToggle: true },
    underlineButton:  { iconCss: "e-icons e-underline", content: "Underline", isToggle: true },
    fontStyleSettings:  { 
      dataSource: ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"],
      index: 3 
    },
    fontSizeSettings:  { 
      dataSource: ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72", "96"], 
      index: 3 
    },
  };
},
});