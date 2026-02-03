<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui id="typingUsersTemplate" :typingUsers="typingUsers" typingUsersTemplate="typingUsersTemplate" :user="currentUser" :created="created">
      <template v-slot:typingUsersTemplate="{data}">
        <div class="typing-wrapper" v-html="getTypingUsersList(data) + ` are typing...`"></div>
      </template>
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" ></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete." ></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today." ></e-message>
      </e-messages>
    </ejs-chatui>
  </div>
</template>

<script>
import { ChatUIComponent, MessagesDirective, MessageDirective } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-chatui': ChatUIComponent,
    'e-messages': MessagesDirective,
    'e-message': MessageDirective
  },
  data() {
    return {
      currentUser: {
        id: "user1",
        user: "Albert"
      },
      michaleUser: {
        id: "user2",
        user: "Michale Suyama"
      },
      reenaUser: {
        id: "user3",
        user: "Reena"
      },
      typingUsers: []
    };
  },
  methods: {
    created(){
      this.typingUsers = [ this.michaleUser, this.reenaUser ];
    },
    getTypingUsersList(context) {
      if (!context.users || context.users.length === 0) {
        return '';
      }
      let usersList = context.users.map((user, i) => {
        let isLastUser = i === context.users.length - 1;
        return `${isLastUser && i > 0 ? 'and ' : ''}<span class="typing-user">${user.user}</span>`;
      }).join(' ');
      return usersList
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";

#typingUsersTemplate .typing-wrapper {
  display: flex;
  gap: 4px;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #555;
  margin: 5px 0;
}

.typing-user {
  font-weight: bold;
  color: #0078d4;
}
</style>
