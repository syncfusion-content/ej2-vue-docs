
import Vue from "vue";
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ListViewPlugin, SelectEventArgs } from '@syncfusion/ej2-vue-lists';

Vue.use(SidebarPlugin);
Vue.use(ListViewPlugin);


Vue.use(SidebarPlugin);
Vue.use(ListViewPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-sidebar id="default-sidebar" ref="sidebar" :width="width" :type="type">
    <div class="title1">Menu</div>
           <div class="closebtn">
               <button  ejs-button id="close" class="e-btn close-btn" v-on:click="closeClick">
                   <span id="innerclose" class="e-icons close-icon"></span>
               </button>
           </div>
           <div id="listcontainer">
         <ejs-listview id='list' :dataSource="dataList" ></ejs-listview>
         </div>
             <div class="sub-title">
                    * ListView component is rendered in the sidebar container.
                </div>
</ejs-sidebar>
<div>
    <div>
        <div class="title2">Main content</div>
        <div class="sub-title"> Click the button to open/close the Sidebar.
            <div style="padding:20px" class="center-align">
                <button ejs-button id="toggle" class="e-btn e-info" v-on:click="toggleClick">Toggle Sidebar</button>
            </div>

        </div>
    </div>
</div>
</div>
`,

    data () {
           return {
          dataList: [
        { text: 'Home', id: 'list-02' },
        { text: 'Offers', id: 'list-03' },
        { text: 'Support', id: 'list-04' },
        { text: 'Logout', id: 'list-06' }
    ],
    type: 'Over',
    width: '100%'
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