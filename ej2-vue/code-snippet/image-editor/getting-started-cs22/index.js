
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
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :zoomSettings="zoomSettings" :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="btnClick">Zoom</ejs-button>
</div>
`,

  data: function() {
      return {
        toolbar: [],
        zoomSettings: {maxZoomFactor: 30, minZoomFactor: 0.1},
        zoomLevel: 1
      };
  },
  methods: {
    btnClick: function(event) {
      if (this.zoomLevel <= 1) {
        this.zoomLevel -= 0.1;
      } else {
        this.zoomLevel -= 1;
      }
      if (this.zoomLevel < this.$refs.imageEditorObj.zoomSettings.minZoomFactor) {
        this.zoomLevel = this.$refs.imageEditorObj.zoomSettings.minZoomFactor;
      }
      this.$refs.imageEditorObj.ej2Instances.zoom(this.zoomLevel); // Zoom out
    }
  }

});