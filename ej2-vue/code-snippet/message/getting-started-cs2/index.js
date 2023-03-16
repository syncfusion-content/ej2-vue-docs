
import Vue from "vue";
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";

Vue.use(MessagePlugin);

new Vue({
	el: '#app',
	template: `
  <div class="msg-custom-section">
    <div class="content-section">
      <h4>Rounded</h4>
      <ejs-message content="The license will expire today" cssClass="rounded" severity="Warning"></ejs-message>
      <h4>Square</h4>
      <ejs-message content="The license key is invalid" cssClass="square" severity="Error"></ejs-message>
    </div>
  </div>
`,

  name: "app",
  data() {
    return {
    };
  }

});