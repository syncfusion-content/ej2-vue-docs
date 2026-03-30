<template>
  <div class="control-pane">
    <div class="control-section">

      <button @click="exportPNG" style="margin-right: 5px;">Export PNG</button>
      <button @click="exportPDF" style="margin-right: 5px;">Export PDF</button>
      <button @click="exportSVG" style="margin-bottom: 10px;">Export SVG</button>

      <EjsSankey
        ref="sankeyRef"
        id="sankey-container"
        width="90%"
        height="450px"
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


function doExport(format, fileName) {
  const c = sankeyRef.value;
  if (!c) return;

  const proxied = typeof c.export === 'function' ? c.export.bind(c) : null;
  const instance = c.ej2Instances?.export ? c.ej2Instances.export.bind(c.ej2Instances) : null;

  (proxied || instance)?.(format, fileName);
}

function exportPNG() { doExport('PNG', 'Sankey'); }
function exportPDF() { doExport('PDF', 'Sankey'); }
function exportSVG() { doExport('SVG', 'Sankey'); }

provide("sankey", [SankeyTooltip, SankeyLegend, SankeyExport]);
</script>

<style>
#sankey-container {
  height: 450px;
}
</style>