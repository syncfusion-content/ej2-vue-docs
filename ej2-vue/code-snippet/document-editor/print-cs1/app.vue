

<template>
        <div id="app">
            <div>
                  <button v-on:click='print' >Print</button>
            </div>
            <ejs-documenteditor ref="documenteditor" :enablePrint='true' height="370px" style="width: 100%;"></ejs-documenteditor>
        </div>
</template>
<script>
    import Vue from 'vue'
    import { DocumentEditorPlugin, Print } from '@syncfusion/ej2-vue-documenteditor';

    Vue.use(DocumentEditorPlugin);

    export default {
        data: function() {
            return {
            };
        },
        provide: {
            DocumentEditor : [Print]
        }
        methods: {
            print: function() {
                //Print the content of the Document Editor.
                this.$refs.documenteditor.print();
            }
        },
        mounted: function() {
            let sfdt: string =`{
                "sections": [
                    {
                        "blocks": [
                            {
                                "inlines": [
                                    {
                                        "characterFormat": {
                                            "bold": true,
                                            "italic": true
                                        },
                                        "text": "Hello World"
                                    }
                                ]
                            }
                        ],
                        "headersFooters": {
                        }
                    }
                ]
            }`;
            //Open default document in Document Editor.
            this.$refs.documenteditor.open(sfdt);
        }
    }
</script>
<style>
      @import "../../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>


