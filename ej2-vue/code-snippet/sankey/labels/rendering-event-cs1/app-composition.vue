<template>
  <div class="control-pane">
    <div class="control-section">
      <EjsSankey
        id="sankey-container"
        width="90%"
        height="450px"
        :labelSettings="labelSettings"
        :labelRendering="onLabelRendering"
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

// Labels visible globally
const labelSettings = { visible: true };

// Event handler: customize label for "Agricultural Waste"
function onLabelRendering(args) {
  if (args.text === "Agricultural Waste") {
    args.labelStyle = {
      fontWeight: "bold",
      color: "#FF6B6B",
      fontSize: "14px",
      fontFamily: 'Arial',
      fontStyle: 'normal'
    };
  }
}

provide("sankey", [SankeyTooltip, SankeyLegend]);
</script>
