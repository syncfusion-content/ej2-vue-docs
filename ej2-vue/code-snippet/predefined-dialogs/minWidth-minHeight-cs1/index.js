
import Vue from "vue";
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);

new Vue({
	el: '#app',
	template: `
  <div class="predefinedDialogs">
    <ejs-button id="alertDlgBtn" v-on:click.native="alertBtnClick" cssClass="e-danger">Alert</ejs-button>
  </div>
`,

  data: function () {
    return {};
  },
  methods: {
    alertBtnClick: function () {
      DialogUtility.alert({
        title: "About syncfusion succinctly series",
        content: "The succinctly series was born in 2012.",
        cssClass: "customClass",
      });
    },
  },

});