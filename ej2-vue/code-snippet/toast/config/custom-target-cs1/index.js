
import Vue from 'vue';
import { ToastPlugin } from '@syncfusion/ej2-vue-notifications';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ToastPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click.native="showBtnClick">Show Toast</ejs-button>
       <ejs-toast ref='defaultRef' title='File Downloading' content='<div class="progress"><span style="width: 80%"></span></div>' :position='position' showCloseButton=true target='#toast_target' newestOnTop=true showProgressBar=true progressDirection="Ltr"></ejs-toast>
       <br/><br/>
       <div id='toast_target'></div>
  </div>
`,

  name: 'app',
  data: function(){
    return {
        position: { X: 'Center' }
    }
  },
  mounted: function() {
      this.$refs.defaultRef.show();
  },
  methods: {
      showBtnClick: function(args){
          this.$refs.defaultRef.show();
      }
  }

});