<template>
  <div id="defaultRTE">
    <ejs-richtexteditor id="preview" ref="rteInstance" :toolbarSettings="toolbarSettings" :created="created" :value:"rteValue" :actionComplete='actionComplete' :editorMode="editorMode" :height="height" >
      </ejs-richtexteditor>
  </div>
</template>

<style>
    .e-richtexteditor .e-rte-content .e-content{
        min-height: 150px;
    }
    .e-richtexteditor .e-rte-content textarea.e-content {
        float: left;
        border-right: 1px solid rgba(0, 0, 0, 0.12);
    }
    .e-richtexteditor .e-rte-content {
        overflow: hidden;
    }
    .e-md-preview::before {
        content: '\e345';
    }

    .e-rte-content .e-content.e-pre-source {
        width: 100%;
    }
    .e-icon-btn.e-active .e-md-preview.e-icons::before {
        content: '\e350';
    }
</style>

<script setup>
import { isNullOrUndefined } from "@syncfusion/ej2-base";
import { RichTextEditorComponent, Toolbar, Link, Image, MarkdownEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { marked } from 'marked';

const rteInstance = ref(null);
const rteValue = `***Overview***
                        The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor used to create and edit the content and return valid HTML markup or markdown (MD) of the content. The editor provides a standard toolbar to format content using its commands. Modular library features to load the necessary functionality on demand. The toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operation, HTML view, and more.

                        ***Key features***
                        - *Mode*: Provides IFRAME and DIV mode.
                        - *Module*: Modular library to load the necessary functionality on demand.
                        - *Toolbar*: Provide a fully customizable toolbar.
                        - *Editing*: HTML view to edit the source directly for developers.
                        - *Third-party Integration*: Supports to integrate third-party library.
                        - *Preview*: Preview the modified content before saving it.
                        - *Tools*: Handling images, hyperlinks, video, uploads and more.
                        - *Undo and Redo*: Undo/redo manager.
                        - *Lists*: Creates bulleted and numbered list.`;
let textArea = '';
const  height = '300px';
const toolbarSettings = {
    items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|',
        { tooltipText: 'Preview', template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
            '<span class="e-btn-icon e-md-preview e-icons"></span></button>' },
        { tooltipText: 'Split Editor', template: '<button id="MD_Preview" class="e-tbar-btn e-control e-btn e-icon-btn">' +
            '<span class="e-btn-icon e-view-side e-icons"></span></button>' }, 'FullScreen', '|', 'Undo', 'Redo']
};
const editorMode = 'Markdown';
const created = () => {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    document.head.appendChild(script);
    textArea = rteInstance.value.$el.parentNode.querySelector('.e-content');
    textArea.onkeyup = (Event) => {
        markDownConversion();
    };
    document.getElementById('preview-code').onclick = () => {
        fullPreview({ mode: true, type: 'preview'});
         if (event.target.parentElement.classList.contains('e-active')) {
            rteInstance.value.ej2Instances.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
             'UnorderedList', 'CreateLink', 'Image', 'CreateTable']);
             event.target.parentElement.parentElement.nextElementSibling.classList.add('e-overlay');
        } else {
            rteInstance.value.ej2Instances.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
             'UnorderedList', 'CreateLink', 'Image', 'CreateTable']);
              event.target.parentElement.parentElement.nextElementSibling.classList.remove('e-overlay');
        }
    };
    document.getElementById('MD_Preview').onclick = () => {
        if (rteInstance.value.$el.classList.contains('e-rte-full-screen')) {
            fullPreview({ mode: true, type: '' });
        }
        document.getElementById('preview-code').classList.remove('e-active');
        rteInstance.value.ej2Instances.showFullScreen();
    };
};
const markDownConversion = () => {
    if (document.getElementById('MD_Preview').classList.contains('e-active')) {
        var id = rteInstance.value.ej2Instances.getID() + 'html-view';
        var htmlPreview = rteInstance.value.$el.parentNode.querySelector('#' + id);
        htmlPreview.innerHTML = marked.parse(rteInstance.value.ej2Instances.contentModule.getEditPanel().value);
    }
};
const actionComplete = (e) => {
    var mdsource = document.getElementById('preview-code');
    var mdSplit = document.getElementById('MD_Preview');
    var id = rteInstance.value.ej2Instances.getID() + 'html-view';
    var htmlPreview = rteInstance.value.$el.parentNode.querySelector('#' + id);
    if (e.targetItem === 'Maximize' && isNullOrUndefined(e.args)) {
        fullPreview({ mode: true, type: '' });
    } else if (!mdSplit.parentElement.classList.contains('e-overlay')) {
        if (e.targetItem === 'Minimize') {
            textArea.style.display = 'block';
            textArea.style.width = '100%';
            if (htmlPreview) { htmlPreview.style.display = 'none'; }
            mdSplit.classList.remove('e-active');
            mdsource.classList.remove('e-active');
        }
        markDownConversion();
    }
};
const fullPreview = (event) => {
    var mdSource = document.getElementById('preview-code');
    var id = rteInstance.value.ej2Instances.getID() + 'html-view';
    var htmlPreview = rteInstance.value.$el.parentNode.querySelector('#' + id);
    if ((mdSource.classList.contains('e-active')) && event.mode) {
        mdSource.classList.remove('e-active');
        textArea.style.display = 'block';
        textArea.style.width = '100%';
        htmlPreview.style.display = 'none';
    } else {
        mdSource.classList.add('e-active');
        if (!htmlPreview) {
            htmlPreview = document.createElement('div');
            htmlPreview.id = id;
            htmlPreview.setAttribute('class', 'e-content');
            textArea.parentNode.appendChild(htmlPreview);
        } else {
            htmlPreview.innerHTML = '';
        }
        textArea.style.display = 'none';
        htmlPreview.style.display = 'block';
        htmlPreview.innerHTML = marked.parse(rteInstance.value.ej2Instances.contentModule.getEditPanel().value);
        mdSource.parentElement.title = 'Code View';
    }
}
provide('richtexteditor', [Toolbar, Link, Image, MarkdownEditor]);
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
</style>