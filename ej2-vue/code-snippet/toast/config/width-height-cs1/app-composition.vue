<template>
  <div id="app">
       <div id='container'>
        <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
        <ejs-toast ref='defaultRef' id='element' title='Matt sent you a friend request' content='You have a new friend request yet to accept' :position='position' width=400 height=150></ejs-toast>
            <div class='row' style="padding-top: 20px" id= "toast_pos_target">
              <table>
                <tr>
                  <td>
                      <div style='padding:25px 0 0 0;'>
                          <ejs-radiobutton ref='topAlign' label='Top' name='toast' value='Target' :change='checkboxChange'></ejs-radiobutton>
                      </div>
                  </td>
                  <td>
                      <div style='padding:25px 0 0 0;'>
                          <ejs-radiobutton ref='bottomAlign' label='Bottom' checked=true name='toast' value='Global' :change='checkboxChange1'></ejs-radiobutton>
                      </div>
                  </td>
                </tr>
                <tr>
                   <td>
                     <div style='padding:25px 0 0 0;'>
                          <ejs-checkbox label='100% Width' :change='onChange'></ejs-checkbox>
                      </div>
                   </td>
                </tr>
              </table>
            </div>
        <br/><br/>
    </div>
  </div>
</template>

<script setup>

import { ToastComponent as EjsToast } from '@syncfusion/ej2-vue-notifications';
import { ButtonComponent as EjsToast, RadioButtonComponent as EjsRadiobutton, CheckBoxComponent as EjsCheckbox } from '@syncfusion/ej2-vue-buttons';
import { ref, onMounted } from 'vue';

const defaultRef = ref(null);
let toast;

const position = { X: "Center", Y: "Bottom" };

onMounted(() => {
    defaultRef.value.show();
});

const showBtnClick = function(){
    defaultRef.value.show();
};

const onChange = function(e) {
    if (e.checked) {
       toast.hide();
       toast.width = "100%";
       toast.title="";
       toast.content="<div class='e-custom'>Take a look at our next generation <b>Javascript</b> <a href='https://ej2.syncfusion.com/home/index.html' target='_blank'>LEARN MORE</a></div>";
       toastShow(timeDelay);
    } else {
       toast.hide();
       toast.width= 300;
       toast.title= 'Matt sent you a friend request',
       toast.content='You have a new friend request yet to accept',
       toastShow(timeDelay);
   }
};

const checkboxChange = function(e) {
  if (e.event.target.checked) {
      toast.position.Y = "Top";
      toast.hide();
      toastShow(timeDelay);
  }
};

const checkboxChange1 = function(e) {
  if (e.event.target.checked) {
      toast.position.Y = "Bottom";
      toast.hide();
      toastShow(timeDelay);
  }
};

const toastShow = function(timeOutDelay) {
   setTimeout(() => {
      toast.show();
  }, timeOutDelay);
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>

<style lang="scss">
#container {
  margin: 25px;
}

#loader {
  color: #008cff;
  height: 40px;
  left: 45%;
  position: absolute;
  top: 45%;
  width: 30%;
}

table td {
width: 50%;
}
</style>