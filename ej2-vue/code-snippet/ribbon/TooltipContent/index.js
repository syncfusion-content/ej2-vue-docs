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
                            <e-ribbon-item type="SplitButton" :splitButtonSettings="pasteButton" :ribbonTooltipSettings="pasteOptions">
                            </e-ribbon-item>
                        </e-ribbon-items>
                      </e-ribbon-collection>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                            <e-ribbon-item type="Button" :buttonSettings="cutButton" :ribbonTooltipSettings="cutOptions">
                            </e-ribbon-item>
                            <e-ribbon-item type="Button" :buttonSettings="copyButton" :ribbonTooltipSettings="copyOptions">
                            </e-ribbon-item>
                            <e-ribbon-item type="Button" :buttonSettings="formatButton" :ribbonTooltipSettings="formatOptions">
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
    formatButton:  { iconCss: "e-icons e-format-painter", content: "Format Painter" },

    cutOptions: { title: "Cut", content: "Places the selected text or object on the clipboard so that you can paste it somewhere else."},
    copyOptions: { title: "Copy", content: "Copies the chosen text or object to the clipboard so that you can reuse it elsewhere."},
    pasteOptions: { title: "Paste", content: "Insert the clipboard content where the cursor is currently placed."},
    formatOptions: { title: "Format Painter", content: "Copies the formatting style of a selected text or object and applies it to other content within the document." }
  };
},
});