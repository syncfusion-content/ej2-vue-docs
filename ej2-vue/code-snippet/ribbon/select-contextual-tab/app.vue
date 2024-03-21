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

<script>
  import Vue from "vue";
  import { RibbonItemSize, RibbonPlugin, RibbonContextualTab } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
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
  };
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>