import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui ref="chatInstance" id="footerTemplate" footerTemplate="footerTemplate" :user="currentUser">
      <template v-slot:footerTemplate="">
        <div class="custom-footer">
          <input id="chatTextArea" class="e-input" placeholder="Type your message..."></input>
          <button id="sendMessage" class="e-btn e-primary"@click="buttonClick">
            <span class="e-icons e-send-1"></span>
          </button>
        </div>
      </template>
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" ></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete." ></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today." ></e-message>
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
    buttonClick: () => {
      let defaultChat = this.$refs.chatInstance.ej2Instances;
      const textArea = document.getElementById('chatTextArea');
      if (textArea && textArea?.value.length > 0) {
        let value = textArea.value;
        textArea.value = '';
        defaultChat.addMessage(
        {
          author: this.michaleUser,
          text: value
        });
      }
    }
  }

});