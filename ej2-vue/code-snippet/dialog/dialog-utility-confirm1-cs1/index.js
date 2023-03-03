
import Vue from 'vue';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);


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
            DialogUtility.confirm({
                title: ' Confirmation Dialog',
                content: "This is a Confirmation Dialog!",
                okButton: {  text: 'OK', click: this.okClick },
                cancelButton: {  text: 'Cancel', click: this.cancelClick },
                showCloseIcon: true,
                closeOnEscape: true
            });
        },
       okClick: function() {
            alert('you clicked OK button');
        },
        cancelClick: function() {
            alert('you clicked Cancel button');
        }
    }

});