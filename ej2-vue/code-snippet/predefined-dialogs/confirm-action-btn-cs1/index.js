
import Vue from "vue";
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);

new Vue({
	el: '#app',
	template: `
  <div class="predefinedDialogs">
    <ejs-button id="confirmDlgBtn" v-on:click.native="confirmBtnClick" cssClass="e-success">Confirm</ejs-button>
  </div>
`,

  data: function () {
    return {};
  },
  methods: {
    confirmBtnClick: function () {
      DialogUtility.confirm({
        title: 'Delete file',
        content: "Are you sure you want to permanently delete these file?",
        width: '300px',
        okButton: { text: 'Yes', icon:'e-icons e-check'},
        cancelButton: {text:'No', icon:'e-icons e-close'}
      });
    },
  },

});