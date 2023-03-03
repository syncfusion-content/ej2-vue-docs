

<template>
  <div class="predefinedDialogs">
    <ejs-button id="confirmDlgBtn"  v-on:click.native="confirmBtnClick" cssClass = "e-success">Confirm</ejs-button>
    <span id="statusText"></span>
  </div>
</template>

<style>
    @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
#statusText {
  font-size: 16px;
  margin-top: 20px;
}
.predefinedDialogs {
  height: 100%;
  min-height: 350px;
}
</style>

<script>
import Vue from "vue";
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);
let dialogObj = undefined;
export default {
  data: function () {
    return {};
  },
  methods: {
    confirmBtnClick: function () {
        document.getElementById("statusText").style.display="none";
        dialogObj = DialogUtility.confirm({
            title: " Delete multiple items",
            content: "Are you sure you want to permanently delete these items?",
            okButton: { click:this.confirmOkAction},
            cancelButton: { click:this.confirmCancelAction},
        });
      },
      confirmOkAction:function () {
          dialogObj.hide();
          document.getElementById("statusText").innerHTML="The user confirmed the dialog box";
          document.getElementById("statusText").style.display="block";
      },
      confirmCancelAction:function(){
          dialogObj.hide();
          document.getElementById("statusText").innerHTML="The user canceled the dialog box.";
          document.getElementById("statusText").style.display="block";
      }
  },
}
</script>


