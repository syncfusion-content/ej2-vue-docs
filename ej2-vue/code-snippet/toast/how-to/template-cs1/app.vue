<template>
   <div id='app'>
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
       <ejs-toast ref='elementRef' id='element' :position='position' :click='onClick'></ejs-toast>
        <div id='templateToast' style="display: none;color:red"> System affected by virus !!! </div>
    </div>
</template>

<script>

import { ToastComponent } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-toast":ToastComponent,

},

  data: function(){
        return {
            position:  { X: 'Right', Y: 'Bottom' }
        }
   },
    mounted: function() {
       this.toastFlag = 0;
       this.toasts = [
           { template: '2 Mail has received'},
           { template: 'User Guest Logged in'},
           { template: 'Logging in as Guest'},
           { template: 'Ticket has reserved '},
           { template: '#templateToast' }];
       this.$refs.elementRef.show(this.toasts[this.toastFlag]);
       ++this.toastFlag;
     },
  methods: {
       showBtnClick: function(){
           this.$refs.elementRef.show(this.toasts[this.toastFlag]);
           ++this.toastFlag;
           if (this.toastFlag === (this.toasts.length)) {
              this.toastFlag = 0;
           }
       },
       onClick: function(e){
            e.clickToClose = true;
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