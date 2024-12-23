import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :showTimeBreak="true">
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" :timeStamp="new Date('December 25, 2024 7:30')"></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete." :timeStamp="new Date('December 25, 2024 8:00')"></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today." :timeStamp="new Date('December 25, 2024 11:00')"></e-message>
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