
import Vue from "vue";
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";

Vue.use(MessagePlugin);

new Vue({
	el: '#app',
	template: `
  <div class="msg-custom-section">
    <div class="content-section">
      <h4>Content Alignment</h4>
      <ejs-message id="msg_content_left" content="Your license has been activated successfully" severity="Success"></ejs-message>
      <ejs-message id="msg_content_center" content="The license will expire today" cssClass="e-content-center" severity="Warning"></ejs-message>
      <ejs-message id="msg_content_right" content="The license key is invalid" cssClass="e-content-right" severity="Error"></ejs-message>
    </div>
  </div>
`,

  name: "app",
  data() {
    return {
    };
  }

});