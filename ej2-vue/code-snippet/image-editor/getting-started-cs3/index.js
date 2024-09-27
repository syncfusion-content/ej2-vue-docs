
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
 <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="rectangleClick">Rectangle</ejs-button>
 <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="ellipseClick">Ellipse</ejs-button>
 <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="lineClick">Line</ejs-button>
 <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="pathClick">Path</ejs-button>
 <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="arrowClick">Arrow</ejs-button>
</div>
`,

  data: function() {
      return {
        toolbar: []
      };
  },
  methods: {
    rectangleClick: function(event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawRectangle(dimension.x + 10, dimension.y + 60, 150, 70);
      this.$refs.imageEditorObj.ej2Instances.drawRectangle(dimension.x + 250, dimension.y + 60, 150, 700, null, '', '', null, null, 8);
    },
    ellipseClick: function(event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawEllipse(dimension.x, dimension.y+200);
    },
    lineClick: function(event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawLine(dimension.x+300, dimension.y+300);
    },
    pathClick: function(event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawPath([{x: dimension.x, y: dimension.y}, {x: dimension.x+50, y: dimension.y+50}, {x: dimension.x+20, y: dimension.y+50}], 8);
    },
    arrowClick: function(event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawArrow(dimension.x + 100, dimension.y + 30, dimension.x + 100, dimension.y + 10, 10);
    }
  }

});