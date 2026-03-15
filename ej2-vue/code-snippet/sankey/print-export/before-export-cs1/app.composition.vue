<template>
  <div class="control-pane">
    <div class="control-section">

      <button @click="handleExport" style="margin-bottom: 10px;">
        Export PNG
      </button>

      <EjsSankey
        ref="sankeyRef"
        id="sankey-container"
        width="90%"
        height="450px"
        :beforeExport="beforeExport"
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

const sankeyRef = ref(null);

function beforeExport(args) {
  args.cancel = false;
}

function handleExport() {
  if (sankeyRef.value) {
    sankeyRef.value.export("PNG", "Sankey");
  }
}

provide("sankey", [SankeyTooltip, SankeyLegend, SankeyExport]);
</script>

<style>
#sankey-container {
  height: 450px;
}
</style>