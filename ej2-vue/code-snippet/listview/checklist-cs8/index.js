
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";

Vue.use(ListViewPlugin);

var listVue = Vue.component("demo", {
  template: `<a target='_blank' v-bind:href='data.url'>{{data.name}}</a>`,
  data() {
    return {
      data: {}
    };
  }
});


new Vue({
	el: '#app',
	template: `
   <div id="sample">
    <ejs-listview id='List' :dataSource='data' headerTitle='Search engines' showHeader='true' :template='anchortemplate'>
    </ejs-listview>
  </div>
`,

  data: function() {
       return {
      data: [
        {name: 'Google', url: 'https://www.google.com'},
        {name: 'Bing', url: 'https://www.bing.com' },
        {name: 'Yahoo', url: 'https://www.yahoo.com'},
        {name: 'Ask.com', url: 'https://www.ask.com'},
        {name: 'AOL.com', url: 'https://www.aol.com'},
    ],
    anchortemplate: function () {
        return { template : listVue};
    },
    };
  },

});