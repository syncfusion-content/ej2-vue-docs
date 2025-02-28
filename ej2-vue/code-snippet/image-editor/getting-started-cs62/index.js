
import Vue from "vue";
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(ImageEditorPlugin);
Vue.use(TreeViewPlugin);

new Vue({
  el: "#app",
  template: `
    <div>
      <ejs-treeview id="treeview" ref="treeViewObj" :fields="fields" @nodeClicked="onNodeClick"></ejs-treeview>
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"></ejs-imageeditor>
    </div>
  `,
  data: function () {
    return {
      fields: {
        dataSource: [
          {
            nodeId: "03",
            nodeText: "Pictures",
            icon: "folder",
            expanded: true,
            nodeChild: [
              {
                nodeId: "03-01",
                nodeText: "Camera Roll",
                icon: "folder",
                expanded: true,
                nodeChild: [
                  {
                    nodeId: "03-01-01",
                    nodeText: "Flower",
                    image: "https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png",
                  },
                  {
                    nodeId: "03-01-02",
                    nodeText: "Bridge",
                    image: "https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png",
                  },
                ],
              },
            ],
          },
        ],
        id: "nodeId",
        text: "nodeText",
        child: "nodeChild",
      },
    };
  },
  methods: {
    onNodeClick: function (args) {
      let treeView = this.$refs.treeViewObj?.ej2Instances;
      let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
      if (!treeView || !imageEditor) return;
      let nodeId = args.node.getAttribute("data-uid");
      let nodeData = treeView.getTreeData(nodeId)[0];
      if (nodeData?.image) {
        imageEditor.open(nodeData.image);
      }
    },
  },
});
