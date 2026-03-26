<template>
  <div class="control-pane">
    <div class="control-section" id="sankey-container">
      <EjsSankey
        width="90%"
        height="450px"
        :nodeStyle="nodeStyle"
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
import { ref, provide } from "vue";
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

const nodeStyle = ref({
  fill: "#4472C4",
  opacity: 0.8,
  border: { width: 2, color: "#2E5090" }
});

provide("sankey", [SankeyTooltip, SankeyLegend, SankeyExport]);
</script>

<style>
#sankey-container {
  height: 450px;
}
</style>
