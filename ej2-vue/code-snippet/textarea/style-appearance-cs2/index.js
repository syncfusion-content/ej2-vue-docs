
import Vue from 'vue';
import { TextAreaPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextAreaPlugin);


new Vue({
	el: '#app',
	template: `
  <div class ='wrap'>
    <label className="custom-input-label"> Filled TextArea </label>
    <div id='container'>
        <ejs-textarea id='filled' placeholder="Filled" floatLabelType="Auto" cssClass="e-filled"></ejs-textarea>
    </div>

    <label className="custom-input-label"> Outlined TextArea </label>
    <div id='container1'>
        <ejs-textarea id='outlined' placeholder="Outlined" floatLabelType="Auto" cssClass="e-outline"></ejs-textarea>
    </div>
  </div>
`,

   data: function() {
        return { }
    }

});