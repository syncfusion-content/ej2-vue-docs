<template>
  <div id="defaultRTE">
    <ejs-richtexteditor id="preview" ref="rteInstance" :toolbarSettings="toolbarSettings" :created="created" :actionComplete='actionComplete' :editorMode="editorMode" :height="height">
In Rich Text Editor , you click the toolbar buttons to format the words and the changes
are visible immediately.
Markdown is not like that. When you format the word in Markdown format, you need to
add Markdown syntax to the word to indicate which words
and phrases should look different from each other
Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text.
We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).
The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.
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
<script>
import { Browser, addClass, removeClass, isNullOrUndefined } from "@syncfusion/ej2-base";
import { RichTextEditorComponent, Toolbar, Link, Image, MarkdownEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-vue-base';
export default {
name: "App",
components: {
"ejs-richtexteditor":RichTextEditorComponent
},
    data: function() {
        return {
            textArea: '',
            height: '300px',
        toolbarSettings: {
            items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'CreateTable', '|',
                { tooltipText: 'Preview', template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                    '<span class="e-btn-icon e-md-preview e-icons"></span></button>' },
                { tooltipText: 'Split Editor', template: '<button id="MD_Preview" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                    '<span class="e-btn-icon e-view-side e-icons"></span></button>' }, 'FullScreen', '|', 'Undo', 'Redo']
        },
        editorMode: 'Markdown',
        };
    },
    methods: {
        created: function() {
            var script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
            document.head.appendChild(script);
            this.textArea = this.$refs.rteInstance.$el.parentNode.querySelector('.e-content');
            this.textArea.onkeyup = (Event) => {
                this.markDownConversion();
            };
            document.getElementById('preview-code').onclick = () => {
                this.fullPreview({ mode: true, type: 'preview'});
                 if (event.target.parentElement.classList.contains('e-active')) {
                    this.$refs.rteInstance.ej2Instances.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
                     'UnorderedList', 'CreateLink', 'Image', 'CreateTable']);
                     event.target.parentElement.parentElement.nextElementSibling.classList.add('e-overlay');
                } else {
                    this.$refs.rteInstance.ej2Instances.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
                     'UnorderedList', 'CreateLink', 'Image', 'CreateTable']);
                      event.target.parentElement.parentElement.nextElementSibling.classList.remove('e-overlay');
                }
            };
            document.getElementById('MD_Preview').onclick = () => {
                if (this.$refs.rteInstance.$el.classList.contains('e-rte-full-screen')) {
                    this.fullPreview({ mode: true, type: '' });
                }
                document.getElementById('preview-code').classList.remove('e-active');
                this.$refs.rteInstance.ej2Instances.showFullScreen();
            };
        },
        markDownConversion: function(){
        if (document.getElementById('MD_Preview').classList.contains('e-active')) {
            var id = this.$refs.rteInstance.ej2Instances.getID() + 'html-view';
            var htmlPreview = this.$refs.rteInstance.$el.parentNode.querySelector('#' + id);
            htmlPreview.innerHTML = marked(this.textArea.value);
        }
    },
    actionComplete: function(e) {
        var mdsource = document.getElementById('preview-code');
        var mdSplit = document.getElementById('MD_Preview');
        var id = this.$refs.rteInstance.ej2Instances.getID() + 'html-view';
        var htmlPreview = this.$refs.rteInstance.$el.parentNode.querySelector('#' + id);
            if (e.targetItem === 'Maximize' && isNullOrUndefined(e.args)) {
                this.fullPreview({ mode: true, type: '' });
            } else if (!mdSplit.parentElement.classList.contains('e-overlay')) {
                if (e.targetItem === 'Minimize') {
                this.textArea.style.display = 'block';
                this.textArea.style.width = '100%';
                if (htmlPreview) { htmlPreview.style.display = 'none'; }
                mdSplit.classList.remove('e-active');
                mdsource.classList.remove('e-active');
                }
            this.markDownConversion();
            }
        },
        fullPreview: function(event){
            var mdsource = document.getElementById('preview-code');
             var mdSplit = document.getElementById('MD_Preview');
            var id = this.$refs.rteInstance.ej2Instances.getID() + 'html-view';
            var htmlPreview = this.$refs.rteInstance.$el.parentNode.querySelector('#' + id);
        if ((mdsource.classList.contains('e-active') || mdSplit.classList.contains('e-active')) && event.mode) {
            mdsource.classList.remove('e-active');
            mdSplit.classList.remove('e-active');
            this.textArea.style.display = 'block';
            this.textArea.style.width = '100%';
            htmlPreview.style.display = 'none';
        } else {
            mdsource.classList.add('e-active');
             mdSplit.classList.add('e-active');
            if (!htmlPreview) {
                htmlPreview = document.createElement('div');
                htmlPreview.id = id;
                htmlPreview.setAttribute('class', 'e-content');
                this.textArea.parentNode.appendChild(htmlPreview);
            }
            if (event.type === 'preview') {
                this.textArea.style.display = 'none';
                htmlPreview.classList.add('e-pre-source');
            } else {
                htmlPreview.classList.remove('e-pre-source');
                this.textArea.style.width = '50%';
            }
            htmlPreview.style.display = 'block';
            htmlPreview.innerHTML = marked(this.$refs.rteInstance.ej2Instances.contentModule.getEditPanel().value);
            mdsource.parentElement.title = 'Code View';
        }
    }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, MarkdownEditor]
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