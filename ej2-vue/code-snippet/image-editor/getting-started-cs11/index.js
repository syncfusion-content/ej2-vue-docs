
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
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar" :created="created" :showQuickAccessToolbar="false"></ejs-imageeditor>
      <div class="button-group">
        <ejs-button cssClass="e-img-button" id="text" :isPrimary="true" v-on:click.native="drawText" :disabled="isButtonDisabled">Draw Text</ejs-button>
        <div class="e-btn-group">
          <input type="checkbox" id="checkbold" @change="toggleFontStyle('bold', $event.target.checked)" />
          <label class="e-btn" for="checkbold"><span class="e-icons e-bold"></span>Bold</label>
          <input type="checkbox" id="checkitalic" @change="toggleFontStyle('italic', $event.target.checked)" />
          <label class="e-btn" for="checkitalic"><span class="e-icons e-italic"></span>Italic</label>
          <input type="checkbox" id="checkline" @change="toggleFontStyle('underline', $event.target.checked)" />
          <label class="e-btn" for="checkline"><span class="e-icons e-underline"></span>Underline</label>
          <input type="checkbox" id="checkstrikethrough" @change="toggleFontStyle('strikethrough', $event.target.checked)" />
          <label class="e-btn" for="checkstrikethrough"><span class="e-icons e-strikethrough"></span>Strikethrough</label>
        </div>
      </div>
    </div>
  `,
  data: function () {
    return {
      toolbar: [],
      isButtonDisabled: false
    };
  },
  methods: {
    created: function () {
      let imageEditor = this.$refs.imageEditorObj.ej2Instances;
      if (!imageEditor) return;
      let imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
        : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
      imageEditor.open(imageUrl);
    },
    drawText: function () {
      if (!this.isButtonDisabled) {
        let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
        this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x, dimension.y, 'Syncfusion');
        this.isButtonDisabled = true;
      }
    },
    toggleFontStyle: function (style, isChecked) {
      let shapes = this.$refs.imageEditorObj.ej2Instances.getShapeSettings();
      if (shapes && shapes[0]) {
        if (isChecked) {
          if (!shapes[0].fontStyle.includes(style)) {
            shapes[0].fontStyle.push(style);
          }
        } else {
          shapes[0].fontStyle = shapes[0].fontStyle.filter(item => item !== style);
        }
        this.$refs.imageEditorObj.ej2Instances.updateShape(shapes[0]);
      }
    }
  }
});