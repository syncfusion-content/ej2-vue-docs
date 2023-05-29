
import Vue from 'vue';
import { ToolbarPlugin } from '@syncfusion/ej2-vue-navigations';
Vue.use(ToolbarPlugin);

var AnchorData = Vue.component("demo", {
  template: '<a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/toolbar/getting-started/">Anchor Toolbar Link</a>',
  data() {
    return {
      data: {}
    };
  }
});


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-toolbar >
           <e-items>
             <e-item text='Cut'></e-item>
             <e-item text='Copy' ></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Paste' ></e-item>
             <e-item type='Separator'></e-item>
             <e-item :template='AnchorTemplate'></e-item>
          </e-items>
      </ejs-toolbar>
  </div>
`,

  name: 'app',
  data: function(){
    return {
      AnchorTemplate: function () {
        return {
          template: AnchorData
        }
      }
   }
 }

});