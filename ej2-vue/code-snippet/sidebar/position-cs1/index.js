
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ButtonPlugin} from '@syncfusion/ej2-vue-buttons';

Vue.use(SidebarPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
   <ejs-sidebar id="default-sidebar" ref="sidebar" :type="type" :target="target">
        <div class="title"> Sidebar content</div>
        <div class="sub-title">
           Click the button to close the Sidebar.
        </div>
        <div class="center-align">
          <button ejs-button id="close" v-on:click="closeClick" class="e-btn close-btn">Close Sidebar</button>
        </div>
    </ejs-sidebar>
        <div id="head">
          <ejs-button id="toggle" ref="togglebtn" cssClass="e-flat" iconCss="e-icons e-menu" isToggle="true" v-on:click.native="btnClick">Open</ejs-button>
        </div>
        <div>
        <div id="maincontent" class="content">
            <div>
                <div class="title">Main content</div>
                <div class="center-align">
                   content goes here.
                </div>
            </div>
        </div>
        </div>
</div>`,

    data () {
        return {
         type :'Push',
         target : '.content'
        }
    },
    methods: {
        btnClick: function(){
        if(this.$refs.togglebtn.$el.classList.contains('e-active')){
            this.$refs.togglebtn.Content = 'Open';
            this.$refs.sidebar.hide();
        }
        else{
            this.$refs.togglebtn.Content = 'Close';
            this.$refs.sidebar.show();
        }
    },
        closeClick: function() {
         this.$refs.sidebar.hide();
         this.$refs.togglebtn.$el.classList.remove('e-active');
         this.$refs.togglebtn.Content = 'Open';
        }
    }
});