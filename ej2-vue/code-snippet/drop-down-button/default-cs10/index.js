
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { DialogPlugin } from "@syncfusion/ej2-vue-popups";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);
Vue.use(DialogPlugin);


new Vue({
	el: '#app',
	template: `
<div>
    <ejs-dropdownbutton :items='items' iconCss='ddb-icons e-folder'cssClass='e-vertical'
    iconPosition='Top' :select='onSelect'>Move</ejs-dropdownbutton>
    <ejs-dialog id="dialog" content="Move Items To 'Web Team'" header='Move Items' :buttons='buttons' width='250px' height='150px' :visible='false' :position='position'></ejs-dialog>
 </div>
`,

    data () {
        return {
            items:[
            {
                text: 'Archive'
            },
            {
                text: 'Inbox'
            },
            {
                text: 'HR Portal'
            },
            {
                separator: true
            },
            {
                text: 'Other Folder...'
            },
            {
                text: 'Copy to Folder'
            }],
            buttons: [{
                buttonModel: {
                    isPrimary: true,
                    content: 'OK',
                    cssClass: 'e-flat',
                },
                click: function () {
                    this.hide();
                }
            }],
            position: {X: 100, Y: 100}
        };
    },
    methods: {
        onSelect: function(args) {
            if (args.item.text === 'Other Folder...') {
                document.getElementById("dialog").ej2_instances[0].show();
            }
        }
    },

});