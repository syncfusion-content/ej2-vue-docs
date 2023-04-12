
import Vue from "vue";
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ButtonPlugin);
Vue.use(MessagePlugin);
;
new Vue({
	el: '#app',
	template: `
  <div class=" msg-template-section">
    <div class="content-section">
      <ejs-button id="showBtn" ref="showBtn" content="Show pull request" cssClass="e-outline e-primary e-success msg-hidden" v-on:click.native="showClick"></ejs-button>
      <ejs-message id="msg_template" ref="msgTemplate" severity="Success" :content="'contentTemplate'" :closed="closed">
        <template v-slot:contentTemplate>
          <div>
            <h1>Merged pull request</h1>
            <p>Pull request #41 merged after a successful build</p>
            <ejs-button id="commitBtn" cssClass="e-link" content="View commit"></ejs-button>
            <ejs-button id="closeBtn" cssClass="e-link" content="Dismiss" v-on:click.native="dismissClick"></ejs-button>
          </div>
        </template>
      </ejs-message>
    </div>
  </div>
`,

  data: function () {
    return {};
  },
  methods: {
    showClick: function () {
      this.$refs.msgTemplate.ej2Instances.visible = true;
      this.$refs.showBtn.ej2Instances.element.classList.add("msg-hidden");
    },
    dismissClick: function () {
      this.$refs.msgTemplate.ej2Instances.visible = false;
    },
    closed: function () {
      this.$refs.showBtn.ej2Instances.element.classList.remove("msg-hidden");
    },
  },

});