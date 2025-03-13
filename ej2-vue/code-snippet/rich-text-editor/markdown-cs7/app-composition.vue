<template>
  <div class="control-section markdown-preview">
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
  </div>
</template>

<style>

.markdown-preview .heading {
    float: left;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 0px;
    border-left: none;
    border-top: none;
}
.markdown-preview .title {
    color: #333333;
    letter-spacing: 1px;
    padding-left: 10px;
    text-align: center;
    margin: 10px 0;
}
.fabric-dark .markdown-preview .title,
.bootstrap5-dark .markdown-preview .title,
.bootstrap5\.3-dark .markdown-preview .title,
.bootstrap-dark .markdown-preview .title,
.fluent-dark .markdown-preview .title,
.fluent2-dark .markdown-preview .title,
.material-dark .markdown-preview .title,
.tailwind-dark .markdown-preview .title,
.tailwind3-dark .markdown-preview .title,
.highcontrast .markdown-preview .title {
    color: #fff;
}
</style>

<script setup>
import { Browser } from '@syncfusion/ej2-base';
import {
    RichTextEditorComponent,
    Toolbar,
    Link,
    Image,
    Table,
    MarkdownEditor,
  } from '@syncfusion/ej2-vue-richtexteditor';
import {
    SplitterComponent,
    PanesDirective,
    PaneDirective,
} from '@syncfusion/ej2-vue-layouts';
import { marked } from 'marked';

const rteValue = `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. 
                    Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words 
                    and phrases should look different from each other
                    
                    Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text.
                    
                    We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).
                    
                    The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content`;

const rteObj = ref(null);
const toolbarSettings = {
    items: [
        'Bold',
        'Italic',
        'StrikeThrough',
        '|',
        'Formats',
        'Blockquote',
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
};
let textArea= null;
let srcArea= null;
const editorMode= 'Markdown';

const onCreate = () => {
    setTimeout(() => {
        this.$refs.rteObj.ej2Instances.refreshUI();
        this.textArea =
        this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();
        this.srcArea = document.querySelector('.source-code');
        this.updateValue();
    }, 10);
   
};
const onChange = () => {
   this.updateValue();
};

const updateValue = () => {
   this.srcArea.innerHTML = marked(
        this.$refs.rteObj.ej2Instances.contentModule.getEditPanel().value
    );
};
const onRefreshUI = () => {
   this.$refs.rteObj.ej2Instances.refreshUI();
};

const updateOrientation = () => {
   if (Browser.isDevice) {
        this.$refs.splitterObj.$el.ej2_instances[0].orientation = 'Vertical';
        document.body.querySelector('.heading').style.width = 'auto';
    }
};
provide('richtexteditor', [Toolbar, Link, Image, Table, MarkdownEditor, PanesDirective, PaneDirective]);
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