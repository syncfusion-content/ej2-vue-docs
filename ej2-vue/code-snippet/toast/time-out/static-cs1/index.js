
import Vue from "vue";
import { ToastPlugin, Toast } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ToastPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click.native="showBtnClick">Show Toast</ejs-button>
       <ejs-toast ref='element' id='element' :position='position' title='Matt sent you a friend request' content='Hey, wanna dress up as wizards and ride our hoverboards?' showCloseButton=true timeOut=0></ejs-toast>
   </div>
`,

  name: 'app',
  data: function(){
    return {
        position:  { X: "Right" }
    }
  },
  mounted: function() {
      this.$refs.element.show();
  },
  methods: {
      showBtnClick: function(args){
          this.$refs.element.show();
      }
  }

});