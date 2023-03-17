
import Vue from "vue";
import { ToastPlugin, Toast, ToastClickEventArgs  } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ToastPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click.native="showBtnClick">Show Toast</ejs-button>
       <ejs-toast ref='elementRef' id='element' :position='position' :click='onClick'></ejs-toast>
        <div id='templateToast' style="display: none;color:red"> System affected by virus !!! </div>
    </div>
`,

  name: 'app',
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
       showBtnClick: function(args){
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

});