
import Vue from "vue";
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);
let dialogObj = undefined;
let value ;

new Vue({
	el: '#app',
	template: `
  <div class="predefinedDialogs">
    <ejs-button id="promptDlgBtn"  v-on:click.native="promptBtnClick" :isPrimary="true">Prompt</ejs-button>
    <span id="statusText"></span>
  </div>
`,

  data: function () {
    return {};
  },
  methods: {
     promptBtnClick: function () {
            document.getElementById("statusText").style.display="none";
            dialogObj = DialogUtility.confirm({
                title: "Join chat group",
                content:'<P>Enter your name:</p><input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
                okButton: { click:this.promptOkAction },
                cancelButton: { click:this.promptCancelAction},
                position: { X: 'center', Y: 'center' }
            });
        },
    promptOkAction:function () {
        value = document.getElementById("inputEle").value;
        if(value ==""){
            dialogObj.hide();
            document.getElementById("statusText").innerHTML="The user's input is returned as\" \"";
            document.getElementById("statusText").style.display="block";
        }
        else{
            dialogObj.hide();
            document.getElementById("statusText").innerHTML="The user's input is returned as" +" "+ value;
            document.getElementById("statusText").style.display="block";
        }
        },
        promptCancelAction:function () {
            dialogObj.hide ();
            document.getElementById("statusText").innerHTML ="The user canceled the prompt dialog";
            document.getElementById("statusText").style.display="block";
        }
  },

});