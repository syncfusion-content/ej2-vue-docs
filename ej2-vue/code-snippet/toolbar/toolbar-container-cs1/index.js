
import Vue from 'vue';
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
Vue.use(ToolbarPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:100%;">
        <br>
         <ejs-toolbar>
            <div>
                <div><button class="e-btn e-tbar-btn">Cut</button></div>
                <div><button class="e-btn e-tbar-btn">Copy</button></div>
                <div><button class="e-btn e-tbar-btn">Paste</button></div>
                <div class="e-separator"></div>
                <div><button class="e-btn e-tbar-btn">Bold</button></div>
                <div><button class="e-btn e-tbar-btn">Italic</button></div>
            </div>
          </ejs-toolbar>
    </div>
  </div>
`,

  name: 'app',

});