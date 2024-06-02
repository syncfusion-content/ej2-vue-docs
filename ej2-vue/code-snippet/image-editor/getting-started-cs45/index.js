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
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="straightenleftBtn">Straighten Left</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="straightenRightBtn">Straighten Right</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="resetBtn">Reset</ejs-button>
</div>
`,

  data: function() {
      return {
        toolbar: [],
        straighten:  0
      };
  },
  methods: {
    straightenleftBtn: function(event) {
      this.straighten -= 3;
      this.$refs.imageEditorObj.ej2Instances.straightenImage(this.straighten);
    },

    straightenRightBtn: function(event) {
      this.straighten -= 3;
      this.$refs.imageEditorObj.ej2Instances.straightenImage(this.straighten);
    },

    resetBtn: function(event) {
      this.straighten = 0;
      this.$refs.imageEditorObj.ej2Instances.straightenImage(this.straighten);
    }
  }

});