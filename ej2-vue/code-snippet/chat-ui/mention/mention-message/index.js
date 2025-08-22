import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
import { enableRipple } from '@syncfusion/ej2-base';

Vue.use(ChatUIPlugin);
enableRipple(true);

new Vue({
    el: '#app',
    template: `
  <div id='mention-message' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :enableRipple="true">
      <e-messages>
        <e-message :author="currentUser" text="Hi {0}, are we on track for the deadline?" :mentionUsers="[michaleUser]"></e-message>
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
                user: "Albert"
            },
            michaleUser: {
                id: "user2",
                user: "Michale Suyama"
            }
        }
    }
});