
import Vue from 'vue';

);
new Vue({
	el: '#app',
	template: `
    <div class ='wrap'>
        <div id ='input-container'>
            <h4> Normal Size </h4>
            <div class="e-input-group">
                <input class="e-input" type="text" placeholder="Enter Name" />
            </div>

            <div class="e-float-input">
                <input type='text' required />
                <span class="e-float-line"></span>
                <label class="e-float-text">Enter Name</label>
            </div>

            <div class="e-input-group">
                <input class="e-input" type="text" placeholder="Enter Date" />
                <span class="e-input-group-icon e-input-popup-date"></span>
            </div>

            <h4> Small Size </h4>

            <div class="e-input-group e-small">
                <input class="e-input" type="text" placeholder="Enter Name" />
            </div>

            <div class="e-float-input e-small">
                <input type='text' required />
                <span class="e-float-line"></span>
                <label class="e-float-text">Enter Name</label>
            </div>

            <div class="e-input-group e-small">
                <input class="e-input" type="text" placeholder="Enter Date" />
                <span class="e-input-group-icon e-input-popup-date"></span>
            </div>
        </div>
    </div>
`,

   data: function() {
        return { }
    },
    mounted: function() {
        let input = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group input');
        let inputIcon = document.querySelectorAll('.e-input-group-icon');
        let localObj = this;
        for (let i = 0; i < input.length; i++) {
        //Focus Event binding for input component
            input[i].addEventListener('focus', function() {
               localObj.getParentNode(input[i]).classList.add('e-input-focus');
            });
            //Blur Event binding for input component
            input[i].addEventListener('blur', function() {
                localObj.getParentNode(input[i]).classList.remove('e-input-focus');
            });
        }
        for (let i = 0; i < inputIcon.length; i++) {
            inputIcon[i].addEventListener('mousedown',  function() {
                this.classList.add('e-input-btn-ripple');
            });
            inputIcon[i].addEventListener('mouseup',  function() {
                let ele = this;
                setTimeout( function() {
                         ele.classList.remove('e-input-btn-ripple');
                    },
                500);
            });
        }

    },
    methods: {
        getParentNode: function(element) {
            let parentNode = element.parentNode;
            if (parentNode.classList.contains('e-input-in-wrap')) {
                return parentNode.parentNode;
            }
            return parentNode;
        }
    }

});