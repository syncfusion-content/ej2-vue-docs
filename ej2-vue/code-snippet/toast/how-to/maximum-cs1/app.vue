<template>
   <div id='app'>
        <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
        <ejs-toast ref='elementRef' id='element' title='Sample Toast Title' content='Sample Toast content' :position='position' :beforeOpen='beforeOpen'></ejs-toast>
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
  mounted: function() {
      this.toastFlag = 0;
      this.maxCount = 3;
      this.toasts = [
               { title: 'Warning !', content: 'There was a problem with your network connection.' },
               { title: 'Success !', content: 'Your message has been sent successfully.' },
               { title: 'Error !', content: 'A problem has been occurred while submitting your data.' },
               { title: 'Information !', content: 'Please read the comments carefully.' }];
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
       beforeOpen: function(e){
          if (this.maxCount === this.$refs.elementRef.ej2Instances.element.childElementCount) {
               e.cancel =true;
          } else {
               e.cancel = false;
          }
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