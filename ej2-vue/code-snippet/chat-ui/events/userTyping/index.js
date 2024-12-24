import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :userTyping="userTyping"></ejs-chatui>
  </div>
`,

  data () {
    return {
      userTyping: () => {
        // Your required action here
      }
    }
  }

});