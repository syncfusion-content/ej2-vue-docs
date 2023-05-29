
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
    <ejs-appbar colorMode="Primary">
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></ejs-button>
      <ejs-button cssClass="e-inherit">Home</ejs-button>
      <ejs-button cssClass="e-inherit">About</ejs-button>
      <ejs-button cssClass="e-inherit">Products</ejs-button>
      <ejs-button cssClass="e-inherit">Contacts</ejs-button>
      <div class="e-appbar-spacer"></div>
      <div class="e-appbar-separator"></div>
      <ejs-button cssClass="e-inherit">Login</ejs-button>
    </ejs-appbar>
  </div>
`,

    data: function () {
      return {};
    }
  
});