import Vue from "vue";
import {
  RichTextEditorPlugin,
  Toolbar,
  Link,
  Image,
  MarkdownEditor,
} from '@syncfusion/ej2-vue-richtexteditor';
import { marked } from 'marked';
Vue.use(RichTextEditorPlugin);


new Vue({
	el: '#app',
	template: `<div id="defaultRTE">
                    <ejs-richtexteditor
                    id="MDdefault"
                    ref="rteInstance"
                    :toolbarSettings="toolbarSettings"
                    :created="created"
                    :editorMode="editorMode"
                    :value="rteValue"
                    >
                    </ejs-richtexteditor>
                </div>`,

    data: function() {
        return {
            rteValue: 'In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.',
            id: '',
            mdsource: null,
            htmlPreview: null,
            textArea: null,
            previewTextArea: null,
            editorMode: 'Markdown',
            toolbarSettings: {
                items: [
                    'Image',
                    {
                            tooltipText: 'Preview',
                            template:
                            '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn" aria-label="Preview Code">' +
                            '<span class="e-btn-icon e-md-preview e-icons"></span></button>',
                    },
                ],
            },
        };
    },
    methods: {
        created: function () {
            this.rteObj = this.$refs.rteInstance.ej2Instances;
            this.textArea = this.rteObj.contentModule.getEditPanel();
            this.id = this.$refs.rteInstance.ej2Instances.getID() + 'html-preview';
            this.mdsource = document.getElementById('preview-code');
            this.htmlPreview = this.rteObj.element.querySelector(this.id);
            this.previewTextArea =
                this.rteObj.element.querySelector('.e-rte-content');
            this.textArea.onkeyup = (Event) => {
                this.markDownConversion();
            };
            this.mdsource.onclick = (e) => {
                this.fullPreview();
                if (e.currentTarget.classList.contains('e-active')) {
                this.$refs.rteInstance.disableToolbarItem(['CreateTable']);
                } else {
                this.$refs.rteInstance.enableToolbarItem(['CreateTable']);
                }
            };
        },
        markDownConversion: function () {
            if (this.mdsource.classList.contains('e-active')) {
                this.htmlPreview.innerHTML = marked(this.textArea.value);
            }
        },
        fullPreview: function () {
            if (this.mdsource.classList.contains('e-active')) {
                this.mdsource.classList.remove('e-active');
                this.textArea.style.display = 'block';
                this.htmlPreview.style.display = 'none';
                this.previewTextArea.style.overflow = 'hidden';
            } else {
                this.mdsource.classList.add('e-active');
                if (!this.htmlPreview) {
                this.htmlPreview = document.createElement('div');
                this.htmlPreview.setAttribute('class', 'e-content e-pre-source');
                this.htmlPreview.setAttribute('id', this.id);
                this.textArea.parentNode.appendChild(this.htmlPreview);
                this.previewTextArea.style.overflow = 'auto';
                }
                if (this.previewTextArea.style.overflow === 'hidden') {
                this.previewTextArea.style.overflow = 'auto';
                }
                this.textArea.style.display = 'none';
                this.htmlPreview.style.display = 'block';
                this.htmlPreview.innerHTML = marked(this.textArea.value);
                this.mdsource.parentElement.title = 'Code View';
            }
        },
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, MarkdownEditor]
    }

});