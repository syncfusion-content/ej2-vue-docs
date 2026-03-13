<template>
  <div class="control-pane">
    <div class="control-section" id="sankey-container">

      <EjsSankey
        width="90%"
        height="450px"
      >
        <ESankeyNodesCollection>
          <ESankeyNode id="Agricultural Waste" fill="#FF6B6B" />
          <ESankeyNode id="Bio-conversion" fill="#4ECDC4" />
          <ESankeyNode id="Liquid Biofuel" fill="#45B7D1" />
          <ESankeyNode id="Electricity" fill="#FFA07A" />
          <ESankeyNode id="Heat" fill="#98D8C8" />
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

provide("sankey", [SankeyTooltip, SankeyLegend, SankeyExport]);
</script>
