
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div>
        <div id="target" style='border: 1px solid grey;'>
        <table>
        <caption style='height: 18px; background-color: #e0e0e0;'><b>Insert Table</b></caption>
        <tr class='e-row'><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td></tr>
        <tr class='e-row'><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td></tr>
        <tr class='e-row'><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td></tr>
        <tr class='e-row'><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td></tr>
        <tr class='e-row'><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td></tr>
        <tr class='e-row'><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td></tr>
        </table>
        </div>
        <ejs-dropdownbutton target= '#target' iconCss= 'e-icons e-table' cssClass= 'e-vertical' iconPosition= 'Top'>Table</ejs-dropdownbutton>
    </div>
`,

});