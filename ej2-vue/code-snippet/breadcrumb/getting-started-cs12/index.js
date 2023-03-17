
import Vue from 'vue';
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(BreadcrumbPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<ejs-breadcrumb>
  <e-breadcrumb-items>
    <e-breadcrumb-item iconCss="e-icons e-home"></e-breadcrumb-item>
    <e-breadcrumb-item iconCss="e-bicons e-folder"></e-breadcrumb-item>
    <e-breadcrumb-item iconCss="e-bicons e-file"></e-breadcrumb-item>
  </e-breadcrumb-items>
</ejs-breadcrumb>
</div>
`,

  data: function() {
    return {};
  }

});