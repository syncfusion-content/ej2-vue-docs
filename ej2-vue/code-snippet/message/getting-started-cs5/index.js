
import { createApp } from "vue";
import { MessageComponent } from "@syncfusion/ej2-vue-notifications";

createApp({
	template: `
  <div class="msg-default-section">
    <div class="content-section">
      <ejs-message id="msg_default" content="Editing is restricted" :showIcon="showIcon"></ejs-message>
      <ejs-message id="msg_info" content="Please read the comments carefully" severity="Info" :showIcon="showIcon"></ejs-message>
      <ejs-message id="msg_success" content="Your message has been sent successfully" severity="Success" :showIcon="showIcon"></ejs-message>
      <ejs-message id="msg_warning" content="There was a problem with your network connection" severity="Warning" :showIcon="showIcon"></ejs-message>
      <ejs-message id="msg_error" content="A problem occurred while submitting your data" severity="Error" :showIcon="showIcon"></ejs-message>
    </div>
  </div>`,
  components: {
    "ejs-message": MessageComponent
  },
  data() {
    return {
      showIcon: true
    };
  }
}).mount('#app');