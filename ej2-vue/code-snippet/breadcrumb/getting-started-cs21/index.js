
import Vue from 'vue';
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(BreadcrumbPlugin);



new Vue({
	el: '#app',
	template: `
<div>
<ejs-breadcrumb maxItems='3' :enableNavigation='false' overflowMode="Wrap">
  <e-breadcrumb-items>
    <e-breadcrumb-item text= 'Home' url= '../'></e-breadcrumb-item>
    <e-breadcrumb-item text= 'Breadcrumb' url= './breadcrumb'></e-breadcrumb-item>
    <e-breadcrumb-item text= 'Default' url= './breadcrumb/default'></e-breadcrumb-item>
    <e-breadcrumb-item text= 'Icons' url= './breadcrumb/icons'></e-breadcrumb-item>
    <e-breadcrumb-item text= 'Navigations' url= './breadcrumb/navigations'></e-breadcrumb-item>
    <e-breadcrumb-item text= 'Overflow' url= './breadcrumb/overflow'></e-breadcrumb-item>
  </e-breadcrumb-items>
</ejs-breadcrumb>
</div>
`,

  data: function() {
    return {
    };
  }

});