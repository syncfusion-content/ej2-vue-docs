
import Vue from 'vue';
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(BreadcrumbPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<ejs-breadcrumb :beforeItemRender="beforeItemRenderHandler">
  <e-breadcrumb-items>
    <e-breadcrumb-item text= 'Home' url= 'https://ej2.syncfusion.com/documentation/breadcrumb/introduction'></e-breadcrumb-item>
    <e-breadcrumb-item text= 'Getting' url= 'https://ej2.syncfusion.com/documentation/breadcrumb/getting-started'></e-breadcrumb-item>
    <e-breadcrumb-item text= 'Icons' url= 'https://ej2.syncfusion.com/documentation/breadcrumb/icons'></e-breadcrumb-item>
    <e-breadcrumb-item text= 'Navigation' url= 'https://ej2.syncfusion.com/documentation/breadcrumb/navigation'></e-breadcrumb-item>
    <e-breadcrumb-item text= 'Overflow' url= 'https://ej2.syncfusion.com/documentation/breadcrumb/overflow'></e-breadcrumb-item>
  </e-breadcrumb-items>
</ejs-breadcrumb>
</div>
`,

  data: function() {
        return {};
  },
  methods: {
    beforeItemRenderHandler: function(args) {
      if (args.element.children[0]) {
        args.element.children[0].target = "_blank";
      }
    }
  }

});