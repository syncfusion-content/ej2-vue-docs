

<template>
    <div id="app">
      <button id='container_ruler_button' v-on:click="onClick">Show/Hide Ruler</button>
      <ejs-documenteditorcontainer ref="container" :serviceUrl='serviceUrl' :height='height' :enableToolbar='true'> </ejs-documenteditorcontainer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar } from '@syncfusion/ej2-vue-documenteditor';

    Vue.use(DocumentEditorContainerPlugin);
    export default {
      data(){
        return {
            serviceUrl:'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
            height: '590px',
            documentEditorSettings: {showRuler: true}
        }
      },
      provide: {
        DocumentEditorContainer: [Toolbar]
      },
      methods: {
        onClick:function() {
          this.$refs.container.ej2Instances.documentEditorSettings.showRuler = !this.$refs.container.ej2Instances.documentEditorSettings.showRuler
        }
      },
    }
</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
    @import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>


