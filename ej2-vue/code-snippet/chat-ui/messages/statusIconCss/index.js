import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
 <div id="container" style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser">
        <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" />
        <e-message :author="michaleUser" text="Yes, the design phase is complete." />
        <e-message :author="currentUser" text="I’ll review it and send feedback by today." />
      </e-messages>
    </ejs-chatui>
  </div>
`,

  data () {
    return {
      currentUser: {
        id: 'user1',
        user: 'Albert',
        statusIconCss: 'e-icons e-user-online'
      },
      michaleUser: {
        id: 'user2',
        user: 'Michale Suyama',
        statusIconCss: 'e-icons e-user-away'
      }
    };
  }

});