<template>
    <div>
        <div id="target">
            <center> <ejs-button id="dialogbtn" v-on:click="btnClick">Open</ejs-button></center>
            <ejs-dialog id="dialog" ref="Dialog" :header='header' :target='target' :width='width' :buttons='buttons'
                :visible='visible' :content='content' :animationSettings='animateSettings' :showCloseIcon="showCloseIcon">
            </ejs-dialog>

            <ejs-dialog id="modalDialog" ref="ModalDialog" :header='model_header' :isModal='isModal' :target='target'
                :buttons='mbuttons' :animationSettings='animationSettings' :visible='visible'>
            </ejs-dialog>
        </div>

    </div>
</template>
<script setup>

import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref } from 'vue';

const Dialog = ref(null);
const ModalDialog = ref(null);
const header = 'User details';
const content = "<form><div class='form-group'><label for='name'>Name:</label>" +
    "<input type='name' value='' class='form-control' id='name'>" +
    "</div><div class='form-group'><label for='email'>Email Id:</label>" +
    "<input type='email' value='user@syncfusion.com' class='form-control' id='email'>" +
    "</div><div class='form-group'><label for='contact'>Contact Number:</label>" +
    "<input type='contact' class='form-control' id='contact'>" +
    "</div><div class='form-group'><label for='address'>Address:</label>" +
    "<textarea class='form-control' rows='2' id='address'></textarea>" +
    "</div></form>";
const showCloseIcon = true;
const visible = false;

const target = document.querySelector('body');
const width = '400px';
const animationSettings = { effect: 'Zoom' };
const animateSettings = { effect: 'Zoom' };
const model_header = 'User details';
const isModal = true;


const btnClick = () => {
    Dialog.value.show();
};
const createModalDialog = () => {
    Dialog.value.hide();
    ModalDialog.value.ej2Instances.content = getDynamicContent();
    ModalDialog.value.show();
};
const showDialog = () => {
    ModalDialog.value.hide();
    Dialog.value.show();
};

const getDynamicContent = () => {
    if (!document.getElementById('dialog')) { return; }
    let input = document.getElementById('dialog').querySelector('#name');
    let email = document.getElementById('dialog').querySelector('#email');
    let contact = document.getElementById('dialog').querySelector('#contact');
    let address = document.getElementById('dialog').querySelector('#address');
    let template = "<div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><b>Confirm your details</b></div>" +
        "</div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='name'> Name: </span>" +
        "</div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='nameValue'>" + input.value + "</span> </div></div>" +
        "<div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='email'> Email: </span>" +
        "</div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='emailValue'>" + email.value +
        "</span></div></div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>" +
        "<span id='Contact'> Contact number: </span></div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>" +
        "<span id='contactValue'>" + contact.value + " </span></div></div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>" +
        "<span id='Address'> Address: </span> </div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='AddressValue'>" + address.value + "</span></div></div>"
    return template;
};
const buttons = [{
    buttonModel: { isPrimary: true, content: 'Submit' }, click: createModalDialog
}
];
const mbuttons = [{
    buttonModel: { isPrimary: true, content: 'Yes' }, click: function () {
        ModalDialog.value.hide();
    }
}, {
    buttonModel: { isPrimary: false, content: 'No' }, click: showDialog
}
];
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

#app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

#modalDialog {
    margin: 20px;
}

html,
body {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.row {
    padding: 10px 3px;
}
</style>