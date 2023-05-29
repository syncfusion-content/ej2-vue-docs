
import Vue from 'vue';
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
Vue.use(ToolbarPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:100%;">
        <br>
         <ejs-toolbar >
           <e-items>
             <e-item text='Bold'  :htmlAttributes = 'boldAttribute'></e-item>
             <e-item text='Italic' :htmlAttributes = 'italicAttribute'></e-item>
             <e-item text='Underline' :htmlAttributes = 'underAttribute'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Uppercase' cssClass = 'e-txt-casing'></e-item>
          </e-items>
    </ejs-toolbar>
    </div>
  </div>
`,


name: 'app',


   data() {
  return {
      boldAttribute: { 'class': 'custom_bold', 'id': 'itemId' }
      italicAttribute :{ 'class': 'custom_italic' }
      underAttribute : { 'class': 'custom_underline' }
   }
   }

});