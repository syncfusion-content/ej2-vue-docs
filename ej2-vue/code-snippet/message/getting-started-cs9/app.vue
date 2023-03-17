

<template>
  <div class=" msg-template-section">
    <div class="content-section">
      <ejs-button id="showBtn" ref="showBtn" content="Show pull request" cssClass="e-outline e-primary e-success msg-hidden" v-on:click.native="showClick"></ejs-button>
      <ejs-message id="msg_template" ref="msgTemplate" severity="Success" :closed="closed">
        <div>
          <h1>Merged pull request</h1>
          <p>Pull request #41 merged after a successful build</p>
          <ejs-button id="commitBtn" cssClass="e-link" content="View commit"></ejs-button>
          <ejs-button id="closeBtn" cssClass="e-link" content="Dismiss" v-on:click.native="dismissClick"></ejs-button>
        </div>
      </ejs-message>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ButtonPlugin);
Vue.use(MessagePlugin);
export default {
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
};
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/message/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/button/material.css";

.msg-template-section .content-section {
  margin: 0 auto;
  max-width: 450px;
  padding-top: 20px;
}

.msg-template-section .e-btn.msg-hidden {
  display: none;
}

.msg-template-section .e-message h1 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.msg-template-section .e-message .e-msg-icon {
  padding: 0 4px;
  margin-top: 3px;
}

.msg-template-section .e-message p {
  margin: 8px 0 4px;
}

.msg-template-section .e-message .e-btn {
  padding: 0;
}
</style>


