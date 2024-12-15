<template>
  <div id='container' style="height: 380px; width: 450px;">
    <ejs-chatui id="typingUsersTemplate" :typingUsers="typingUsers" typingUsersTemplate="typingUsersTemplate" :user="currentUser" :created="created">
      <template v-slot:typingUsersTemplate="{data}">
        <div class="typing-wrapper" v-html="getTypingUsersList(data) + ` are typing...`"></div>
      </template>
      <ejs-messages>
        <ejs-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" ></ejs-message>
        <ejs-message :author="michaleUser" text="Yes, the design phase is complete." ></ejs-message>
        <ejs-message :author="currentUser" text="I’ll review it and send feedback by today." ></ejs-message>
      </ejs-messages>
    </ejs-chatui>
  </div>
</template>

<script>
import { ChatUIComponent, MessagesDirective, MessageDirective } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-chatui': ChatUIComponent,
    'ejs-messages': MessagesDirective,
    'ejs-message': MessageDirective
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
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
