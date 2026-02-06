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

<script setup>
import { provide } from "vue";  
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
const placeholder = "Type Something";
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
</script>

<style>
    @import '../node_modules/@syncfusion/ej2/material.css';
</style>