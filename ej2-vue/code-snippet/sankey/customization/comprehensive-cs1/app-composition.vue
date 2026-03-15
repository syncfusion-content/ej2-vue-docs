<template>
  <div class="control-pane">
    <div class="control-section" id="sankey-container">
      <EjsSankey
         width="90%"
        height="450px"
        :title="title"
        :margin="margin"
        :nodeStyle="nodeStyle"
        :linkStyle="linkStyle"
        :labelSettings="labelSettings"
        :tooltip="tooltip"
        :legendSettings="legendSettings"
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
import { provide, ref } from "vue";
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

const title = ref("Comprehensive Sankey Customization");
const margin = ref({ left: 40, right: 40, top: 40, bottom: 40 });
const nodeStyle = ref({ opacity: 0.85 });
const linkStyle = ref({ opacity: 0.6, curvature: 0.5 });
const labelSettings = ref({ textStyle: { fontWeight: "bold" } });
const tooltip = ref({
  enable: true,
  format: "<b>${sourceNodeName} → ${targetNodeName}</b><br/>Value: ${value}"
});
const legendSettings = ref({ visible: true, position: "Bottom" });

provide("sankey", [SankeyTooltip, SankeyLegend, SankeyExport]);
</script>
