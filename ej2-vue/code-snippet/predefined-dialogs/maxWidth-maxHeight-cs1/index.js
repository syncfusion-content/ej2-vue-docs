
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
       title: 'About syncfusion succinctly series',
        content: 'In the Succinctly series, Syncfusion created a robust, free library of more than 130 technical e-books formatted for PDF, Kindle, and EPUB.Each title in the Succinctly series is written by a carefully chosen expert and provides essential content in about 100 pages. The Succinctly series was born in 2012 out of a desire to provide concise technical e-books for software developers.',
        cssClass : 'customClass'
      });
    },
  },

});