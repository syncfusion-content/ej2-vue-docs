
import Vue from 'vue';
import { TextAreaPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextAreaPlugin);


new Vue({
	el: '#app',
	template: `
    <div class ='wrap'>
        <form id="myForm">
            <span>Please leave your comments</span>
            <br />
            <div id ='input-container'>
            <ejs-textarea id='default' name="myTextarea" placeholder='Enter your comments' floatLabelType='Auto' required=""></ejs-textarea>
            </div>
            <input id="submit" type="submit" value="Submit">
            <input id="reset" type="reset" value="Reset">
        </form>
    </div>
`,

   data: function() {
        return { }
    }

});