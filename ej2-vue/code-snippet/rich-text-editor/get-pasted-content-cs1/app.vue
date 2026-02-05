<template>
  <div>
    <ejs-richtexteditor
      ref="rteObj"
      :value="rteValue"
      :afterPasteCleanup="onAfterPasteCleanup"
    ></ejs-richtexteditor>
  </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, HtmlEditor, PasteCleanup } from "@syncfusion/ej2-vue-richtexteditor";

export default {
    name: "App",
    components: {
        "ejs-richtexteditor": RichTextEditorComponent
    },
    data: function () {
        return {
            rteValue: `<p>Rich Text Editor is a WYSIWYG editing control which will reduce the effort for users while trying to express their formatting word content as HTML or Markdown format.</p>
                <p><b>Paste Cleanup properties:</b></p>
                <ul>
                    <li>
                        <p>prompt - specifies whether to enable the prompt when pasting in Rich Text Editor.</p>
                    </li>
                    <li>
                        <p>plainText - specifies whether to paste as plain text or not in Rich Text Editor.</p>
                    </li>
                    <li>
                        <p>keepFormat- specifies whether to keep or remove the format when pasting in Rich Text Editor.</p>
                    </li>
                    <li>
                        <p>deniedTags - specifies the tags to restrict when pasting in Rich Text Editor.</p>
                    </li>
                    <li>
                        <p>deniedAttributes - specifies the attributes to restrict when pasting in Rich Text Editor.</p>
                    </li>
                    <li>
                        <p>allowedStyleProperties - specifies the allowed style properties when pasting in Rich Text Editor.</p>
                    </li>
                </ul>`,
        };
    },
    methods: {
        onAfterPasteCleanup(args) {
            // Here you can get the pasted Html string using args.value
            console.log(args.value);
        },
    },
    provide: {
        richtexteditor: [Toolbar, HtmlEditor, PasteCleanup]
    }
}
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>