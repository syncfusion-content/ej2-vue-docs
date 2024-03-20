
import Vue from 'vue';
import { TextAreaPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextAreaPlugin);


new Vue({
	el: '#app',
	template: `
    <div class ='wrap'>
        <h4> Small Size </h4>
        <div className="e-input-group e-small">
            <ejs-textarea id="default1" className="e-input" placeholder="Enter your comments"></ejs-textarea>
        </div>

        <h4> Bigger Size </h4>
        <div className="e-input-group e-bigger">
            <ejs-textarea id="default2" className="e-input" placeholder="Enter your comments"></ejs-textarea>
        </div>
    </div>
`,

   data: function() {
        return { }
    },
    mounted: function() {
        /* To get the Input elements */
        let inputElement1 = document.getElementById('default1');
        let inputElement2 = document.getElementById('default2');

        inputElement1.addEventListener("focus", function () {
          this.parentElement.classList.add("e-input-focus");
        });

        inputElement1.addEventListener("blur", function () {
          this.parentElement.classList.remove('e-input-focus');
        });

        inputElement2.addEventListener("focus", function () {
          this.parentElement.classList.add("e-input-focus");
        });

        inputElement2.addEventListener("blur", function () {
          this.parentElement.classList.remove('e-input-focus');
        });
    }

});