<template>
  <div class="col-lg-8 control-section msg-icon-section">
    <div class="content-section">
      <ejs-button id="btn1" ref="defaultBtn" content="Show Default Message" cssClass="e-outline e-primary msg-hidden"
        v-on:click="defaultClick"></ejs-button>
      <ejs-message id="msg_default_icon" ref="msgDefault" :showCloseIcon="showCloseIcon" :closed="defaultClosed">Editing
        is restricted</ejs-message>
      <ejs-button id="btn2" ref="infoBtn" content="Show Info Message" cssClass="e-outline e-primary e-info msg-hidden"
        v-on:click="infoClick"></ejs-button>
      <ejs-message id="msg_info_icon" ref="msgInfo" severity="Info" :showCloseIcon="showCloseIcon"
        :closed="infoClosed">Please read the comments carefully</ejs-message>
      <ejs-button id="btn3" ref="successBtn" content="Show Success Message"
        cssClass="e-outline e-primary e-success msg-hidden" v-on:click="successClick"></ejs-button>
      <ejs-message id="msg_success_icon" ref="msgSuccess" severity="Success" :showCloseIcon="showCloseIcon"
        :closed="successClosed">Your message has been sent successfully</ejs-message>
      <ejs-button id="btn4" ref="warningBtn" content="Show Warning Message"
        cssClass="e-outline e-primary e-warning msg-hidden" v-on:click="warningClick"></ejs-button>
      <ejs-message id="msg_warning_icon" ref="msgWarning" severity="Warning" :showCloseIcon="showCloseIcon"
        :closed="warningClosed">There was a problem with your network connection</ejs-message>
      <ejs-button id="btn5" ref="errorBtn" content="Show Error Message" cssClass="e-outline e-primary e-error msg-hidden"
        v-on:click="errorClick"></ejs-button>
      <ejs-message id="msg_error_icon" ref="msgError" severity="Error" :showCloseIcon="showCloseIcon"
        :closed="errorClosed">A problem has been occurred while submitting your data</ejs-message>
    </div>
  </div>
</template>
<script setup>
import { MessageComponent as EjsMessage } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const showCloseIcon = true;
const defaultClick = function () {
  show(this.$refs.msgDefault, this.$refs.defaultBtn);
}
const infoClick = function () {
  show(this.$refs.msgInfo, this.$refs.infoBtn);
}
const successClick = function () {
  show(this.$refs.msgSuccess, this.$refs.successBtn);
}
const warningClick = function () {
  show(this.$refs.msgWarning, this.$refs.warningBtn);
}
const errorClick = function () {
  show(this.$refs.msgError, this.$refs.errorBtn);
}
const defaultClosed = function () {
  this.$refs.defaultBtn.ej2Instances.element.classList.remove("msg-hidden");
}
const infoClosed = function () {
  this.$refs.infoBtn.ej2Instances.element.classList.remove("msg-hidden");
}
const warningClosed = function () {
  this.$refs.warningBtn.ej2Instances.element.classList.remove("msg-hidden");
}
const successClosed = function () {
  this.$refs.successBtn.ej2Instances.element.classList.remove("msg-hidden");
}
const errorClosed = function () {
  this.$refs.errorBtn.ej2Instances.element.classList.remove("msg-hidden");
}
const show = function (message, btn) {
  message.ej2Instances.visible = true;
  btn.ej2Instances.element.classList.add("msg-hidden");
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/message/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/button/material.css";

  .msg-icon-section .content-section {
    margin: 0 auto;
    max-width: 450px;
    padding-top: 10px;
  }

  .msg-icon-section .e-message {
    margin: 10px 0;
  }

  .msg-icon-section .e-btn {
    display: block;
    margin: 10px 0;
  }

  .msg-icon-section .e-btn.msg-hidden {
    display: none;
  }
</style>