

<template>
    <div>
        <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click.native="dialogBtnClick">Open Alert Dialog</ejs-button></center>
    </div>
</template>
<script>
import Vue from 'vue';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);

export default {
    data: function() {
        return { }
    },
    methods: {
        dialogBtnClick: function() {
            DialogUtility.alert('This is an Alert Dialog!');
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



