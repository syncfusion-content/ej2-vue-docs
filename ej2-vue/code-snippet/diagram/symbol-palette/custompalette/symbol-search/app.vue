<template>
  <div id="app">
    <ejs-symbolpalette id="symbolpalette" width="100%" height="100%" :palettes="palettes" :symbolWidth="60"
      :symbolHeight="60" :enableSearch="enableSearch">
    </ejs-symbolpalette>
    <ejs-diagram id="diagram" width="1000px" height="500px">
    </ejs-diagram>
  </div>
</template>

<script>
import { SymbolPaletteComponent, DiagramComponent } from "@syncfusion/ej2-vue-diagrams";

export default {
  name: "App",
  components: {
    "ejs-symbolpalette": SymbolPaletteComponent,
    "ejs-diagram": DiagramComponent,
  },
  data() {
    return {
      // Enables search for the symbol palette
      enableSearch: true,
      palettes: [
        {
          id: "basic",
          symbols: this.getFlowShapes(),
          title: "Basic Shapes",
        },
      ],
    };
  },
  methods: {
    getFlowShapes() {
      return [
        { id: "terminator", shape: { type: "Flow", shape: "Terminator" } },
        { id: "process", shape: { type: "Flow", shape: "Process" } },
        { id: "decision", shape: { type: "Flow", shape: "Decision" } },
        { id: "document", shape: { type: "Flow", shape: "Document" } },
        { id: "preDefinedProcess", shape: { type: "Flow", shape: "PreDefinedProcess" } },
        { id: "paperTap", shape: { type: "Flow", shape: "PaperTap" } },
        { id: "directData", shape: { type: "Flow", shape: "DirectData" } },
        { id: "sequentialData", shape: { type: "Flow", shape: "SequentialData" } },
        { id: "sort", shape: { type: "Flow", shape: "Sort" } },
      ];
    },
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
