import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 400px; width: 400px;">
    <br>
    <ejs-chatui :messages="messages" :user="currentUser"></ejs-chatui>
  </div>
`,

  data () {
    const albert = {
      id: "user1",
      user: "Albert",
    };

    const michale = {
      id: "user2",
      user: "Michale Suyama",
    };
    return {
      messages: [
        {
          id: "msg1",
          author: albert,
          text: "Hi there! How's it going?"
        },
        {
          id: "msg2",
          author: michale,
          text: "Hey! I'm doing well, thanks. How about you?"
        },
        {
          id: "msg3",
          author: albert,
          text: "Mostly the usual stuff. I did start a new hobby - painting!"
        }
      ],
      currentUser: albert
    }
  }

});