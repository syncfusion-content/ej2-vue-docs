<template>
  <div class="control-pane">
    <div class="control-section">
      <EjsSankey
        id="sankey-container"
        width="90%"
        height="450px"
        :nodeRendering="onNodeRendering"
      >
        <ESankeyNodesCollection>
          <ESankeyNode id="Agricultural Waste" />
          <ESankeyNode id="Biomass Residues" />
          <ESankeyNode id="Bio-conversion" />
          <ESankeyNode id="Liquid Biofuel" />
          <ESankeyNode id="Electricity" />
          <ESankeyNode id="Heat" />
        </ESankeyNodesCollection>

        <ESankeyLinksCollection>
          <ESankeyLink sourceId="Agricultural Waste" targetId="Bio-conversion" :value="84.152" />
          <ESankeyLink sourceId="Biomass Residues" targetId="Bio-conversion" :value="24.152" />
          <ESankeyLink sourceId="Bio-conversion" targetId="Liquid Biofuel" :value="10.597" />
          <ESankeyLink sourceId="Bio-conversion" targetId="Electricity" :value="36.862" />
          <ESankeyLink sourceId="Bio-conversion" targetId="Heat" :value="60.845" />
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
  SankeyLegend
} from "@syncfusion/ej2-vue-charts";

function onNodeRendering(args) {
  if (args.node.id === "Bio-conversion") {
    args.node.color = "#FF6B6B";
  } else if (args.node.id === "Liquid Biofuel") {
    args.node.color = "#4ECDC4";
  } else if (args.node.id === "Electricity") {
    args.node.color = "#45B7D1";
  } else if (args.node.id === "Heat") {
    args.node.color = "#FFA07A";
  } else {
    args.node.color = "#98D8C8";
  }
}

provide("sankey", [SankeyTooltip, SankeyLegend]);
</script>
