
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
             <e-item text='Cut'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Paste'></e-item>
             <e-item type='Separator'></e-item>
             <e-item :template='templateEle'></e-item>
             <e-item text='Undo'></e-item>
             <e-item text='Redo'></e-item>
             <e-item :template='templateEleId'></e-item>
          </e-items>
    </ejs-toolbar>
    </div>
  </div>
`,

  name: 'app',
  data () {
  return {
    templateEle: '<input placeholder="Search" style="height:27px;"/>';
    templateEleId: '#Template';
}
}

});