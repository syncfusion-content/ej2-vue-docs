

<template>
        <div id="app">
              <ejs-documenteditor ref="documenteditor" id="container_1" height="370px" style="width: 100%;display:block" ></ejs-documenteditor>
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
            mounted: function() {
                let sfdt: string = `{
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
                //Open the default document in Document Editor.
                this.$refs.documenteditor.open(sfdt);
            }
        }
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>


