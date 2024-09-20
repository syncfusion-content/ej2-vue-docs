<template>
 <div id="target" class="control-section">
<ejs-dialog id="dialog" ref="dialog" :target='target' :width='width' :animationSettings='animationSettings' :visible='visible' :content='contentTemplate' :closeOnEscape='closeOnEscape'>
</ejs-dialog>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="btnClick">Open dialog</ejs-button>
</div>
</template>

<script>

import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { createApp } from 'vue';
const app = createApp();

var contentTemplateVue = app.component("contentTemplate", {
    template: '<div><ejs-imageeditor id="image-editor" :created="created" :toolbar=[]></ejs-imageeditor></div>',
    data() {
        return {
            data: {}
        };
    }
});
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-dialog": DialogComponent
},
  data: function() {
      return {
        contentTemplate: function () {
                return { template: contentTemplateVue }
        },
        target: "#target",
        width: '340px',
        height: '420px',
        closeOnEscape: true,
        visible: false,
        animationSettings: { effect: 'None' }
      };
  },
  methods: {
    btnClick: function() {
      this.$refs.dialog.ej2Instances.show();
    },
    created: function() {
      this.$refs.imageEditorObj.ej2Instances.open('bridge.jpeg');
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