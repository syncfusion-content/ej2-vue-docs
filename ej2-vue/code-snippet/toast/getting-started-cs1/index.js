
import Vue from 'vue';
import { ToastPlugin } from '@syncfusion/ej2-vue-notifications';
Vue.use(ToastPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
       <ejs-toast ref='defaultRef' title='Matt sent you a friend request' timeOut=0 content='Hey, wanna dress up as wizards and ride our hoverboards?'></ejs-toast>
  </div>
`,

  name: 'app',
  mounted: function() {
      this.$refs.defaultRef.show();
  }

});