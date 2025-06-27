import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
 <div id="container" style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :messageToolbarSettings="toolbarSettings">
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
        id: "user1",
        user: "Albert",
      },
      michaleUser: {
        id: "user2",
        user: "Michale Suyama",
      },
      toolbarSettings: {
        items: [
          { type: 'Button', iconCss: 'e-icons e-chat-forward', tooltip: 'Forward' },
          { type: 'Button', iconCss: 'e-icons e-chat-copy', tooltip: 'Copy' },
          { type: 'Button', iconCss: 'e-icons e-chat-reply', tooltip: 'Reply' },
          { type: 'Button', iconCss: 'e-icons e-chat-pin', tooltip: 'Pin' },
          { type: 'Button', iconCss: 'e-icons e-chat-trash', tooltip: 'Delete' }
        ]
      }
    }
  }

});