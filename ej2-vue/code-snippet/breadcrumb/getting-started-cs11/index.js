
import Vue from 'vue';
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(BreadcrumbPlugin);


new Vue({
	el: '#app',
	template: `
<div id="breadcrumb-control">
<div class='header'><b>IconPosition- left</b></div><br />
<ejs-breadcrumb>
  <e-breadcrumb-items>
    <e-breadcrumb-item text="Program Files" iconCss="e-bicons e-folder"></e-breadcrumb-item>
    <e-breadcrumb-item text="Services" iconCss="e-bicons e-folder"></e-breadcrumb-item>
    <e-breadcrumb-item text="Config.json" iconCss="e-bicons e-file"></e-breadcrumb-item>
  </e-breadcrumb-items>
</ejs-breadcrumb>
<br />
<br/>
<div class='header'><b>IconPosition- Right</b></div><br />
<ejs-breadcrumb :beforeItemRender="beforeItemRenderHandler">
  <e-breadcrumb-items >
    <e-breadcrumb-item text="Program Files" iconCss="e-bicons e-folder"></e-breadcrumb-item>
    <e-breadcrumb-item text="Services" iconCss="e-bicons e-folder"></e-breadcrumb-item>
    <e-breadcrumb-item text="Config.json" iconCss="e-bicons e-file"></e-breadcrumb-item>
  </e-breadcrumb-items>
</ejs-breadcrumb>
</div>
`,

  data: function() {
    return {};
  },
  methods: {
    beforeItemRenderHandler: function(args) {
      if (args.element) {
        args.element.classList.add('e-icon-right');
      }
    }
  }

});