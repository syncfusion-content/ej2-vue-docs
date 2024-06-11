<template>
   <div id='app'>
       <center><ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showToast">Show Toast</ejs-button></center>
   </div>
</template>

<script>

import { ToastUtility } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

let ToastObj = undefined;

export default {
name: "App",
components: {
"ejs-button":ButtonComponent
},

  data: function(){
    return { }
  },
  methods: {
      showToast: function(){
          ToastObj = ToastUtility.show({
            title: 'Toast Title',
            content: 'Toast shown using utility function with ToastModel',
            timeOut: 20000,
            position: { X: 'Right', Y: 'Bottom' },
            showCloseButton: true,
            click: this.toastClick,
            buttons:  [{
                model: { content: 'Close' }, click: this.toastClose
            }]
        });
      },
      toastClose: function(){
        ToastObj.hide();
      },
      toastClick: function(){
        console.log('Toast click event triggered');
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