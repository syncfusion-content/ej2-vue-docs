
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { TreeViewPlugin } from '@syncfusion/ej2-vue-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

Vue.use(SidebarPlugin);
Vue.use( TreeViewPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
       <div class="col-lg-8 control-section">
           <div class='main-header' id='header-section'>
                <ul class='header-list'>
                    <li class='float-left header-style icon-menu' id='hamburger' v-on:click="toggleClick" ref="sidbarToggle"></li>
                    <li class='float-left header-style nav-pane'><b>Navigation Pane</b></li>
                    <li class='header-style float-right support border-left'><b>Support</b></li>
                </ul>
            </div>
            <!--Sidebar element declaration-->
            <ejs-sidebar id='sidebar-treeview' :enableDock='enableDock'  :width='width' :dockSize='dockSize' :mediaQuery='mediaQuery' :target='target' ref="sidebarInstance" :close="close">
                <div class='main-menu'>
                    <div>
                    <ejs-treeview id='main-treeview' :fields='fields' expandOn='Click'  ref="treeviewInstance" ></ejs-treeview>
                    </div>
                </div>
            </ejs-sidebar>
            <!--End of sidebar declaration-->
        </div>
         <div class='main-content' id='main-text'>
            <div class='sidebar-content'>
                <h2 class='sidebar-heading'> Responsive Sidebar With Treeview</h2>
                <p class='paragraph-content'> This is a graphical aid for visualising and categorising the site,
                in the style of an expandable and collapsable treeview component. It auto-expands to display the node(s),
                 if any, corresponding to the currently viewed title, highlighting that node(s) and its ancestors. Load-on-demand
                 when expanding nodes is available where supported (most graphical browsers), falling back to a full-page reload.
                 MediaWiki-supported caching, aside from squid, has been considered so that unnecessary re-downloads of content are
                  avoided where possible. The complete expanded/collapsed state of the treeview persists across page views in most
                  situations</p>
                <p class='paragraph-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.</p>
                <div class='line'></div>
                <h2 class='sidebar-heading'>Lorem Ipsum Dolor</h2>
                <p class='paragraph-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div class='line'></div>
                <h2 class='sidebar-heading'> Lorem Ipsum Dolor</h2>
                <p class='paragraph-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 <div class='line'></div>
                <h2 class='sidebar-heading'> Lorem Ipsum Dolor</h2>
                <p class='paragraph-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        <!--end of main content declaration -->
    </div>
`,

       data () {
           var data=[
            {
                nodeId: '01', nodeText: 'Installation', iconCss: 'icon-microchip icon',
                },
                {
                    nodeId: '02', nodeText: 'Deployment', iconCss: 'icon-thumbs-up-alt icon',
                },
                {
                    nodeId: '03', nodeText: 'Quick Start', iconCss: 'icon-docs icon',
                },
                {
                    nodeId: '04', nodeText: 'Components', iconCss: 'icon-th icon',
                    nodeChild: [
                        { nodeId: '04-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
                        { nodeId: '04-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                        { nodeId: '04-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                        { nodeId: '04-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                        { nodeId: '04-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                        { nodeId: '04-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
                    ]
                },
                {
                    nodeId: '05', nodeText: 'API Reference', iconCss: 'icon-code icon',
                    nodeChild: [
                        { nodeId: '05-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
                        { nodeId: '05-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                        { nodeId: '05-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                        { nodeId: '05-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                        { nodeId: '05-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                        { nodeId: '05-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
                    ]
                },
                {
                    nodeId: '06', nodeText: 'Browser Compatibility', iconCss: 'icon-chrome icon'
                },
                {
                    nodeId: '07', nodeText: 'Upgrade Packages', iconCss: 'icon-up-hand icon'
                },
                {
                    nodeId: '08', nodeText: 'Release Notes', iconCss: 'icon-bookmark-empty icon'
                },
                {
                    nodeId: '09', nodeText: 'FAQ', iconCss: 'icon-help-circled icon'
                },
                {
                    nodeId: '10', nodeText: 'License', iconCss: 'icon-doc-text icon'
                }
        ];
        return {
            fields: { child: 'nodeChild', dataSource: data, iconCss: 'iconCss' , id: 'nodeId', text: 'nodeText'},
            enableDock: true,
            dockSize : '47px',
            width : '290px',
            target: '.main-content',
            mediaQuery: '(min-width: 600px)',
        };
     },
     methods: {
        toggleClick: function() {
            if(this.$refs.sidebarInstance.ej2Instances.isOpen)
            {
                this.$refs.sidebarInstance.hide();
                this.$refs.treeviewInstance.ej2Instances.collapseAll();
            }
            else {
                this.$refs.sidebarInstance.show();
                this.$refs.treeviewInstance.ej2Instances.expandAll();
            }  
        },
        close:function() {
           this.$refs.treeviewInstance.ej2Instances.collapseAll();
        },
    }

});