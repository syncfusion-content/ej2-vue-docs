<template>
  <div>
    <ejs-treeview id="treeview" ref="treeViewObj" :fields="fields" @nodeClicked="onNodeClick"></ejs-treeview>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"></ejs-imageeditor>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";

const imageEditorObj = ref(null);
const treeViewObj = ref(null);

const fields = ref({
  dataSource: [
    {
      nodeId: "01",
      nodeText: "Videos",
      icon: "folder",
      nodeChild: [
        { nodeId: "01-01", nodeText: "Naturals.mp4", icon: "video" },
        { nodeId: "01-02", nodeText: "Wild.mpeg", icon: "video" },
      ],
    },
    {
      nodeId: "02",
      nodeText: "Documents",
      icon: "folder",
      nodeChild: [
        { nodeId: "02-01", nodeText: "Environment Pollution.docx", icon: "docx" },
        { nodeId: "02-02", nodeText: "Global Water, Sanitation, & Hygiene.docx", icon: "docx" },
        { nodeId: "02-03", nodeText: "Global Warming.ppt", icon: "ppt" },
        { nodeId: "02-04", nodeText: "Social Network.pdf", icon: "pdf" },
        { nodeId: "02-05", nodeText: "Youth Empowerment.pdf", icon: "pdf" },
      ],
    },
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
});

const onNodeClick = (args) => {
  let nodeId = args.node.getAttribute("data-uid");
  let nodeData = treeViewObj.value.getTreeData(nodeId)[0];
  if (nodeData && nodeData.image) {
    imageEditorObj.value.ej2Instances.open(nodeData.image);
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