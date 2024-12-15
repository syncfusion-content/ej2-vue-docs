import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 380px; width: 450px;">
    <ejs-chatui emptyChatTemplate="emptyChatTemplate">
      <template v-slot:emptyChatTemplate="">
        <div class="empty-chat-text">
            <h4><span class="e-icons e-comment-show"></span></h4>
            <h4>No Messages Yet</h4>
            <p>Start a conversation to see your messages here.</p>
          </div>
      </template>
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