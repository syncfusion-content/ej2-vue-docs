

<template>
    <div id="app">
      <button id='container_ruler_button' v-on:click="onClick">Show/Hide Ruler</button>
      <ejs-documenteditor ref="documenteditor" :height="height" :serviceUrl='serviceUrl'></ejs-documenteditor>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { DocumentEditorPlugin, DocumentEditorComponent } from '@syncfusion/ej2-vue-documenteditor';

    Vue.use(DocumentEditorPlugin);
    export default {
      data(){
          return {
              serviceUrl:'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
              height: '370px',
              isReadOnly: false,
              documentEditorSettings: {showRuler: true}
          }
        },
        provide: {
          DocumentEditor: []
        },
        methods: {
          onClick:function() {
            this.$refs.container.ej2Instances.documentEditorSettings.showRuler = !this.$refs.container.ej2Instances.documentEditorSettings.showRuler
          }
        },
        mounted: function() {
          this.$refs.container.ej2Instances.enableAllModules();
        }
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


