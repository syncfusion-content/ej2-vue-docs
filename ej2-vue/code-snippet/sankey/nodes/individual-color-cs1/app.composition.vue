<template>
  <div class="control-pane">
    <div class="control-section">

      <EjsSankey
        id="sankey-container"
        width="90%"
        height="450px"
      >
        <ESankeyNodesCollection>
          <ESankeyNode id="Agricultural Waste" color="#f41212"/>
          <ESankeyNode id="Biomass Residues" color="#aed62c"/>
          <ESankeyNode id="Bio-conversion" color="#259bc3"/>
          <ESankeyNode id="Liquid Biofuel" color="#0e11af"/>
          <ESankeyNode id="Electricity" color="#7a0e92"/>
          <ESankeyNode id="Heat" color="#c5b9bb"/>
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

provide("sankey", [SankeyTooltip, SankeyLegend]);
</script>

<style>
#sankey-container {
  height: 450px;
}
</style>