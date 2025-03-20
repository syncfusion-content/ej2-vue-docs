import Vue from "vue";
import {
    Browser,
  } from '@syncfusion/ej2-base';
  import {
    RichTextEditorPlugin,
    Toolbar,
    Link,
    Table,
    Image,
    MarkdownEditor,
  } from '@syncfusion/ej2-vue-richtexteditor';
  import {
    SplitterPlugin,
  } from '@syncfusion/ej2-vue-layouts';
  import { marked } from 'marked';

  Vue.use(RichTextEditorPlugin );
  Vue.use(SplitterPlugin);

new Vue({
	el: '#app',
	template: `<div class="control-section markdown-preview">
                <ejs-splitter
                ref="splitterObj"
                id="splitter-rte-markdown-preview"
                width="100%"
                height="450px"
                :resizing="onRefreshUI"
                :created="updateOrientation"
                >
                <e-panes>
                    <e-pane
                    size="50%"
                    :resizable="true"
                    :content="'pane1Content'"
                    min="40%"
                    >
                    <template v-slot:pane1Content>
                        <ejs-richtexteditor
                        id="defaultRTE"
                        ref="rteObj"
                        :toolbarSettings="toolbarSettings"
                        :value="value"
                        height="100%"
                        saveInterval="1"
                        maxLength="5000"
                        :created="onCreate"
                        :change="onChange"
                        :actionComplete="updateValue"
                        :editorMode="editorMode"
                        >
                        </ejs-richtexteditor>
                    </template>
                    </e-pane>
                    <e-pane :content="'pane2Content'" min="40%">
                    <template v-slot:pane2Content>
                        <div class="heading right">
                        <h4 class="title"><b>Markdown Preview</b></h4>
                        <div
                            class="splitter-default-content source-code pane2"
                            style="padding: 20px"
                        ></div>
                        </div>
                    </template>
                    </e-pane>
                </e-panes>
                </ejs-splitter>
            </div>`,

    data: function() {
        return {
            textArea: null,
            srcArea: null,
            editorMode: 'Markdown',
            toolbarSettings: {
              items: [
                'Bold',
                'Italic',
                'StrikeThrough',
                '|',
                'Formats',
                'OrderedList',
                'UnorderedList',
                '|',
                'CreateLink',
                'Image',
                'CreateTable',
                '|',
                'Undo',
                'Redo',
              ],
            },
            value: `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. 
      Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words 
      and phrases should look different from each other
      
      Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text.
      
      We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).
      
      The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content`,
          };
        
    },
    methods: {
        onCreate: function () {
            setTimeout(() => {
              this.$refs.rteObj.ej2Instances.refreshUI();
              this.textArea =
                this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();
              this.srcArea = document.querySelector('.source-code');
              this.updateValue();
            }, 10);
          },
        onChange: function () {
            this.updateValue();
        },
        updateValue: function (e) {
            this.srcArea.innerHTML = marked(
                this.$refs.rteObj.ej2Instances.contentModule.getEditPanel().value
            );
        },
        onRefreshUI: function () {
            this.$refs.rteObj.ej2Instances.refreshUI();
        },
        updateOrientation: function() {
            if (Browser.isDevice) {
                this.$refs.splitterObj.$el.ej2_instances[0].orientation = 'Vertical';
                document.body.querySelector('.heading').style.width = 'auto';
            }
        },
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, Table, MarkdownEditor]
    }
});