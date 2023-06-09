
import { createApp } from "vue";
import { MessageComponent } from "@syncfusion/ej2-vue-notifications";

createApp({
	template: `
  <div class="msg-custom-section">
    <div class="content-section">
      <h4>Rounded</h4>
      <ejs-message content="The license will expire today" cssClass="rounded" severity="Warning"></ejs-message>
      <h4>Square</h4>
      <ejs-message content="The license key is invalid" cssClass="square" severity="Error"></ejs-message>
    </div>
  </div>`,
  components: {
    "ejs-message": MessageComponent
  }
}).mount('#app');