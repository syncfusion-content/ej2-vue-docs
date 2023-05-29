
import Vue from 'vue';
import { Input, InputObject } from  '@syncfusion/ej2-inputs';


new Vue({
	el: '#app',
	template: `
    <div class ='wrap'>
        <div id ='input-container'>
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
                this.parentNode.classList.add('e-input-focus')
            });
            inputElement[i].addEventListener("blur", function () {
                this.parentNode.classList.remove('e-input-focus')
            });
        }

        // Add 'e-input-btn-ripple' class to the icon element for achive ripple effect when click on the icon.

        var inputIcon = document.querySelectorAll('.e-input-group-icon');
        for (let i = 0; i < inputIcon.length; i++) {
            inputIcon[i].addEventListener('mousedown', function () {
                this.classList.add('e-input-btn-ripple');
            });
            inputIcon[i].addEventListener('mouseup', function () {
                var element = this;
                setTimeout(function () {
                    element.classList.remove('e-input-btn-ripple');
                }, 500);
            });
        }

        let inputObj;

        let element = document.createElement('input');
        document.getElementById('input-container').appendChild(element);
        Input.createInput({
            element: element,
            properties:{
                placeholder:'Enter Name'
            }
        });

        let element1 = document.createElement('input');
        document.getElementById('input-container').appendChild(element1);
        Input.createInput({
            element: element1,
            buttons: ['e-input-group-icon e-input-down'],
            properties:{
                placeholder:'Enter Value'
            }
        });
    }

});