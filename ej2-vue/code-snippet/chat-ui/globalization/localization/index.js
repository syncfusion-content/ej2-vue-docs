import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
import { L10n } from '@syncfusion/ej2-base';

Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :typingUsers="typingUsers" locale="de" :created="created">
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?"></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete."></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today."></e-message>
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
      typingUsers: []
    }
  },
  methods: {
    created() {
      this.typingUsers = [this.michaleUser];
      L10n.load({
        'de': {
          "chat-ui": {
            "oneUserTyping": "{0} tippt",
            "twoUserTyping": "{0} und {1} tippen",
            "threeUserTyping": "{0}, {1} und {2} andere tippen gerade",
            "multipleUsersTyping": "{0}, {1} und {2} andere tippen gerade"
          }
        }
      });
    }
  }

});