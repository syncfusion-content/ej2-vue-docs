import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="brushscriptBtn">Brush Script MT</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="papyrusBtn">Papyrus</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="timesnewromanBtn">Times New Roman</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="couriernewBtn">Courier New</ejs-button>
</div>
`,

  data: function() {
      return {
        toolbar: [],
        fontFamily: { default: 'Arial', items: [{id: 'arial', text: 'Arial'}, {id: 'brush script mt', text: 'Brush Script MT'},
        {id: 'papyrus', text: 'Papyrus'}, {id: 'times new roman', text: 'Times New Roman'}, {id: 'courier new', text: 'Courier New'}] }
      };
  },
  methods: {
      fileOpened: function() {
        let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
        this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x, dimension.y, 'EnterText', 'Arial');
    },

    couriernewBtn: function(event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x, dimension.y, 'EnterText', 'Courier New');
    },

    brushscriptBtn: function(event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x, dimension.y, 'EnterText', 'Brush Script MT');
    },

    papyrusBtn: function(event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x, dimension.y, 'EnterText', 'Papyrus');
    },

    timesnewromanBtn: function(event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x,dimension.y, 'EnterText', 'Times New Roman');
    }
  }

});