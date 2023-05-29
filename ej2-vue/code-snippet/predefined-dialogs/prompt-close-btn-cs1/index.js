
import Vue from "vue";
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);

new Vue({
	el: '#app',
	template: `
  <div class="predefinedDialogs">
    <ejs-button id="promptDlgBtn" v-on:click.native="promptBtnClick" :isPrimary="true">Prompt</ejs-button>
  </div>
`,

  data: function () {
    return {};
  },
  methods: {
    promptBtnClick: function () {
      DialogUtility.confirm({
        title: "Join chat group",
        width: "300px",
        content:'<p>Enter your name: </p><input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
        showCloseIcon: true,
        closeOnEscape: true
      });
    },
  },

});