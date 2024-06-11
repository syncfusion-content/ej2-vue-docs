<template>
   <div id='app'>
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
       <ejs-toast ref='element' id='element' :position='position' title='Matt sent you a friend request' content='Hey, wanna dress up as wizards and ride our hoverboards?' showCloseButton=true timeOut=0></ejs-toast>
   </div>
</template>

<script>

import { ToastComponent } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-toast":ToastComponent,

},

  data: function(){
    return {
        position:  { X: "Right" }
    }
  },
  mounted: function() {
      this.$refs.element.show();
  },
  methods: {
      showBtnClick: function(){
          this.$refs.element.show();
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

.e-laura {
    border-radius: 50%;
    background-image: url('https://ej2.syncfusion.com/demos/src/toast/resource/laura.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 50px !important;
    width: 50px !important;
    margin-bottom: 2px;
    margin-top: auto;
    margin-bottom: auto;
}

</style>