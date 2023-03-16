
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(SidebarPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app">
    <ejs-sidebar id="default-sidebar"  :width="width" :mediaQuery= "mediaQuery">
      <div class="title"> Sidebar content</div>
    </ejs-sidebar>
    <div>
        <div class="title">Main content</div>
        <div class="sub-title">
            * Sidebar will collapse and expand in based on screen resolution automatically
        </div>
    </div>
</div>
`,

    data () {
        return {
          width: '280px',
          mediaQuery: window.matchMedia('(max-width: 400px)'),
        }
    }

});