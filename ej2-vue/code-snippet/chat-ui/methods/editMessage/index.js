import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
    <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
      <button id="updateMessage" style="margin-bottom: 10px;" @click="buttonClick" class="e-btn e-primary">Update Message</button>
      <ejs-chatui height="360px" ref="chatInstance" :user="currentUser">
        <e-messages>
          <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" id="msg1"></e-message>
          <e-message :author="michaleUser" text="Yes, the design phase is complete." id="msg2"></e-message>
          <e-message :author="currentUser" text="I’ll review it and send feedback by today." id="msg3"></e-message>
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
      }
    }
  },
  methods: {
    buttonClick() {
      let defaultChat = this.$refs.chatInstance.ej2Instances;
      defaultChat.updateMessage({text: "Hi Michael, are we still on schedule to meet the deadline?", author: this.currentUser},'msg1');
    }
  }

});