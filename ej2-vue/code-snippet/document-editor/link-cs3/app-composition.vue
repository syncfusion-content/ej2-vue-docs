<template>
    <div id="app" style="height:330px">
        <div>
            <button v-on:click='showHyperlinkDialog'>Open dialog</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
            :enableEditorHistory='true' :enableHyperlinkDialog='true' :enableSfdtExport='true' height="370px"
            style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, EditorHistory, HyperlinkDialog, SfdtExport, RequestNavigateEventArgs } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
provide('DocumentEditor ', [Selection, Editor, EditorHistory, HyperlinkDialog, SfdtExport]);

const showHyperlinkDialog = function () {
    documenteditor.showDialog('Hyperlink');
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
