
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";

Vue.use(ImageEditorPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" height="350px" width="550px" :toolbarTemplate="#toolbarTemplate">
    <template v-slot:toolbarTemplate="{data}">
        <ejs-button :isPrimary="true" :content="custom"></ejs-button>
    </template>
</ejs-imageeditor>
</div>
`,

  data: function() {
      return {};
  }

});