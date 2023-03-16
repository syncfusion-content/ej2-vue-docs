
import Vue from 'vue';
import { ToolbarPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(ToolbarPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-toolbar>
      <e-items>
        <e-item text='Cut' tabIndex="0"></e-item>
        <e-item text='Copy' tabIndex="0"></e-item>
        <e-item text='Paste' tabIndex="0"></e-item>
        <e-item type='Separator'></e-item>
        <e-item text='Bold'></e-item>
        <e-item text='Italic'></e-item>
        <e-item text='Underline'></e-item>
      </e-items>
    </ejs-toolbar>
  </div>
`,

  name: 'app',

});