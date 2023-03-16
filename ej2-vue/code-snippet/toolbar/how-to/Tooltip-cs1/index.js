
import Vue from 'vue';
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { Tooltip } from "@syncfusion/ej2-popups";
Vue.use(ToolbarPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id = 'Tooltip'  id ='Toolbar' :created="oncreated">
         <ejs-toolbar >
    <e-items>
             <e-item text='Cut'></e-item>
             <e-item text='Copy'></e-item>
             <e-item text='Paste'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Bold'></e-item>
             <e-item text='Italic'></e-item>
             <e-item text='Underline'></e-item>
          </e-items>
    </ejs-toolbar>
    </div>
  </div>
`,

  name: 'app',
   data() {
    },
    methods:{
      oncreated: function(e){
      var tooltip  = new Tooltip({ target: '#Toolbar',content: 'This is Toolbar'});
       tooltip.appendTo('#Tooltip');
      }
    }

});