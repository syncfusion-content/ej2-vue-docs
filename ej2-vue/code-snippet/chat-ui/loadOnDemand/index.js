import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :loadOnDemand="true" :messages="chatMessages" :created="created"></ejs-chatui>
  </div>
`,

  data () {
    return {
      currentUser: {
        id: "user1",
        user: "Albert"
      },
      michaleUser: {
        id: "user2",
        user: "Michale Suyama"
      },
      chatMessages: []
    }
  },
  methods: {
    created() {
      this.chatMessages = Array.from({ length: 150 }, (_, i) => ({
        text: i % 2 === 0
          ? `Message ${i + 1} from Michale`
          : `Message ${i + 1} from Albert`,
        author: (i % 2 === 0) ? this.michaleUser : this.currentUser
      }));
    }
  }

});