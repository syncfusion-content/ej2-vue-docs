
import Vue from "vue";
import { ToastPlugin, Toast } from "@syncfusion/ej2-vue-notifications";

Vue.use(ToastPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
         <ejs-toast ref='elementRef' timeOut=0 id='element' title='Matt sent you a friend request' content='You have a new friend request yet to accept'></ejs-toast>
    </div>
`,

  name: 'app',
  mounted: function() {
      this.$refs.elementRef.show();
  }

});