
import Vue from 'vue';
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { DialogPlugin } from "@syncfusion/ej2-vue-popups";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SplitButtonPlugin);
Vue.use(DialogPlugin);


new Vue({
	el: '#app',
	template: `
<div>
    <ejs-splitbutton :items='items' :select='onSelect'>Help</ejs-splitbutton>
    <ejs-dialog id="dialog" content="Are you sure want to update?" header='Software Update' :buttons='buttons' width='250px' :visible='false' ></ejs-dialog>
</div>
`,

    data () {
        return {
            items:[
            {
                text: 'Help'
            },
            {
                text: 'About'
            },
            {
                text: 'Update...'
            }],
            buttons: [{
                buttonModel: {
                    isPrimary: true,
                    content: 'Ok',
                },
                click: function () {
                    this.hide();
                }
            },
            {
                buttonModel: {
                    isPrimary: true,
                    content: 'Cancel',
                },
                click: function () {
                    this.hide();
                }
            }]
        };
    },
    methods: {
        onSelect: function(args) {
            if (args.item.text === 'Update...') {
                document.getElementById("dialog").ej2_instances[0].show();
            }
        }
    }

});