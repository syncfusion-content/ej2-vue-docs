
import Vue from 'vue';
import { ImageEditorPlugin, ImageFilterOption } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);
Vue.use(ImageFilterOption);

new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="chromeClick">Chrome</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="coldClick">Cold</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="warmClick">Warm</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="grayScaleClick">GrayScale</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="sepiaClick">Sepia</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="invertClick">Invert</ejs-button>
</div>
`,

  data: function() {
      return {
        toolbar: []
      };
  },
  methods: {
     created: function() {
        if (Browser.isDevice) {
            this.$refs.imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            this.$refs.imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    },
    chromeClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Chrome');
    },
    coldClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Cold');
    },
    warmClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Warm');
    },
    grayScaleClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('GrayScale');
    },
    sepiaClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Sepia');
    },
    invertClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Invert');
    }
  }

});