

<template>
  <div id="defaultRTE">
    <ejs-richtexteditor :valueTemplate="'vueTemplate'"  ref="defaultRTE" :height="340">
    <template v-slot:vueTemplate>
        <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
    </template>
    </ejs-richtexteditor>
  </div>
</template>
<script>
    import { RichTextEditorComponent, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
    
    export default {
         components: {
          'ejs-richtexteditor': RichTextEditorComponent
         },
         data: function() {
    return { };
        },
        provide: {
            richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
        }
    }
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>


