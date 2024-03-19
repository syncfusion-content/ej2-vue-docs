
import Vue from 'vue';
import { TextAreaPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextAreaPlugin);


new Vue({
	el: '#app',
	template: `
  <div class ='wrap'>
    <div>
        <ejs-textarea id='default1' placeholder="Success" floatLabelType="Auto" cssClass="e-success"></ejs-textarea>
    </div>
    <div>
        <ejs-textarea id='default2' placeholder="Warning" floatLabelType="Auto" cssClass="e-warning"></ejs-textarea>
    </div>
  </div>
`,

   data: function() {
        return { }
    }

});