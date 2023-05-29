
import Vue from "vue";
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";

Vue.use(MessagePlugin);

new Vue({
	el: '#app',
	template: `
  <div class="col-lg-12 control-section msg-custom-section">
    <div class="content-section">
      <ejs-message id="msg_icon" cssClass="custom">Essential JS 2 is a modern JavaScript UI Controls library that has been built from the ground up to be lightweight, responsive, modular and touch friendly. It is written in TypeScript and has no external dependencies. It also includes complete support for Angular, React, Vue, ASP.NET MVC and ASP.NET Core frameworks.
      </ejs-message>
    </div>
  </div>
`,

  name: "app",
  data() {
    return {
    };
  }

});