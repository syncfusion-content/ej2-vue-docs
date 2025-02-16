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
        <ejs-sidebar id="default-sidebar" ref="sidebar" :type="type" :width="width" :animate="animate" :enableRtl="enableRtl">
           <div class="title"> Sidebar content</div>
            <div class="sub-title">
               Click the button to close the Sidebar
            </div>
            <div class="center-align">
               <button  ejs-button  id="close" v-on:click="closeClick"  class="e-btn close-btn">Close Sidebar</button>
            </div>
        </ejs-sidebar>
        <div>
            <div class="title">Main content</div>
                <div class="sub-title"> Click the button to open/close the Sidebar.</div>
                   <div style="padding:20px" class="center-align">
                       <button ejs-button id="toggle"  class="e-btn e-info" v-on:click="toggleClick" >Toggle Sidebar</button>
                </div>
           </div>
       </div>
    </div>
`,

     data () {
        return {
            animate:false,
            enableRtl: true,
            width:'280px',
            type:'Push'
        }
    },
    methods: {
        toggleClick :function() {
          this.$refs.sidebar.toggle();
        },
        closeClick: function() {
         this.$refs.sidebar.hide();
        }
    }

});