
import Vue from "vue";
import { ToastPlugin, Toast } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ToastPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
       <ejs-button ref='showButtonRef' class="e-btn" id="showToast" v-on:click.native="showBtnClick">Show Types</ejs-button>
       <ejs-toast ref='elementRef' id='element' :position='position'></ejs-toast>
   </div>
`,

  name: 'app',
  data: function(){
        return {
            position: { X: 'Right', Y: 'Bottom' }
        }
   },
    mounted: function() {
    this.toastFlag = 0;
     this.toasts = [
                { title: 'Warning !', content: 'There was a problem with your network connection.', cssClass: 'e-toast-warning' },
                { title: 'Success !', content: 'Your message has been sent successfully.', cssClass: 'e-toast-success'},
                { title: 'Error !', content: 'A problem has been occurred while submitting your data.', cssClass: 'e-toast-danger' },
                { title: 'Information !', content: 'Please read the comments carefully.', cssClass: 'e-toast-info' }];
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
       }
    }

});