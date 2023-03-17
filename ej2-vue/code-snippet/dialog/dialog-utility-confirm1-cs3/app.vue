

<template>
    <div>
        <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click.native="dialogBtnClick">Open Confirm Dialog</ejs-button></center>
    </div>
</template>
<script>
import Vue from 'vue';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);
let DialogObj = undefined;

export default {
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
}
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
    #app {
        color: #008cff;
        height: 40px;
        left: 45%;
        position: absolute;
        top: 45%;
        width: 30%;
    }
</style>


