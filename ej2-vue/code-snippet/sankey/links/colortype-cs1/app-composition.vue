<template>
  <div class="control-pane">
    <div class="control-section">
      <EjsSankey
        id="sankey-container"
        width="90%"
        height="450px"
        :linkStyle="linkStyle"
      >
        <ESankeyNodesCollection>
          <ESankeyNode id="Agricultural Waste" fill="#FF6B6B" />
          <ESankeyNode id="Biomass Residues" />
          <ESankeyNode id="Bio-conversion" fill="#4ECDC4" />
          <ESankeyNode id="Liquid Biofuel" fill="#45B7D1" />
          <ESankeyNode id="Electricity" fill="#FFA07A" />
          <ESankeyNode id="Heat" fill="#98D8C8" />
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

const linkStyle = {
  colorType: "Blend"
};

provide("sankey", [SankeyTooltip, SankeyLegend]);
</script>

<style>
#sankey-container {
  height: 450px;
}
</style>
