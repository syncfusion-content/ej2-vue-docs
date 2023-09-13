

<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :toolbarTemplate="toolbarTemplate">
</ejs-imageeditor>
</div>
</template>

<script>
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser, getComponent } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

export default {
  data: function() {
      return {
        toolbarTemplate: () => {
            return {
                template : Vue.component('headerTemplate', {
                    template:
                        ` <ejs-button :isPrimary="true" v-on:click.native='btnClick'>Custom</ejs-button>`,
                        data(args) {
                            return {
                                imageEditorObj: getComponent(document.getElementById('image-editor'), 'image-editor'),
                            }
                        },
                        methods: {
                            btnClick: function(){
                                this.imageEditorObj.freeHandDraw(true);
                            }
                        }
                })
            }
        }
      };
  },
  methods: {
    created: function() {
        if (Browser.isDevice) {
            this.$refs.imageEditorObj.open('flower.png');
        } else {
            this.$refs.imageEditorObj.open('bridge.png');
        }
    }
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-image-editor/styles/material.css";


#image-editor {
    width: 550px !important;
    height: 350px !important;
}
</style>


