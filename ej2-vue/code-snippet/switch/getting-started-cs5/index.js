
import Vue from 'vue';
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';
import { rippleMouseHandler } from '@syncfusion/ej2-buttons';

enableRipple(true);
Vue.use(SwitchPlugin);

;

new Vue({
	el: '#app',
	template: `
    <table class='switch-control'>
        <tr>
            <td class='lSize'><label for='switch1'>USB Tethering</label></td>
            <td>
                <ejs-switch id="switch1"></ejs-switch>
            </td>
        </tr>
    </table>
`,

    mounted: function(){
        var elemArray = document.querySelectorAll('.switch-control label');
        for (var i = 0, len = elemArray.length; i < len; i++) {
            elemArray[i].addEventListener('mouseup', rippleHandler);
            elemArray[i].addEventListener('mousedown', rippleHandler);
        }
        function rippleHandler(e) {
            var rippleSpan = this.parentElement.nextElementSibling.querySelector('.e-ripple-container');
            rippleSpan && rippleMouseHandler(e, rippleSpan);
        }
    }

});