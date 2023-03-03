
  import Vue from "vue";
  import { AppBarPlugin  } from "@syncfusion/ej2-vue-navigations";
  import { ButtonPlugin  } from "@syncfusion/ej2-vue-buttons";

  Vue.use(AppBarPlugin);
  Vue.use(ButtonPlugin);

  ;
new Vue({
	el: '#app',
	template: `
  <div class="control-container">
    <ejs-appbar colorMode="Inherit">
      <a href="https://www.syncfusion.com/vue-components" target="_blank" rel="noopener" role="link" aria-label="Syncfusion vue controls">
        <div class="syncfusion-logo"></div>
      </a>
      <div class="e-appbar-spacer"></div>
      <ejs-button :isPrimary="true">FREE TRIAL</ejs-button>
    </ejs-appbar>
  </div>
`,

    data: function () {
      return {};
    }
  
});