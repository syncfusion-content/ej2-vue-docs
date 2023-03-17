

<template>
   <div id='app'>
        <div>
            <ejs-button ref='infoButtonRef' class="e-btn e-control e-info" id="info_toast" v-on:click.native="infoToast">Info Message</ejs-button>
            <ejs-button ref='successButtonRef' class="e-btn e-control e-success" id="success_toast" v-on:click.native="successToast">Success Message</ejs-button>
            <ejs-button ref='warningButtonRef' class="e-btn e-control e-warning" id="warning_toast" v-on:click.native="warningToast">Warning Message</ejs-button>
            <ejs-button ref='dangerButtonRef' class="e-btn e-control e-danger" id="danger_toast" v-on:click.native="dangerToast">Danger Message</ejs-button>
        </div>
        <br/>
        <div>
            <center><ejs-button ref='hideButtonRef' class="e-btn" id="hide_toast" v-on:click.native="hideToast">Hide All</ejs-button></center>
        </div>
   </div>
</template>

<script>
import Vue from "vue";
import { ToastPlugin, Toast, ToastUtility } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { closest } from '@syncfusion/ej2-base';

Vue.use(ToastPlugin);
Vue.use(ButtonPlugin);
let ToastObj = undefined;

export default {
  name: 'app',
  data: function(){
    return { }
  },
  methods: {
        infoToast: function(){
            ToastObj = ToastUtility.show('Please read the comments carefully', 'Information', 20000);
        },
        successToast: function(){
            toastObj = ToastUtility.show('Your message has been sent successfully', 'Success', 20000);
        },
        warningToast: function(){
            toastObj = ToastUtility.show('There was a problem with your network connection', 'Warning', 20000);
        },
        dangerToast: function(){
            toastObj = ToastUtility.show('A problem has been occurred while submitting the data', 'Error', 20000);
        },
        hideToast: function(){
            ToastObj.hide('All');
        }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>

<style lang="scss">
#loader {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}
</style>



