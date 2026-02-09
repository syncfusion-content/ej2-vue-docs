<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor ref="rteObj" :toolbarSettings="toolbarSettings" :created="onCreate"><p>The rich text editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
        <p><b>Key features:</b></p>
          <ul>
            <li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>
            <li><p>Capable of handling markdown editing.</p></li>
            <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
            <li><p>Provides a fully customizable toolbar.</p></li>
          </ul></ejs-richtexteditor>
        </div>
    </div>
</div>

</div>
</template>
<script setup>
import { provide, ref } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
const rteObj = ref(null);
const toolbarSettings = {
    type: 'MultiRow',
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|',
    'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
    'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
  ]
};
const onCreate = function(){
  var instance = rteObj.value.ej2Instances;
  instance.contentModule.getDocument().addEventListener("keydown",function(e) {
        if(e.key === 's' && e.ctrlKey===true){
              e.preventDefault(); // to prevent default ctrl+s action
              instance.updateValue(); // to update the value after editing
              let value = instance.value; // you can get the RTE content to save in the desired database
        }
  });
}
provide('richtexteditor', [Toolbar, HtmlEditor]);
</script>
<style>
  @import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
</style>