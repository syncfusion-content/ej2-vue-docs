import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 380px; width: 450px;">
    <ejs-chatui :created="created"></ejs-chatui>
  </div>
`,

  data () {
    return {
      created: () => {
        // Your required action here
      }
    }
  }

});