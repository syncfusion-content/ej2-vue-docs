
import Vue from 'vue';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(TextBoxPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
        <div class="multiline">
            <label class="label">Float label type auto</label>
            <ejs-textbox id='default' :multiline="true" placeholder="Enter your address" floatLabelType="Auto" maxlength="15"></ejs-textbox>
            <label class="label">Float label type always</label>
            <ejs-textbox id='default' :multiline="true" placeholder="Enter your address" floatLabelType="Always"></ejs-textbox>
            <label class="label">Float label type never</label>
            <ejs-textbox id='default' :multiline="true" placeholder="Enter your address" floatLabelType="Never"></ejs-textbox>
        </div>
    </div>
`,

 data: function(){
        return {
             clickHandler: function(event) {
                  this.$refs.textareaObj.addAttributes({maxlength: 15});
             }
        }
    }

});