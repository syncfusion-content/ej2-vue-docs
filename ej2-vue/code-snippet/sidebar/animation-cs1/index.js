
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

Vue.use(SidebarPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
       <div class="col-lg-8 control-section">
           <!-- Declaration of sidebar element-->
            <ejs-sidebar  id="sidebar-element"  class="sidebar" :showBackdrop="showBackdrop" :closeOnDocumentClick="closeOnDocumentClick" ref="sidebar" :width="width" >
                <div class="title"> Sidebar content</div>
                <div class="sub-title">
                    * Sidebar is rendered with animation effect
                </div>
                <div class="center-align">
                    <!-- Declaration of button element-->
                    <button  ejs-button  id="close_btn" v-on:click="closeClick_btn"  class="e-btn close-btn">Close Sidebar</button>
                </div>
            </ejs-sidebar>
            <!-- End of sidebar element-->
        </div>
        <div class="content">
            <div class="title">Sidebar Transitions</div>
            <div class="sub-title"> * Click the below button to render the Sidebar with animation effect.</div>
            <div class="center-align">
               <!-- Declaration of button element-->
                <button  ejs-button  id="zoom" v-on:click="zoom"  class="e-btn e-info">Zoom Sidebar</button>
                <button  ejs-button  id="open_door" v-on:click="open_door"  class="e-btn e-info">Open Door</button>
                <button  ejs-button  id="bottom_top" v-on:click="bottom_top"  class="e-btn e-info">Bottom to Top</button>
            </div>
            <div class="center-align">
                <!-- Declaration of button element-->
                <button  ejs-button  id="rotate" v-on:click="rotate"  class="e-btn e-info">Rotate </button>
                <button  ejs-button  id="rotate_3d" v-on:click="rotate_3d"  class="e-btn e-info">Rotate 3D </button>
                <button  ejs-button  id="reverse" v-on:click="reverse"  class="e-btn e-info">Reverse Slide Out </button>
            </div>
        </div>
    </div>
`,

    data () {
        return {
            showBackdrop :true,
            closeOnDocumentClick:true,
            width: '220px',
        };
    },
    methods: {
        // Zoom Sidebar
        zoom :function() {
          this.$refs.sidebar.show();
          this.$refs.sidebar.$el.classList.add("w3-animate-zoom");
        },
        // Open Door
        open_door: function() {
            this.$refs.sidebar.show();
            const sidebar_element: Element =document.getElementsByClassName("e-sidebar-overlay")[0];
            sidebar_element.classList.add("move");
        },
        // Bottom to Top
        bottom_top :function() {
          this.$refs.sidebar.show();
          this.$refs.sidebar.$el.classList.add("w3-animate-bottom");
        },
        // Rotate Sidebar
        rotate :function() {
          this.$refs.sidebar.show();
          this.$refs.sidebar.$el.classList.add("rotate");
        },
        // Rotate 3d Effect
        rotate_3d :function() {
          this.$refs.sidebar.show();
          this.$refs.sidebar.$el.classList.add("rotate_3d");
        },
        // Reverse Slide Out
        reverse :function() {
          this.$refs.sidebar.show();
          this.$refs.sidebar.$el.classList.add("reverse_slide_out");
        },
        //Close the sidebar
        closeClick_btn : function() {
            this.$refs.sidebar.$el.classList.remove("sidebar");
            this.$refs.sidebar.$el.classList.remove("rotate");
            this.$refs.sidebar.$el.classList.remove("w3-animate-zoom");
            this.$refs.sidebar.$el.classList.remove("w3-animate-bottom");
            this.$refs.sidebar.$el.classList.remove("rotate_3d");
            this.$refs.sidebar.$el.classList.remove("reverse_slide_out");
            this.$refs.sidebar.hide();
        }
    }

});