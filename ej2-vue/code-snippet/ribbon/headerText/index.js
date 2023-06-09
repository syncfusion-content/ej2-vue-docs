
import Vue from 'vue';
import { RibbonFileMenu, RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";

Vue.use(RibbonPlugin);

new Vue({
	el: '#app',
	template: `
<template>
  <ejs-ribbon :fileMenu="fileSettings">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
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
`,
provide: {
  ribbon: [RibbonFileMenu]
},
data: function () {
  return {
    fileSettings: {
      text: 'App',
      visible: true,
      menuItems: [
        { text: "New", iconCss: "e-icons e-file-new", id: "new" },
        { text: "Open", iconCss: "e-icons e-folder-open", id: "open" },
        { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
        { text: "Save as", iconCss: "e-icons e-save", id: "save" }
      ]
    },
    cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
    copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
  };
}
});