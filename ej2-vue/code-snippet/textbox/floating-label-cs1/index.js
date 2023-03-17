
import Vue from 'vue';
import { Input, InputObject } from  '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';


new Vue({
	el: '#app',
	template: `
    <div class ='wrap'>
        <div id="input-container">
            <h4> FloatLabelType as Auto </h4>
        </div>
        <div id="input-container-01">
            <h4> FloatLabelType as Always </h4>
        </div>
        <div id="input-container-02">
            <h4> FloatLabelType as Never </h4>
        </div>
        <div id="input-container-03">
            <h4> Float label input with icons </h4>
        </div>
    </div>
`,

   data: function() {
        return { }
    },
    mounted: function() {
        let inputObj;

        let element = document.createElement('input');
        document.getElementById('input-container').appendChild(element);
        Input.createInput({
            element: element,
            floatLabelType: "Auto",
            properties:{
                placeholder:'Enter Name'
            }
        });

        let element2 = document.createElement('input');
        document.getElementById('input-container-01').appendChild(element2);
        Input.createInput({
            element: element2,
            floatLabelType: "Always",
            properties:{
                placeholder:'Enter Name'
            }
        });

        let element3 = document.createElement('input');
        document.getElementById('input-container-02').appendChild(element3);
        Input.createInput({
            element: element3,
            floatLabelType: "Never",
            properties:{
                placeholder:'Enter Name'
            }
        });

        // Render float label TextBox with icon

        let element4 = document.createElement('input');
        document.getElementById('input-container-03').appendChild(element4);
        Input.createInput({
            element: element4,
            floatLabelType: "Auto",
            buttons: ['e-input-group-icon e-input-down'],
            properties:{
                placeholder:'Enter Value'
            }
        });
    }

});