
import Vue from "vue";
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);

new Vue({
	el: '#app',
	template: `
    <div class="predefinedDialog">
      <ejs-button id="alertDlgBtn" v-on:click.native="alertBtnClick" cssClass="e-danger">Alert</ejs-button>
    </div>
`,

  data: function () {
    return {};
  },
  methods: {
    alertBtnClick: function () {
      DialogUtility.alert({
        title: 'Good job!',
        content: 'You clicked the alert button!',
        width:'250px',
        okButton: { text: 'Done'}
      });
    },
  },

});