

<template>
  <div>
    <ejs-richtexteditor ref="defaultRTE" :placeholder="placeholder" >
    </ejs-richtexteditor>
  </div>
  <style>
        .e-richtexteditor .rte-placeholder {
            font-family: monospace;
            color: deeppink;
        }
    </style>
</template>

<script>
  import Vue from 'vue';
  import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

  Vue.use(RichTextEditorPlugin);

  export default {
    data() {
      return {
          placeholder: "Type Something",
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
  }
</script>

<style>
    @import '../node_modules/@syncfusion/ej2/material.css';
</style>


