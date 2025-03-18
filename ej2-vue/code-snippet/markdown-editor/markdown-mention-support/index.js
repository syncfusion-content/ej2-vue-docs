import Vue from "vue";
import {
    RichTextEditorPlugin,
    Toolbar,
    Link,
    Image,
    MarkdownEditor,
    Table,
  } from '@syncfusion/ej2-vue-richtexteditor';
import { MarkdownFormatter } from '@syncfusion/ej2-vue-richtexteditor';
import { MentionPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { marked } from 'marked';
Vue.use(RichTextEditorPlugin, MentionPlugin);

new Vue({
	el: '#app',
	template: `<div class="control-section rte-markdown-overview">
                    <ejs-richtexteditor
                    id="markdown-editor"
                    ref="rteInstance"
                    :toolbarSettings="toolbarSettings"
                    :formatter="formatter"
                    :created="created"
                    :editorMode="editorMode"
                    :height="height"
                    :value="value"
                    >
                    </ejs-richtexteditor>
                    <ejs-mention
                    id="mention"
                    ref="mentionObj"
                    :target="target"
                    :dataSource="emailData"
                    :fields="mentionfields"
                    allowSpaces="true"
                    :itemTemplate="'iTemplate'"
                    :displayTemplate="'dTemplate'"
                    popupWidth="250px"
                    popupHeight="200px"
                    >
                    <template v-slot:iTemplate="{ data }">
                        <div class="editor-mention-item-template">
                        <div class="em-header">
                            <div
                            class="em-avatar"
                            :style="{
                                'background-color': data.bgColor,
                                color: data.color,
                            }"
                            >
                            <div class="em-initial">{{ data.initial }}</div>
                            </div>
                        </div>
                        <div class="em-content">
                            <div class="em-name">{{ data.name }}</div>
                            <div class="em-email">{{ data.email }}</div>
                        </div>
                        </div>
                    </template>
                    <template v-slot:dTemplate="{ data }"
                        >[@{{ data.name }}](mailto:${data.email})
                    </template>
                    </ejs-mention>
                </div>`,

    data: function() {
        return {
            id: '',
            mdsource: null,
            htmlPreview: null,
            textArea: null,
            previewTextArea: null,
            height: '250px',
            editorMode: 'Markdown',
            value:
                'Hello [@Maria](mailto:maria@gmail.com)\n\nWelcome to the mention integration with markdown editor demo. Type @ character and tag user from the suggestion list.',
            target: '#markdown-editor_editable-content',
            mentionfields: { text: 'name' },
            placeholder: 'Enter your text here...',
            formatter: new MarkdownFormatter({ listTags: { OL: '1., 2., 3.' } }),
            toolbarSettings: {
                items: [
                'Bold',
                'Italic',
                'StrikeThrough',
                '|',
                'Formats',
                'Blockquote',
                'OrderedList',
                'UnorderedList',
                'SuperScript',
                'SubScript',
                '|',
                'CreateLink',
                'Image',
                'CreateTable',
                '|',
                {
                    tooltipText: 'Preview',
                    template:
                    '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn" aria-label="Preview Code">' +
                    '<span class="e-btn-icon e-md-preview e-icons"></span></button>',
                },
                '|',
                'Undo',
                'Redo',
                ],
            },
            emailData: [
                {
                name: 'Selma Rose',
                initial: 'SR',
                email: 'selma@gmail.com',
                color: '#FAFDFF',
                bgColor: '#01579B',
                },
                {
                name: 'Maria',
                initial: 'MA',
                email: 'maria@gmail.com',
                color: '#004378',
                bgColor: '#ADDBFF',
                },
                {
                name: 'Russo Kay',
                initial: 'RK',
                email: 'russo@gmail.com',
                color: '#F9DEDC',
                bgColor: '#8C1D18',
                },
                {
                name: 'Robert',
                initial: 'RO',
                email: 'robert@gmail.com',
                color: '#FFD6F7',
                bgColor: '#37003A',
                },
                {
                name: 'Camden Kate',
                initial: 'CK',
                email: 'camden@gmail.com',
                color: '#FFFFFF',
                bgColor: '#464ECF',
                },
                {
                name: 'Garth',
                initial: 'GA',
                email: 'garth@gmail.com',
                color: '#FFFFFF',
                bgColor: '#008861',
                },
                {
                name: 'Andrew James',
                initial: 'AJ',
                email: 'james@gmail.com',
                color: '#FFFFFF',
                bgColor: '#53CA17',
                },
                {
                name: 'Olivia',
                initial: 'OL',
                email: 'olivia@gmail.com',
                color: '#FFFFFF',
                bgColor: '#8C1D18',
                },
                {
                name: 'Sophia',
                initial: 'SO',
                email: 'sophia@gmail.com',
                color: '#000000',
                bgColor: '#D0BCFF',
                },
                {
                name: 'Margaret',
                initial: 'MA',
                email: 'margaret@gmail.com',
                color: '#000000',
                bgColor: '#F2B8B5',
                },
                {
                name: 'Ursula Ann',
                initial: 'UA',
                email: 'ursula@gmail.com',
                color: '#000000',
                bgColor: '#47ACFB',
                },
                {
                name: 'Laura Grace',
                initial: 'LG',
                email: 'laura@gmail.com',
                color: '#000000',
                bgColor: '#FFE088',
                },
                {
                name: 'Albert',
                initial: 'AL',
                email: 'albert@gmail.com',
                color: '#FFFFFF',
                bgColor: '#00335B',
                },
                {
                name: 'William',
                initial: 'WA',
                email: 'william@gmail.com',
                color: '#FFFFFF',
                bgColor: '#163E02',
                },
            ],
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
                this.$refs.rteInstance.disableToolbarItem([
                  'Bold',
                  'Italic',
                  'SuperScript',
                  'SubScript',
                  'StrikeThrough',
                  'Formats',
                  'Blockquote',
                  'OrderedList',
                  'UnorderedList',
                  'CreateLink',
                  'Image',
                  'CreateTable',
                ]);
              } else {
                this.$refs.rteInstance.enableToolbarItem([
                  'Bold',
                  'Italic',
                  'SuperScript',
                  'SubScript',
                  'StrikeThrough',
                  'Formats',
                  'Blockquote',
                  'OrderedList',
                  'UnorderedList',
                  'CreateLink',
                  'Image',
                  'CreateTable',
                ]);
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
        richtexteditor:[Toolbar, Link, Image, Table, MarkdownEditor, MarkdownFormatter]
    }

});