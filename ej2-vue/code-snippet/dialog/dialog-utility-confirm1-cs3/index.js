
import Vue from 'vue';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);
let DialogObj = undefined;


new Vue({
	el: '#app',
	template: `
    <div>
        <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click.native="dialogBtnClick">Open Confirm Dialog</ejs-button></center>
    </div>
`,

    data: function() {
        return { }
    },
    methods: {
        dialogBtnClick: function() {
            //  Initialize and render Confirm dialog with options
            DialogObj = DialogUtility.confirm({
                title: 'Confirmation Dialog',
                content: "This is a Confirmation Dialog!",
                okButton: {  text: 'OK', click: this.okClick },
                cancelButton: {  text: 'Cancel', click: this.cancelClick },
                showCloseIcon: true,
                closeOnEscape: true,
                animationSettings: { effect: 'Zoom' }
            });
        },
       okClick: function() {
            alert('you clicked OK button');
        },
        cancelClick: function() {
            //Hide the dialog
            DialogObj.hide();
        }
    }

});