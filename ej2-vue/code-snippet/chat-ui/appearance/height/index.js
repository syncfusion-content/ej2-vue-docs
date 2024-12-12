import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="width: 400px;">
    <ejs-chatui height='400px' :user="currentUser">
      <ejs-messages>
        <ejs-message :author="currentUser" text="Hi, thinking of painting this weekend"></ejs-message>
        <ejs-message :author="michaleUser" text="That’s fun! What will you paint?"></ejs-message>
        <ejs-message :author="currentUser" text="Maybe landscapes."></ejs-message>
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