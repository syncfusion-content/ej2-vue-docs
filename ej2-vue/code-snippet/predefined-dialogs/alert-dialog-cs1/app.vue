<template>
  <div class="predefinedDialogs">
    <ejs-button id="alertDlgBtn" v-on:click="alertBtnClick" cssClass="e-danger">Alert</ejs-button>
    <span id="statusText"></span>
  </div>
</template>

<script>
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

let dialogObj = undefined;
export default {
name: "App",
components: {
"ejs-button":ButtonComponent
},
  data: function () {
    return {};
  },
  methods: {
    alertBtnClick: function () {
      document.getElementById("statusText").style.display = "none";
      dialogObj = DialogUtility.alert({
        title: "Low battery",
        content: "10% of battery remaining",
        okButton: { click: this.alertOkAction },
        position: { X: "center", Y: "center" },
      });
    },
    alertOkAction: function () {
      dialogObj.hide();
      document.getElementById("statusText").innerHTML =
        "The user closed the Alert dialog.";
      document.getElementById("statusText").style.display = "block";
    },
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
#statusText {
  font-size: 16px;
  margin-top: 20px;
}
.predefinedDialogs {
  height: 100%;
  min-height: 350px;
}
</style>