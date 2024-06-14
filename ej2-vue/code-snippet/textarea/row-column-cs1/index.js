
import Vue from 'vue';
import { TextAreaPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextAreaPlugin);


new Vue({
	el: '#app',
	template: `
    <div class ='wrap'>
        <div id ='input-container'>
        <div>
            <ejs-textarea id="default1" placeholder="Enter your comments" floatLabelType="Auto" rows="3" cols="35"></ejs-textarea>
        </div>
        <div>
            <ejs-textarea id="default2" placeholder="Enter your comments" floatLabelType="Auto" rows="5" cols="40"></ejs-textarea>
        </div>
        </div>
    </div>
`,

   data: function() {
        return { }
    }

});