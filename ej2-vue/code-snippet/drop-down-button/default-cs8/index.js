
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { ListViewPlugin } from '@syncfusion/ej2-vue-lists';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);
Vue.use(ListViewPlugin);


new Vue({
	el: '#app',
	template: `
<div>
    <ejs-dropdownbutton target= '#listview' iconCss= 'e-icons e-down' cssClass= 'e-caret-hide'></ejs-dropdownbutton>
    <ejs-listview id='listview' :dataSource='dataSource' :fields='fields' showCheckBox= 'true'
    ></ejs-listview>
</div>
`,

    data () {
        return {
            dataSource :[
                { class: 'data', text: 'Print', id: 'data1', category: 'Customize Quick Access Toolbar' },
                { class: 'data', text: 'Save As', id: 'data2', category: 'Customize Quick Access Toolbar' },
                { class: 'data', text: 'Update Folder', id: 'data3', category: 'Customize Quick Access Toolbar' },
                { class: 'data', text: 'Reply', id: 'data4', category: 'Customize Quick Access Toolbar' }
            ],
            fields: { text: 'text', groupBy: 'category' }
        }
    }

});