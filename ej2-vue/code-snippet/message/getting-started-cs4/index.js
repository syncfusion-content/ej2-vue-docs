
import Vue from "vue";
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";

Vue.use(MessagePlugin);

new Vue({
	el: '#app',
	template: `
  <ejs-message id="msg" :content="content"></ejs-message>
`,

  name: "app",
  data() {
    return {
      content: "Please read the comments carefully"
    };
  }

});