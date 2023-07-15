---
layout: post
title: Tooltip in Vue Ribbon component | Syncfusion
description:  Learn here all about Tooltip in Syncfusion Vue Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
--- 

# Tooltip

The Ribbon supports tooltips, which give users more information when they hover over items and improving the user experience.

## Adding title

The [title](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonTooltip/#title) property is used to set the tooltip title for each Ribbon item.

```html
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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
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

        cutOptions: { title: "Cut" },
        copyOptions: { title: "Copy" },
        pasteOptions: { title: "Paste" },
        formatOptions: { title: "Format Painter" }

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
```

## Adding content

The [content](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonTooltip/#content) property can be used to set the tooltip content for each Ribbon item.

```html
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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
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

        cutOptions: { title: "Cut", content: "Places the selected text or object on the clipboard so that you can paste it somewhere else." },
        copyOptions: { title: "Copy", content: "Copies the chosen text or object to the clipboard so that you can reuse it elsewhere." },
        pasteOptions: { title: "Paste", content: "Insert the clipboard content where the cursor is currently placed." },
        formatOptions: { title: "Format Painter", content: "Copies the formatting style of a selected text or object and applies it to other content within the document." }

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
```

## Adding icon

In addition to the text and content, by using [iconCss](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonTooltip/#iconcss) property you can define the custom style for the icons.

```html
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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
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

        cutOptions: { title: "Cut", content: "Places the selected text or object on the clipboard so that you can paste it somewhere else.", iconCss: "e-icons e-cut" },
        copyOptions: { title: "Copy", content: "Copies the chosen text or object to the clipboard so that you can reuse it elsewhere.", iconCss: "e-icons e-copy" },
        pasteOptions: { title: "Paste", content: "Insert the clipboard content where the cursor is currently placed.", iconCss: "e-icons e-paste" },
        formatOptions: { title: "Format Painter", content: "Copies the formatting style of a selected text or object and applies it to other content within the document.", iconCss: "e-icons e-format-painter" }
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
```

{% previewsample "page.domainurl/code-snippet/ribbon/Tooltip" %}

## Tooltip Customization

The [cssClass](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonTooltip/#cssclass) property can be used to customize the appearance of the tooltip with your own custom styles.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/TooltipCustomization/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/TooltipCustomization" %}