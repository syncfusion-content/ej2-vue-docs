<template>
  <div class="control-pane">
    <div class="control-section" id="sankey-container">
      <EjsSankey
        width="90%"
        height="450px"
        :labelRendering="onLabelRendering"
      >
        <ESankeyNodesCollection>
          <ESankeyNode id="Agricultural Waste" />
          <ESankeyNode id="Bio-conversion" />
          <ESankeyNode id="Liquid Biofuel" />
          <ESankeyNode id="Electricity" />
          <ESankeyNode id="Heat" />
        </ESankeyNodesCollection>

        <ESankeyLinksCollection>
          <ESankeyLink sourceId="Agricultural Waste" targetId="Bio-conversion" :value="124.729" />
          <ESankeyLink sourceId="Bio-conversion" targetId="Liquid Biofuel" :value="0.597" />
          <ESankeyLink sourceId="Bio-conversion" targetId="Electricity" :value="26.862" />
          <ESankeyLink sourceId="Bio-conversion" targetId="Heat" :value="280.845" />
        </ESankeyLinksCollection>
      </EjsSankey>
    </div>
  </div>
</template>

<script setup>
import { provide } from "vue";
import {
  SankeyComponent as EjsSankey,
  SankeyNodesCollectionDirective as ESankeyNodesCollection,
  SankeyNodeDirective as ESankeyNode,
  SankeyLinksCollectionDirective as ESankeyLinksCollection,
  SankeyLinkDirective as ESankeyLink,
  SankeyTooltip,
  SankeyLegend,
  SankeyExport
} from "@syncfusion/ej2-vue-charts";

function onLabelRendering(args) {
  args.labelStyle = {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    color: "#000"
  };
}

provide("sankey", [SankeyTooltip, SankeyLegend, SankeyExport]);
</script>

<style>
#sankey-container {
  height: 450px;
}
</style>
