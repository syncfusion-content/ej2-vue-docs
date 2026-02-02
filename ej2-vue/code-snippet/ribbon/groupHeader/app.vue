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

<script>
  
  import { RibbonComponent, RibbonGroupDirective, RibbonGroupsDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonItemsDirective, RibbonItemDirective, RibbonTabsDirective, RibbonTabDirective } from "@syncfusion/ej2-vue-ribbon";


  export default {
name: "App",
components: {
    "ejs-ribbon": RibbonComponent,
    "e-ribbon-tabs": RibbonTabsDirective,
    "e-ribbon-tab": RibbonTabDirective,
    "e-ribbon-groups": RibbonGroupsDirective,
    "e-ribbon-group": RibbonGroupDirective,
    "e-ribbon-collections": RibbonCollectionsDirective,
    "e-ribbon-collection": RibbonCollectionDirective,
    "e-ribbon-items": RibbonItemsDirective,
    "e-ribbon-item": RibbonItemDirective
},

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
    }
  };
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>