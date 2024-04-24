<template>
        <div id="app">
            <div>
                 <button v-on:click='saveAsSfdt'>Save</button>
            </div>
            <ejs-documenteditorcontainer ref="documentEditorContainer" height="590px" :enableSfdtExport='true' :enableSelection='true' :enableEditor='true' :isReadOnly='false' height="370px" style="width: 100%;"></ejs-documenteditorcontainer>
        </div>
</template>
<script>
        import Vue from 'vue'
        import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar } from '@syncfusion/ej2-vue-documenteditor';

        Vue.use(DocumentEditorContainerPlugin);

        export default {
            data(){
                return { serviceUrl:'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/' }
            },
            provide: {
                //Inject require modules.
                DocumentEditorContainer : [SfdtExport, Selection, Editor, Toolbar]
            },
            methods: {
                saveAsSfdt: function() {
                    //Download the current document in Docx format.
                    this.$refs.documentEditorContainer.ej2Instances.documentEditor.save('sample', 'Docx');
                }
            }
        }
</script>
<style>
        @import "../../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>


