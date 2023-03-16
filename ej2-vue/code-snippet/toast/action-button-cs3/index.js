
import Vue from "vue";
import { ToastPlugin, Toast, ToastUtility } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { closest } from '@syncfusion/ej2-base';

Vue.use(ToastPlugin);
Vue.use(ButtonPlugin);
let ToastObj = undefined;


new Vue({
	el: '#app',
	template: `
   <div id='app'>
       <center><ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click.native="showToast">Show Toast</ejs-button></center>
   </div>
`,

  name: 'app',
  data: function(){
    return { }
  },
  methods: {
      showToast: function(args){
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
      }
      toastClick: function(){
        console.log('Toast click event triggered');
      }
  }

});