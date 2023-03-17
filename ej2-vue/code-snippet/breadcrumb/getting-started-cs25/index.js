
import Vue from 'vue';
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(BreadcrumbPlugin);



new Vue({
	el: '#app',
	template: `
<div>
<ejs-breadcrumb :separatorTemplate= "separatorTemplate">
  <e-breadcrumb-items>
    <e-breadcrumb-item text="Cart"></e-breadcrumb-item>
    <e-breadcrumb-item text="Billing"></e-breadcrumb-item>
    <e-breadcrumb-item text="Shipping"></e-breadcrumb-item>
    <e-breadcrumb-item text="Payment"></e-breadcrumb-item>
  </e-breadcrumb-items>
</ejs-breadcrumb>
</div>
`,

  data: function() {
    return {
    separatorTemplate: '<span class="e-icons e-arrow"></span>',
    };
  }

});