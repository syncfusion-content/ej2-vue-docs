
import Vue from 'vue';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';

Vue.use(TextBoxPlugin);


new Vue({
	el: '#app',
	template: `
    <div class ='wrap'>
        <div id ='input-container'>
           <h4> TextBox with clear button </h4>
            <ejs-textbox id='textbox' floatLabelType="Never" showClearButton="true" placeholder="First Name"></ejs-textbox>
            <h4>Floating TextBox with clear button </h4>
            <ejs-textbox id='textbox' floatLabelType="Auto" showClearButton="true" placeholder="Last Name"></ejs-textbox>
        </div>
    </div>
`,

 data: function() {
        return { }
    }

});