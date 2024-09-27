
import Vue from 'vue';
import { ImageEditorPlugin, RedactType } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="addRedact">Add Redact</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="updateRedact">Update Redact</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="selRedact">Select Redact</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="delRedact">Delete Redact</ejs-button>
</div>
`,

  data: function() {
      return {
        toolbar: []
      };
  },
  methods: {
    addRedact: function(event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawRedact(RedactType.Blur, dimension?.x, dimension.y, 200, 300);
    },
    updateRedact: function(event) {
      let redacts = this.$refs.imageEditorObj.ej2Instances.getRedacts();
      if (redacts.length > 0) {
        redacts[redacts.length - 1].blurIntensity = 100;
        this.$refs.imageEditorObj.ej2Instances.updateRedact(redacts[redacts.length - 1]);
      }
    },
    selRedact: function(event) {
      let redacts = this.$refs.imageEditorObj.ej2Instances.getRedacts();
      if (redacts.length > 0) {
        this.$refs.imageEditorObj.ej2Instances.selectRedact(redacts[redacts.length - 1].id);
      }
    },
    delRedact: function(event) {
      let redacts = this.$refs.imageEditorObj.ej2Instances.getRedacts();
      if (redacts.length > 0) {
        this.$refs.imageEditorObj.ej2Instances.deleteRedact(redacts[redacts.length - 1].id);
      }
    }
  }

});