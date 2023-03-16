
import Vue from "vue";
import { ToastPlugin, Toast } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ToastPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
        <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click.native="showBtnClick">Show Toast</ejs-button>
        <ejs-toast ref='elementRef' id='element' title='Sample Toast Title' content='Sample Toast content' :position='position' :beforeOpen='beforeOpen' :close="onClose" :created="onCreated"></ejs-toast>
   </div>
`,

  name: 'app',
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
       showBtnClick: function(args){
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
            this.toastInstance.show(this.toasts[this.toastFlag]);
            ++this.toastFlag;
        },
        onClose: function(e) {
            for (let i: number = 0; i < this.toasts.length; i++) {
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

});