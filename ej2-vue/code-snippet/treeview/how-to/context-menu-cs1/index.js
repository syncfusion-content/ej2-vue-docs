
import Vue from 'vue';

import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(ContextMenuPlugin);

import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(TreeViewPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class="control_wrapper">
        <ejs-treeview id='treeview' ref="treeview" :fields="fields" :nodeClicked='nodeclicked'>
                <ejs-contextmenu id='contextmenutree' target='#treeview' ref="contextMenu" :items='menuItems' :beforeOpen='beforeopen'
                    :select='menuclick'></ejs-contextmenu>
        </ejs-treeview>
    </div>
  </div>
`,

  data () {
      var dataSource =  [
        { id: '01', name: 'Local Disk (C:)', expanded: true, hasAttribute:{class:'remove rename'},
            subChild: [
                {
                    id: '01-01', name: 'Program Files',
                    subChild: [
                        { id: '01-01-01', name: 'Windows NT' },
                        { id: '01-01-02', name: 'Windows Mail' },
                        { id: '01-01-03', name: 'Windows Photo Viewer' },
                    ]
                },
                {
                    id: '01-02', name: 'Users', expanded: true,
                    subChild: [
                        { id: '01-02-01', name: 'Smith' },
                        { id: '01-02-02', name: 'Public' },
                        { id: '01-02-03', name: 'Admin' },
                    ]
                },
                {
                    id: '01-03', name: 'Windows',
                    subChild: [
                        { id: '01-03-01', name: 'Boot' },
                        { id: '01-03-02', name: 'FileManager' },
                        { id: '01-03-03', name: 'System32' },
                    ]
                },
            ]
        },
        {
            id: '02', name: 'Local Disk (D:)', hasAttribute:{class:'rename'},
            subChild: [
                {
                    id: '02-01', name: 'Personals',
                    subChild: [
                        { id: '02-01-01', name: 'My photo.png' },
                        { id: '02-01-02', name: 'Rental document.docx' },
                        { id: '02-01-03', name: 'Pay slip.pdf' },
                    ]
                },
                {
                    id: '02-02', name: 'Projects',
                    subChild: [
                        { id: '02-02-01', name: 'ASP Application' },
                        { id: '02-02-02', name: 'TypeScript Application' },
                        { id: '02-02-03', name: 'React Application' },
                    ]
                },
                {
                    id: '02-03', name: 'Office',
                    subChild: [
                        { id: '02-03-01', name: 'Work details.docx' },
                        { id: '02-03-02', name: 'Weekly report.docx' },
                        { id: '02-03-03', name: 'Wish list.csv' },
                    ]
                },
            ]
        },
        {
            id: '03', name: 'Local Disk (E:)', icon: 'folder', hasAttribute:{class:'remove'},
            subChild: [
                {
                    id: '03-01', name: 'Pictures',
                    subChild: [
                        { id: '03-01-01', name: 'Wind.jpg' },
                        { id: '03-01-02', name: 'Stone.jpg' },
                        { id: '03-01-03', name: 'Home.jpg' },
                    ]
                },
                {
                    id: '03-02', name: 'Documents',
                        subChild: [
                        { id: '03-02-01', name: 'Environment Pollution.docx' },
                        { id: '03-02-02', name: 'Global Warming.ppt' },
                        { id: '03-02-03', name: 'Social Network.pdf' },
                    ]
                },
                {
                    id: '03-03', name: 'Study Materials',
                    subChild: [
                        { id: '03-03-01', name: 'UI-Guide.pdf' },
                        { id: '03-03-02', name: 'Tutorials.zip' },
                        { id: '03-03-03', name: 'TypeScript.7z' },
                    ]
                },
            ]
        }
    ];
    return {
        fields : { dataSource: dataSource, id: 'id', text: 'name', child: 'subChild', htmlAttributes: 'hasAttribute' },
        menuItems : [
            { text: 'Add New Item' },
            { text: 'Rename Item' },
            { text: 'Remove Item' }
        ],
        index : 1,
    }
  },
   methods: {
       nodeclicked: function(args) {
            if (args.event.which === 3) {
                var treeObj = this.$refs.treeview.ej2Instances;
                treeObj.selectedNodes = [args.node.getAttribute('data-uid')];
            }
        },
        menuclick: function(args) {
            var treevalidate = this.$refs.treeview.ej2Instances;
            var targetNodeId = treevalidate.selectedNodes[0];
            if (args.item.text == "Add New Item") {
                var nodeId = "tree_" + this.index;
                var item = { id: nodeId, name: "New Folder" };
                treevalidate.addNodes([item], targetNodeId, null);
                this.index++;
                treevalidate.fields.dataSource.push(item);
                treevalidate.beginEdit(nodeId);
            }
            else if (args.item.text == "Remove Item") {
                treevalidate.removeNodes([targetNodeId]);
            }
            else if (args.item.text == "Rename Item") {
                treevalidate.beginEdit(targetNodeId);
            }
        },
        beforeopen: function(args) {
            var targetNode =args.event.target;
            var contextMenuTree = this.$refs.contextMenu.ej2Instances;
            if (targetNode.classList.contains('remove')) {
                contextMenuTree.enableItems(['Remove Item'], false);
            }
            else {
                contextMenuTree.enableItems(['Remove Item'], true);
            }
            if (targetNode.classList.contains('rename')) {
                contextMenuTree.enableItems(['Rename Item'], false);
            }
            else {
                contextMenuTree.enableItems(['Rename Item'], true);
            }
        }
    }

});