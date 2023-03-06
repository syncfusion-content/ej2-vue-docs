
import Vue from "vue";
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { getComponent } from "@syncfusion/ej2-base";

Vue.use(ButtonPlugin);
Vue.use(MessagePlugin);
;
new Vue({
	el: '#app',
	template: `
    <div class="col-lg-8 control-section msg-icon-section">
      <div class="content-section">
        <ejs-button id="btn1" ref="defaultBtn" content="Show Default Message" cssClass="e-outline e-primary msg-hidden" v-on:click.native="defaultClick"></ejs-button>
        <ejs-message id="msg_default_icon" ref="msgDefault" :showCloseIcon="showCloseIcon" :closed="defaultClosed">Editing is restricted</ejs-message>
        <ejs-button id="btn2" ref="infoBtn" content="Show Info Message" cssClass="e-outline e-primary e-info msg-hidden" v-on:click.native="infoClick"></ejs-button>
        <ejs-message id="msg_info_icon" ref="msgInfo" severity="Info" :showCloseIcon="showCloseIcon" :closed="infoClosed">Please read the comments carefully</ejs-message>
        <ejs-button id="btn3" ref="successBtn" content="Show Success Message" cssClass="e-outline e-primary e-success msg-hidden" v-on:click.native="successClick"></ejs-button>
        <ejs-message id="msg_success_icon" ref="msgSuccess" severity="Success" :showCloseIcon="showCloseIcon" :closed="successClosed">Your message has been sent successfully</ejs-message>
        <ejs-button id="btn4" ref="warningBtn" content="Show Warning Message" cssClass="e-outline e-primary e-warning msg-hidden" v-on:click.native="warningClick"></ejs-button>
        <ejs-message id="msg_warning_icon" ref="msgWarning" severity="Warning" :showCloseIcon="showCloseIcon" :closed="warningClosed">There was a problem with your network connection</ejs-message>
        <ejs-button id="btn5" ref="errorBtn" content="Show Error Message" cssClass="e-outline e-primary e-error msg-hidden" v-on:click.native="errorClick"></ejs-button>
        <ejs-message id="msg_error_icon" ref="msgError" severity="Error" :showCloseIcon="showCloseIcon" :closed="errorClosed">A problem has been occurred while submitting your data</ejs-message>
      </div>
    </div>
`,

  data: function () {
    return {
      showCloseIcon: true,
    };
  },
  methods: {
    defaultClick: function () {
      this.show(this.$refs.msgDefault, this.$refs.defaultBtn);
    },
    infoClick: function () {
      this.show(this.$refs.msgInfo, this.$refs.infoBtn);
    },
    successClick: function () {
      this.show(this.$refs.msgSuccess, this.$refs.successBtn);
    },
    warningClick: function () {
      this.show(this.$refs.msgWarning, this.$refs.warningBtn);
    },
    errorClick: function () {
      this.show(this.$refs.msgError, this.$refs.errorBtn);
    },
    defaultClosed: function () {
      this.$refs.defaultBtn.ej2Instances.element.classList.remove("msg-hidden");
    },
    infoClosed: function () {
      this.$refs.infoBtn.ej2Instances.element.classList.remove("msg-hidden");
    },
    warningClosed: function () {
      this.$refs.warningBtn.ej2Instances.element.classList.remove("msg-hidden");
    },
    successClosed: function () {
      this.$refs.successBtn.ej2Instances.element.classList.remove("msg-hidden");
    },
    errorClosed: function () {
      this.$refs.errorBtn.ej2Instances.element.classList.remove("msg-hidden");
    },
    show: function (message, btn) {
      message.ej2Instances.visible = true;
      btn.ej2Instances.element.classList.add("msg-hidden");
    }
  },

});