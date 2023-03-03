
  import Vue from "vue";
  import { AppBarPlugin, SidebarPlugin, TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
  import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
  import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

  Vue.use(AppBarPlugin);
  Vue.use(SidebarPlugin);
  Vue.use(TreeViewPlugin);
  Vue.use(TextBoxPlugin);
  Vue.use(ButtonPlugin);

  
new Vue({
	el: '#app',
	template: `
  <div id="wrapper" class="control-section">
    <div id="reswrapper">
        <div>
          <ejs-appbar>
            <ejs-button id="button" cssClass="e-inherit" iconCss="e-icons e-menu"></ejs-button>
            <div class="e-folder">
              <div class="e-folder-name">Navigation Pane</div>
            </div>
          </ejs-appbar>
        </div>
        <ejs-sidebar id="sideTree" class="sidebar-treeview" ref="sidebarTreeviewInstance" width="220px" target=".main-sidebar-content" mediaQuery="(min-width: 600px)" :isOpen="true">
            <div class='main-menu'>
                <div class="table-content">
                    <ejs-textbox id="resSearch" placeholder="Search..."></ejs-textbox>
                    <p class="main-menu-header">TABLE OF CONTENTS</p>
                </div>
                <div>
                    <ejs-treeview id='mainTree' cssClass="main-treeview" :fields="fields" expandOn='Click'>
                    </ejs-treeview>
                </div>
            </div>
        </ejs-sidebar>
        <div class="main-sidebar-content" id="main-text">
            <div class="sidebar-content">
                <div class="sidebar-heading"> Responsive Sidebar with Treeview</div>
                <p class="paragraph-content">
                    This is a graphical aid for visualising and categorising the site, in the style of an expandable and collapsable treeview component.
                    It auto-expands to display the node(s), if any, corresponding to the currently viewed title, highlighting that node(s)
                    and its ancestors. Load-on-demand when expanding nodes is available where supported (most graphical browsers),
                    falling back to a full-page reload. MediaWiki-supported caching, aside from squid, has been considered so that
                    unnecessary re-downloads of content are avoided where possible. The complete expanded/collapsed state of
                    the treeview persists across page views in most situations.
                </p>
            </div>
        </div>
    </div>
  </div>
`,

    mounted () {
      var button = document.getElementById('button');
      button.addEventListener('click', toggle);

      function toggle() {
        let sidebar = document.getElementById("sideTree").ej2_instances[0];
        sidebar.toggle();
      }
    },
    data () {
      var dataSource = [
        {
          nodeId: '01', nodeText: 'Installation',
        },
        {
          nodeId: '02', nodeText: 'Deployment',
        },
        {
          nodeId: '03', nodeText: 'Quick Start',
        },
        {
          nodeId: '04', nodeText: 'Components',
          nodeChild: [
            { nodeId: '04-01', nodeText: 'Calendar' },
            { nodeId: '04-02', nodeText: 'DatePicker' },
            { nodeId: '04-03', nodeText: 'DateTimePicker' },
            { nodeId: '04-04', nodeText: 'DateRangePicker' },
            { nodeId: '04-05', nodeText: 'TimePicker' },
            { nodeId: '04-06', nodeText: 'SideBar' }
          ]
        }
      ];
      return {
        fields: { dataSource: dataSource, id: 'nodeId', text: 'nodeText', child: 'nodeChild' }
      }
    }
  
});