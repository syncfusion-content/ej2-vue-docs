
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
 <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="btnClick">Circle selection</ejs-button>
</div>
`,

  data: function() {
      return {
        toolbar: []
      };
  },
  methods: {
    btnClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.select("Circle");
    }
  }

});