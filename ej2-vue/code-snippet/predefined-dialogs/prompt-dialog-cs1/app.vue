

<template>
  <div class="predefinedDialogs">
    <ejs-button id="promptDlgBtn"  v-on:click.native="promptBtnClick" :isPrimary="true">Prompt</ejs-button>
    <span id="statusText"></span>
  </div>
</template>

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

<script>
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

let dialogObj = undefined;
let value ;
export default {
  components: {
    'ejs-button': ButtonComponent
  },
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
}
</script>


