
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { createApp } from 'vue';

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

const app = createApp();
var contentTemplateVue = app.component("contentTemplate", {
  template: '<div><ejs-imageeditor id="image-editor" :created="created" :toolbar=[]></ejs-imageeditor></div>',
  data() {
      return {
          data: {}
      };
  }
});
new Vue({
	el: '#app',
	template: `
  <div id="target" class="control-section">
  <ejs-dialog id="dialog" ref="dialog" :target='target' :width='width' :animationSettings='animationSettings' :visible='visible' :content='contentTemplate' :closeOnEscape='closeOnEscape'>
  </ejs-dialog>
  <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="btnClick">Open dialog</ejs-button>
  </div>
`,

  data: function() {
      return {
        contentTemplate: function () {
          return { template: contentTemplateVue }
        },
        target: "#target",
        width: '340px',
        height: '420px',
        closeOnEscape: true,
        visible: false,
        animationSettings: { effect: 'None' }
      };
  },
  methods: {
    btnClick: function(event) {
      this.$refs.dialog.ej2Instances.show();
    },
    created: function() {
      this.$refs.imageEditorObj.ej2Instances.open('bridge.jpeg');
    }
  }

});