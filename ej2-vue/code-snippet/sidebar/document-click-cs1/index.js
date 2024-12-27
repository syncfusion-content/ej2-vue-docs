
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(SidebarPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
    <div class="wrapper">
        <ejs-sidebar id="default-sidebar" ref="sidebar" :width="width" :type="type" :isOpen="isOpen" :closeOnDocumentClick="closeOnDocumentClick">
           <div class="title"> Sidebar content</div>
        </ejs-sidebar>
        <div>
            <div class="title">Main content</div>
                <div class="sub-title"> Click the button to open the Sidebar.</div>
                   <div style="padding:20px" class="center-align">
                       <button ejs-button id="toggle"  class="e-btn e-info" v-on:click="toggleClick" >Open Sidebar</button>
                </div>
           </div>
       </div>
    </div>
`,

     data () {
        return {
            closeOnDocumentClick: true,
            isOpen:true,
            type:'Push',
            width:'280px'
        }
    },
    methods: {
        toggleClick :function() {
          this.$refs.sidebar.toggle();
        },
    }
});