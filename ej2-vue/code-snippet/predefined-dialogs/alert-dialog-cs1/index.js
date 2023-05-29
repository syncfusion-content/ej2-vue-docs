
import Vue from "vue";
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);
let dialogObj = undefined;

new Vue({
	el: '#app',
	template: `
  <div class="predefinedDialogs">
    <ejs-button id="alertDlgBtn" v-on:click.native="alertBtnClick" cssClass="e-danger">Alert</ejs-button>
    <span id="statusText"></span>
  </div>
`,

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

});