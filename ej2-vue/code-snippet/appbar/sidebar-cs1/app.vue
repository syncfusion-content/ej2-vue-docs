<template>
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
      <ejs-sidebar id="sideTree" class="sidebar-treeview" ref="sidebarTreeviewInstance" width="220px"
        target=".main-sidebar-content" mediaQuery="(min-width: 600px)" :isOpen="true">
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
            This is a graphical aid for visualising and categorising the site, in the style of an expandable and
            collapsable treeview component.
            It auto-expands to display the node(s), if any, corresponding to the currently viewed title, highlighting
            that node(s)
            and its ancestors. Load-on-demand when expanding nodes is available where supported (most graphical
            browsers),
            falling back to a full-page reload. MediaWiki-supported caching, aside from squid, has been considered so
            that
            unnecessary re-downloads of content are avoided where possible. The complete expanded/collapsed state of
            the treeview persists across page views in most situations.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { AppBarComponent, SidebarComponent, TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: "App",
  components: {
    "ejs-appbar": AppBarComponent,
    "ejs-button": ButtonComponent,
    "ejs-sidebar": SidebarComponent,
    "ejs-textbox": TextBoxComponent,
    "ejs-treeview": TreeViewComponent
  },
  mounted() {
    var button = document.getElementById('button');
    button.addEventListener('click', toggle);

    function toggle() {
      let sidebar = document.getElementById("sideTree").ej2_instances[0];
      sidebar.toggle();
    }
  },
  data() {
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
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";

.e-appbar .e-folder {
  margin: 0 5px;
}

#wrapper.control-section {
  padding: 15px 0px;
}

#wrapper .sidebar-treeview {
  z-index: 20 !important;
}

#wrapper .main-sidebar-content {
  height: 380px;
}

.sidebar-treeview .main-menu .main-menu-header {
  color: #656a70;
  padding: 15px 15px 15px 0;
  font-size: 14px;
  width: 13em;
  margin: 0;
}

#main-text .sidebar-heading {
  font-size: 16px;
}

.sidebar-treeview .table-content {
  padding: 20px 14px;
  height: 8em;
}

#main-text .sidebar-content .line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}

#main-text .sidebar-content {
  padding: 15px;
  font-size: 14px;
}

#main-text .paragraph-content {
  padding: 15px 0;
  font-weight: normal;
  font-size: 14px;
}

.e-folder {
  text-align: center;
  font-weight: 500;
  font-size: 16px
}

.e-folder-name {
  margin-top: 1px;
}

.sidebar-treeview .e-treeview .e-icon-collapsible,
.sidebar-treeview .e-treeview .e-icon-expandable {
  float: right;
  margin: 3px;
}

.sidebar-treeview .e-treeview,
.sidebar-treeview .e-treeview .e-ul {
  padding: 0;
  margin: 0;
}

.sidebar-treeview .e-treeview .e-text-content {
  padding-left: 14px;
}

#wrapper .e-appbar {
  border-bottom: 1px solid #eaeaeae0;
}

.sidebar-treeview {
  border-right: 1px solid #eaeaeae0;
}

#reswrapper {
  border: 1px solid #d7d7d7;
}
</style>