
import Vue from 'vue';
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
Vue.use(ToolbarPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:100%;">
        <br>
        <ejs-toolbar width='380' overflowMode='Popup'>
            <e-items>
             <e-item text='Cut' prefixIcon = 'e-cut-icon tb-icons' overflow ='Show'></e-item>
             <e-item text='Copy' prefixIcon = 'e-copy-icon tb-icons' overflow ='Show'></e-item>
             <e-item text='Paste' prefixIcon = 'e-paste-icon tb-icons' overflow ='Show'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Bold' prefixIcon = 'e-bold-icon tb-icons' ></e-item>
             <e-item text='Italic' prefixIcon = 'e-italic-icon tb-icons' ></e-item>
             <e-item text='Underline' prefixIcon = 'e-underline-icon tb-icons' ></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='A-Z Sort' prefixIcon = 'e-ascending-icon tb-icons' overflow ='Show'></e-item>
             <e-item text='Z-A Sort' prefixIcon = 'e-descending-icon tb-icons' overflow ='Show'></e-item>
            </e-items>
        </ejs-toolbar>
        <link href="https://ej2.syncfusion.com/angular/demos/src/toolbar/toolbar.component.css" rel="stylesheet" />
    </div>
  </div>
`,

  name: 'app',

});