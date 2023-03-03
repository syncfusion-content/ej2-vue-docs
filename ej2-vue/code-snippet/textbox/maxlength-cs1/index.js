
import Vue from 'vue';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(TextBoxPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
        <div class="multiline">
            <label class="label">Add maxlength attribute through inline</label>
            <ejs-textbox id='default' :multiline="true" placeholder="Enter your address" floatLabelType="Auto" maxlength="15"></ejs-textbox>
            <label class="label">Add maxlength attribute through addAttributes method</label>
            <ejs-textbox id='default' :multiline="true" placeholder="Enter your address" floatLabelType="Auto" ref="textareaObj"></ejs-textbox>
             <ejs-button id='modalbtn' v-on:click.native="modalBtnClick">Add max length</ejs-button>
        </div>
    </div>
`,

 data: function(){
        return {
             modalBtnClick: function() {
                 this.$refs.textareaObj.addAttributes({maxlength: 15});
             }
        }
    }

});