
import Vue from "vue";
import { ToastPlugin, Toast } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ToastPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
       <div class="e-float-input"><input class="e-input" id="toast_input_index" required="" value="0"><span class="e-float-line"></span><label class="e-float-text">Enter timeOut</label></div>
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click.native="showBtnClick">Show Toast</ejs-button>
       <ejs-toast ref='elementToastTime' id='elementToastTime' :position='position' title='Anjolie Stokes' content='<p><img src="https://ej2.syncfusion.com/vue/demos/src/toast/resource/laura.png"></p>' width=230 height=250 :buttons='button'></ejs-toast>
   </div>
`,

  name: 'app',
  data: function(){
    return {
        position:  { X: 'Right', Y: 'Bottom' },
        button: [{
            model: { content: "Ignore" }
        }, {
            model: { content: "reply" }
        }]
    }
  },
  methods: {
      showBtnClick: function(args){
          let value = parseInt(document.getElementById('toast_input_index').value)
          this.$refs.elementToastTime.show({timeOut: value});
      }
  }

});