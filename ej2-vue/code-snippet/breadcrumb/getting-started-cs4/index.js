
import Vue from 'vue';
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(BreadcrumbPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<ejs-breadcrumb :enableNavigation='false' url="https://ej2.syncfusion.com/demos/breadcrumb/bind-to-location" :beforeItemRender="beforeItemRenderHandler">
</ejs-breadcrumb>
</div>
`,

  data: function() {
        return {};
  },
  methods: {
    beforeItemRenderHandler: function(args) {
        if (args.item.text === 'bind-to-location') {
          args.item.text = 'location';
        }
    }
  }

});