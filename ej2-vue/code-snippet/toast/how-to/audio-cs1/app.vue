<template>
   <div id='app'>
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
        <ejs-toast ref='elementRef' id='element' title='Matt sent you a friend request' content='You have a new friend request yet to accept' :position='position' :beforeOpen='beforeOpen'></ejs-toast>
   </div>
</template>

<script>

import { ToastComponent } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-toast":ToastComponent
},
  data: function(){
        return {
            position: { X: 'Right', Y: 'Bottom' }
        }
   },
  methods: {
       showBtnClick: function(){
           this.$refs.elementRef.show();
       },
       beforeOpen: function(){
          var audio = new Audio('https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7');
          audio.play();
       }
    }
}
</script>
<style>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css';
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