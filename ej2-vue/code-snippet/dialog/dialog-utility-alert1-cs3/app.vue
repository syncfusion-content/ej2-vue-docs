<template>
    <div>
        <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click="dialogBtnClick">Open Alert
                Dialog</ejs-button></center>
    </div>
</template>
<script>
import { DialogUtility } from '@syncfusion/ej2-popups';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

export default {
    name: "App",
    components: {
        "ejs-button": ButtonComponent,
    },
    data: function () {
        return {}
    },
    methods: {
        dialogBtnClick: function () {
            DialogUtility.alert({
                title: 'Alert Dialog',
                content: "This is an Alert Dialog!",
                okButton: { text: 'OK', click: okClick },
                showCloseIcon: true,
                closeOnEscape: true,
                animationSettings: { effect: 'Zoom' }
            });
        },
        okClick: function () {
            alert('you clicked OK button');
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}
</style>