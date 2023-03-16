
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
    <ejs-button id="confirmDlgBtn"  v-on:click.native="confirmBtnClick" cssClass = "e-success">Confirm</ejs-button>
    <span id="statusText"></span>
  </div>
`,

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

});