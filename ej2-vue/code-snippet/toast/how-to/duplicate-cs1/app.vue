<template>
   <div id='app'>
        <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
        <ejs-toast ref='elementRef' id='element' title='Sample Toast Title' content='Sample Toast content' :position='position' :beforeOpen='beforeOpen' :close="onClose" :created="onCreated"></ejs-toast>
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
            position: { X: 'Center' }
        }
   },
  mounted: function() {
      this.toastFlag = 0;
      this.toasts = [
               { title: 'Warning !', content: 'There was a problem with your network connection.', isOpen: false },
               { title: 'Success !', content: 'Your message has been sent successfully.', isOpen: false },
               { title: 'Error !', content: 'A problem has been occurred while submitting your data.', isOpen: false }];
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
        if (this.preventDuplicate(e)) {
            e.cancel = true;
        }
       },
       onCreated: function() {
        if (!isNullOrUndefined(this.toastInstance)){
            this.toastInstance.show(this.toasts[this.toastFlag]);
            ++this.toastFlag;
        }
        },
        onClose: function(e) {
            for (let i = 0; i < this.toasts.length; i++) {
                if (this.toasts[i].title === e.options.title) {
                    this.toasts[i].isOpen = false;
                }
            }
        },
        preventDuplicate: function(e){
           for (let i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].title === e.options.title && !this.toasts[i].isOpen) {
                this.toasts[i].isOpen = true;
                return false;
            }
           }
           return true;
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