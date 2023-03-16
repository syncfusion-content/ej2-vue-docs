
import Vue from 'vue';

);
new Vue({
	el: '#app',
	template: `
    <div class ='wrap'>
        <div id ='input-container'>
           <h4> Floating label without required attribute </h4>
            <div class="e-float-input">
                <input type="text"  id='inpt1' />
                <span class="e-float-line"></span>
                <label class="e-float-text"> Enter Value </label>
            </div>
        </div>
    </div>
`,

   data: function() {
        return { }
    },
    mounted: function() {
        /* To get the Input element */
        let inputElement = document.getElementById('inpt1');

        /* Update the label position based on Input value */
        updateLabelState(inputElement.value, inputElement.parentElement.querySelector('.e-float-text'));

        inputElement.addEventListener("focus", function () {
            let label = this.parentElement.querySelector('.e-float-text');
            label.classList.add('e-label-bottom');
            label.classList.remove('e-label-top');
        });

        inputElement.addEventListener("blur", function () {
            updateLabelState(this.value, this.parentElement.querySelector('.e-float-text'));
        });

        inputElement.addEventListener("input", function () {
            updateLabelState(this.value, this.parentElement.querySelector('.e-float-text'));
        });

        /* Update the label position based on Input value */

            /* e-label-top - Floats the label above of the TextBox */
            /* e-label-bottom - Label to be placed as placeholder for the TextBox */

        function updateLabelState(value,label) {
            if (value) {
                label.classList.add('e-label-top');
                label.classList.remove('e-label-bottom');
            } else {
                label.classList.add('e-label-bottom');
                label.classList.remove('e-label-top');
            }
        }
    }

});