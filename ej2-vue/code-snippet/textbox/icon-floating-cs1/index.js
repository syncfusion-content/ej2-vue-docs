
import Vue from 'vue';

);
new Vue({
	el: '#app',
	template: `
    <div class ='wrap'>
        <div id ='input-container'>
            <h4> TextBox with icons </h4>
            <div class="e-input-group">
            <input class="e-input" type="text" placeholder="Enter Date"/>
            <span class="e-input-group-icon e-input-popup-date"></span>
            </div>

            <div class="e-input-group e-float-icon-left">
            <span class="e-input-group-icon e-input-date"></span>
            <div class="e-input-in-wrap">
                <input class="e-input" type="text" placeholder="Enter Date"/>
            </div>
            </div>

            <div class="e-input-group e-float-icon-left">
            <span class="e-input-group-icon e-input-date"></span>
            <div class="e-input-in-wrap">
                <input class="e-input" type="text" placeholder="Enter Date"/>
                <span class="e-input-group-icon e-input-down"></span>
            </div>
            </div>

            <h4> Floating label with icons </h4>

            <div class="e-float-input e-input-group">
                <input required type="text" />
                <span class="e-float-line"></span>
                <label class="e-float-text"> Enter Date </label>
                <span class="e-input-group-icon e-input-popup-date"></span>
            </div>

            <div class="e-float-input e-input-group e-float-icon-left">
                <span class="e-input-group-icon e-input-date"></span>
                <div class="e-input-in-wrap">
                    <input required type="text" />
                    <span class="e-float-line"></span>
                    <label class="e-float-text"> Enter Date </label>
                </div>
            </div>

            <div class="e-float-input e-input-group e-float-icon-left">
                <span class="e-input-group-icon e-input-date"></span>
                <div class="e-input-in-wrap">
                    <input required type="text" />
                    <span class="e-float-line"></span>
                    <label class="e-float-text"> Enter Date </label>
                    <span class="e-input-group-icon e-input-down"></span>
                </div>
            </div>
        </div>
    </div>
`,

   data: function() {
        return { }
    },
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

        // Add 'e-input-btn-ripple' class to the icon element for achive ripple effect when click on the icon.

        var inputIcon = document.querySelectorAll('.e-input-group-icon');
        for (let i = 0; i < inputIcon.length; i++) {
            inputIcon[i].addEventListener('mousedown', function () {
                this.classList.add('e-input-btn-ripple');
            });
            inputIcon[i].addEventListener('mouseup', function () {
                let element = this;
                setTimeout(function () {
                    element.classList.remove('e-input-btn-ripple');
                }, 500);
            });
        }
    },

});