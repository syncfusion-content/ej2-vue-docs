
import Vue from 'vue';
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { ListViewPlugin } from '@syncfusion/ej2-vue-lists';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SplitButtonPlugin);
Vue.use(ListViewPlugin);


new Vue({
	el: '#app',
	template: `
<div>
    <ejs-splitbutton target='#listview'>ClipBoard</ejs-splitbutton>
    <ejs-listview id='listview' :dataSource='items' :fields='fields' sortOrder='Descending'>
    </ejs-listview>
</div>
`,

    data () {
        return {
            items:[
            {
                'text': 'Cut',
                'category': 'Basic'
            },
            {
                'text': 'Copy',
                'category': 'Basic'
            },
            {
                'text': 'Paste',
                'category': 'Basic'
            },
            {
                'text': 'Paste as Formula',
                'category': 'Advanced'
            },
            {
                'text': 'Paste as Hyperlink',
                'category': 'Advanced'
            }],
            fields: { groupBy: 'category' }
        };
    }

});