import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 380px; width: 450px;">
    <ejs-chatui :user="currentUser">
      <ejs-messages>
        <ejs-message :author="currentUser" text="Want to get coffee tomorrow?"></ejs-message>
        <ejs-message :author="michaleUser" text="Sure! What time?"></ejs-message>
        <ejs-message :author="currentUser" text="How about 10 AM?"></ejs-message>
      </ejs-messages>
    </ejs-chatui>
  </div>
`,

  data () {
    return {
      currentUser: {
        id: "user1",
        user: "Albert",
      },
      michaleUser: {
        id: "user2",
        user: "Michale Suyama",
      }
    }
  }

});