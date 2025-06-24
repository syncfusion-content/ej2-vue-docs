<template>
  <div>
    <ejs-treeview id="treeview" ref="treeViewObj" :fields="fields" @nodeClicked="onNodeClick"></ejs-treeview>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"></ejs-imageeditor>
  </div>
</template>

<script>
import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";

export default {
  name: "App",
  components: {
    "ejs-imageeditor": ImageEditorComponent,
    "ejs-treeview": TreeViewComponent,
  },
  data() {
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
                    image: "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg",
                  },
                  {
                    nodeId: "03-01-02",
                    nodeText: "Bridge",
                    image: "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg",
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
    onNodeClick(args) {
      let treeView = this.$refs.treeViewObj?.ej2Instances;
      let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
      if (!treeView || !imageEditor) return;
      let nodeId = args.node.getAttribute("data-uid");
      let nodeData = treeView.getTreeData(nodeId)[0];
      if (nodeData?.image) {
        imageEditor.open(nodeData.image);
      }
    },
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-image-editor/styles/material.css";

#image-editor {
  width: 550px !important;
  height: 350px !important;
}
</style>