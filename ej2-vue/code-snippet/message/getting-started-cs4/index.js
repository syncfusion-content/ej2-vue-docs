
import Vue from "vue";
import { MessageComponent } from "@syncfusion/ej2-vue-notifications";

new Vue({
	el: '#app',
	template: `
  <ejs-message id="msg" :content="content"></ejs-message>
`,

  name: "app",
  components: {
    'ejs-message': MessageComponent
  },
  data() {
    return {
      content: "Please read the comments carefully"
    };
  }

});