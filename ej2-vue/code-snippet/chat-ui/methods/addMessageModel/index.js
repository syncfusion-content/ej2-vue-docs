import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 380px; width: 450px;">
    <button id="addMessageModel" style="margin-bottom: 10px;" @click="buttonClick" class="e-btn e-primary">Add Message as Object</button>
    <ejs-chatui height="360px" ref="chatInstance" :user="currentUser">
      <ejs-messages>
        <ejs-message :author="currentUser" text="Hi Michale, are we on track for the deadline?"></ejs-message>
        <ejs-message :author="michaleUser" text="Yes, the design phase is complete."></ejs-message>
        <ejs-message :author="currentUser" text="I’ll review it and send feedback by today."></ejs-message>
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
  },
  methods: {
    buttonClick() {
      let defaultChat = this.$refs.chatInstance.ej2Instances;
      defaultChat.addMessage(
      {
        author: this.michaleUser,
        text: "Great! Let me know if there’s anything that needs adjustment."
      });
    }
  }

});