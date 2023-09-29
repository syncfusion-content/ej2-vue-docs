
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser, getComponent } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :toolbarTemplate="toolbarTemplate">
</ejs-imageeditor>
</div>
`,

  data: function() {
      return {
        toolbarTemplate: () => {
            return {
                template : Vue.component('toolbarTemplate', {
                    template:
                        ` <ejs-button :isPrimary="true" v-on:click.native='btnClick'>Custom</ejs-button>`,
                        data(args) {
                            return {
                                imageEditorObj: getComponent(document.getElementById('image-editor'), 'image-editor'),
                            }
                        },
                        methods: {
                            btnClick: function(){
                                this.imageEditorObj.freeHandDraw(true);
                            }
                        }
                })
            }
        }
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

  }

});