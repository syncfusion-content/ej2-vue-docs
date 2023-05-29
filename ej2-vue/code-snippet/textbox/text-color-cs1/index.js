
import Vue from 'vue';


new Vue({
	el: '#app',
	template: `
    <div class ='wrap'>
        <div id ='input-container'>
            <label>Normal Input</label>
            <div class="e-input-group">
                <input class="e-input" type="text" placeholder="Enter numeric values" @keyup="onKeyup" />
            </div>
                <label> Floating Input </label>
            <div class="e-float-input">
                <input type="text" @keyup="onKeyup" required />
                <span class="e-float-line"> </span>
                <label class="e-float-text">Enter numeric values</label>
            </div>
        </div>
    </div>
`,

   data: function() {
        return { }
    },
    methods: {
        // To Configure RegExp for predicting Numeric values on keyUp event function

        onKeyup(e) {
            let str = e.target.value.match(/^[0-9]+$/);
            if (!((str && str.length > 0)) && e.target.value.length) {
            e.target.parentElement.classList.add('e-error');
            } else {
            e.target.parentElement.classList.remove('e-error');
            }
        }
    }
    mounted: function() {
        // To get the all input fields and its container.

        let inputElement = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group input');

        // Add 'e-input-focus' class to the input for achive ripple effect when focus on the input field.

        for (let i = 0; i < inputElement.length; i++) {
            inputElement[i].addEventListener("focus", function () {
                let parentElement = this.parentNode;
                if (parentElement.classList.contains('e-input-in-wrap')) {
                    parentElement.parentNode.classList.add('e-input-focus');
                } else {
                    this.parentNode.classList.add('e-input-focus');
                }
            });
            inputElement[i].addEventListener("blur", function () {
                let parentElement = this.parentNode;
                if (parentElement.classList.contains('e-input-in-wrap')) {
                    parentElement.parentNode.classList.remove('e-input-focus');
                } else {
                    this.parentNode.classList.remove('e-input-focus');
                }
            });
        }
    });

});