
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(SidebarPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app">
    <div class="wrapper">
        <ejs-sidebar id="default-sidebar">
           <div class="title"> Sidebar content</div>
        </ejs-sidebar>
        <div>
           <div class="title">Main content</div>
                <div class="sub-title">Content goes here.</div>
            </div>
        </div>
    </div>
`,


});