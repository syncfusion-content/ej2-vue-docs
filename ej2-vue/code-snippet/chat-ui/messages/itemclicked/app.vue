<template>
  <div id="container" style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" ref="chatui" :messageToolbarSettings="toolbarSettings">
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" />
        <e-message :author="michaleUser" text="Yes, the design phase is complete." />
        <e-message :author="currentUser" text="I’ll review it and send feedback by today." />
      </e-messages>
    </ejs-chatui>
  </div>
</template>

<script>
import {
  ChatUIComponent,
  MessagesDirective,
  MessageDirective
} from '@syncfusion/ej2-vue-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
  components: {
    'ejs-chatui': ChatUIComponent,
    'e-messages': MessagesDirective,
    'e-message': MessageDirective
  },
  data() {
    return {
      currentUser: { id: 'user1', user: 'Albert' },
      michaleUser: { id: 'user2', user: 'Michale Suyama' },
      toolbarSettings: {
        items: [
          { type: 'Button', iconCss: 'e-icons e-chat-forward', tooltip: 'Forward' },
          { type: 'Button', iconCss: 'e-icons e-chat-copy', tooltip: 'Copy' },
          { type: 'Button', iconCss: 'e-icons e-chat-reply', tooltip: 'Reply' },
          { type: 'Button', iconCss: 'e-icons e-chat-pin', tooltip: 'Pin' },
          { type: 'Button', iconCss: 'e-icons e-chat-trash', tooltip: 'Delete' }
        ],
        itemClicked: (args) => {
          if (args.item.prefixIcon === 'e-icons e-chat-forward') {
            const chatui = this.$refs.chatui.ej2Instances;
            const newMessageObj = {
              id: 'chat-message-' + (chatui.messages.length + 1).toString(),
              isForwarded: true,
              isPinned: args.message.isPinned,
              author: args.message.author,
              text: args.message.text,
              timeStamp: args.message.timeStamp,
              timeStampFormat: args.message.timeStampFormat,
              status: args.message.status,
              replyTo: args.message.replyTo
            };
            chatui.addMessage(newMessageObj);
          }
        }
      }
    };
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