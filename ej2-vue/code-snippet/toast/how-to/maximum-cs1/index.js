
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
        <ejs-toast ref='elementRef' id='element' title='Sample Toast Title' content='Sample Toast content' :position='position' :beforeOpen='beforeOpen'></ejs-toast>
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
       showBtnClick: function(args){
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

});