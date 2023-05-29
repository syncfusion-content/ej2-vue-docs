
import Vue from 'vue';
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SwitchPlugin);


new Vue({
	el: '#app',
	template: `
        <table class='size'>
            <tr>
                <td class='lSize'>Checked</td>
                <td>
                    <ejs-switch id="switch1" checked=true></ejs-switch>
                </td>
            </tr>
            <tr>
                <td class='lSize'>Unchecked</td>
                <td>
                    <ejs-switch id="switch2"></ejs-switch>
                </td>
            </tr>
        </table>
`,

});