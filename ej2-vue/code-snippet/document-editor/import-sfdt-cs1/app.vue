

<template>
        <div id="app">
            <input type="file" ref="fileUpload" v-on:change="onFileUpload" accept=".sfdt" style="position:fixed; left:-100em" />
            <div>
                  <button v-on:click='openFileButtonClickHandler' >Import</button>
            </div>
            <ejs-documenteditor ref="documenteditor" height="370px" style="width: 100%;display:block" ></ejs-documenteditor>
        </div>
</template>
<script>
        import Vue from 'vue'
        import { DocumentEditorPlugin } from '@syncfusion/ej2-vue-documenteditor';

        Vue.use(DocumentEditorPlugin);

        export default {
            data: function() {
                return {
                };
            },
            methods: {
                openFileButtonClickHandler: function() {
                    this.$refs.fileUpload.click();
                },
                onFileUpload: function(e) {
                    if (e.target.files[0]) {
                        let file = e.target.files[0];
                        if (file.name.substr(file.name.lastIndexOf('.')) === '.sfdt') {
                            let fileReader: FileReader = new FileReader();
                            fileReader.onload = (e: any) => {
                                let contents: string = e.target.result;
                                //Open the default document in Document Editor.
                                this.$refs.documenteditor.open(contents);
                            };
                            fileReader.readAsText(file);
                        }
                    }
                }
            }
        }
</script>
<style>
      @import "../../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>


