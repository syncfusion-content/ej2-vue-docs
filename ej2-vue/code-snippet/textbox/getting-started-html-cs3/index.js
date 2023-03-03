
import Vue from 'vue';


new Vue({
	el: '#app',
	template: `
    <div class ='wrap'>
        <div id ='input-container'>
            <input class="e-input" type="text" placeholder="Enter Name" value="John" readonly/>

            <div class="e-float-input">
                <input type='text' required readonly value="John"/>
                <span class="e-float-line"></span>
                <label class="e-float-text e-label-top">Enter Name</label>
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
            inputElement[i].addEventListener('focus', () => {
                let parentElement = this.parentNode;
                if (parentElement.classList.contains('e-input-in-wrap')) {
                    parentElement.parentNode.classList.add('e-input-focus');
                } else {
                    this.parentNode.classList.add('e-input-focus');
                }
            });
            inputElement[i].addEventListener('blur', () => {
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