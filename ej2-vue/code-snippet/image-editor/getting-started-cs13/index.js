
import Vue from "vue";
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: "#app",
  template: `
    <div>
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :toolbar="toolbar"></ejs-imageeditor>
      <div class="button-group">
        <ejs-button id="contains" cssClass="e-primary" v-on:click.native="contains">Fit to Width (Aspect Ratio)</ejs-button>
        <ejs-button id="cover" cssClass="e-primary" v-on:click.native="cover">Cover (Aspect Ratio)</ejs-button>
        <ejs-button id="stretch" cssClass="e-primary" v-on:click.native="stretch">Stretch / Shrink</ejs-button>
      </div>
    </div>
  `,
  data() {
    return {
      toolbar: []
    };
  },
  methods: {
    created: function () {
      let imageEditor = this.$refs.imageEditorObj.ej2Instances;
      if (!imageEditor) return;
      imageEditor.open('https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg');
    },
    contains() {
      this.$refs.imageEditorObj.ej2Instances.open('https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg', true, { backgroundColor: '', width: 550, height: null, isAspectRatio: true });
    },
    cover() {
      this.$refs.imageEditorObj.ej2Instances.open('https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg', true, { backgroundColor: '', width: 550, height: 550, isAspectRatio: true });
    },
    stretch() {
      this.$refs.imageEditorObj.ej2Instances.open('https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg', true, { backgroundColor: '', width: 350, height: 350, isAspectRatio: false });
    },
  },
});