
import Vue from 'vue';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextBoxPlugin);


new Vue({
	el: '#app',
	template: `
        <div class="multiline">
            <ejs-textbox id='default' :multiline="true" placeholder="Enter your address" floatLabelType="Auto" :input= "inputHandler" maxlength="25"></ejs-textbox>
            <span id='numbercount'></span>
        </div>
    </div>
`,

 data: function(){
        return {
            inputHandler: (args) => {
                let word, addresscountRem, addressCount;
                word = args.value;
                addressCount = word.length;
                addresscountRem = document.getElementById('numbercount');
                addresscountRem.textContent = addressCount+"/25";
            }
        }
    }

});