
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
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :shapeChanging="shapeChanging" :showQuickAccessToolbar=false :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="btnClick">Delete Shape</ejs-button>
</div>
`,

  data: function() {
      return {
        toolbar: ['Annotate','Rectangle','Ellipse', 'Line', 'Arrow', 'Path'],
        id: '',
      };
  },
  methods: {
     created: function() {
        if (Browser.isDevice) {
            this.$refs.imageEditorObj.open('flower.png');
        } else {
            this.$refs.imageEditorObj.open('bridge.png');
        }
    },
    shapeChanging: function(event) {
      if(event.action === 'select') {
        this.id = event.currentShapeSettings.id;
      }
    },
    btnClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.deleteShape(this.id);
    }
  }

});