import Vue from 'vue';
import { ImageEditorPlugin, FrameType, FrameLineStyle } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="matClick">Mat</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="bevelClick">Bevel</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="lineClick">Line</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="insetClick">Inset</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="hookClick">Hook</ejs-button>
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
            this.$refs.imageEditorObj.open('flower.png');
        } else {
            this.$refs.imageEditorObj.open('bridge.png');
        }
    },
    matClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Mat, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    },
    bevelClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Bevel, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    },
    lineClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Line, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    },
    insetClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Inset, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    },
    hookClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Hook, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
  }
  
});