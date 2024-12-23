import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui ref="aiassist" :user="currentUser" :auto-scroll-to-bottom="true">
      <e-messages>
        <e-message :author="currentUser" text="Want to get coffee tomorrow?"></e-message>
        <e-message :author="michaleUser" text="Sure! What time?"></e-message>
        <e-message :author="currentUser" text="How about 10 AM?"></e-message>
        <e-message :author="michaleUser" text="Perfect"></e-message>
        <e-message :author="currentUser" text="See you!"></e-message>
        <e-message :author="michaleUser" text="Bye!"></e-message>
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
  }

});