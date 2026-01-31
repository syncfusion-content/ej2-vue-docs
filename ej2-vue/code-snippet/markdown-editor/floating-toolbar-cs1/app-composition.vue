<template>
    <div>
        <div class="col-lg-4 property-section">
            <div title="Properties" id="property">
                <table title="Properties" id="property">
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <ejs-checkbox label='Enable Floating' ref="checkInstance" :change="onFloatChange"
                                        id="float" :checked="false"></ejs-checkbox>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor ref="rteInstance" :value="rteValue" :height="750" :toolbarSettings="toolbarSettings"></ejs-richtexteditor>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, MarkdownEditor, Table, Image, Link } from "@syncfusion/ej2-vue-richtexteditor";
import { CheckBoxComponent as EjsCheckbox } from "@syncfusion/ej2-vue-buttons";

const rteValue = `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.`;
const rteObj = ref(null);
const toolbarSettings = {
    enableFloating: false,
    items: [ 'Bold', 'Italic', 'StrikeThrough', '|','SuperScript',
          'SubScript','Formats','|','OrderedList', 'UnorderedList','CreateLink',
          'Image', 'CreateTable','|','Undo','Redo'
      ]
}
const onFloatChange = (args) => {
    rteInstance.value.ej2Instances.toolbarSettings.enableFloating = args.checked;
    rteInstance.value.rteInstance.dataBind();
}
provide('richtexteditor', [Toolbar, MarkdownEditor, Table, Image, Link]);
</script>

<style>@import "../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
</style>