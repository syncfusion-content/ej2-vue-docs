
import Vue from 'vue';
import { SwitchPlugin, ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SwitchPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <form>
        <table class='size'>
            <tr>
                <td class='lSize'><label>USB</label></td>
                <td>
                    <ejs-switch id="switch1" name="tethering" value="USB" checked=true></ejs-switch>
                </td>
            </tr>
            <tr>
                <td class='lSize'><label>Wi-Fi</label></td>
                <td>
                    <ejs-switch id="switch2" name="hotspot" value="wifi" checked=true></ejs-switch>
                </td>
            </tr>
            <tr>
                <td class='lSize'><label class="e-disabled">Bluetooth</label></td>
                <td>
                    <ejs-switch id="switch3" name="tethering" value="bluetooth" disabled=true></ejs-switch>
                </td>
            </tr>
            <tr>
                <td>
                    <ejs-button id="btn" isPrimary=true>Submit</ejs-button>
                </td>
            </tr>
        </table>
    </form>
`,

});