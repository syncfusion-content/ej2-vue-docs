
import Vue from 'vue';
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(BreadcrumbPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<ejs-breadcrumb :enableNavigation='false'></ejs-breadcrumb>
</div>
`,

  data: function() {
        return {};
  }

});