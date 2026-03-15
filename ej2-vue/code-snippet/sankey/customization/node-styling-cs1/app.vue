<template>
  <div class="control-pane">
    <div class="control-section" id="sankey-container">
      <ejs-sankey
        width="90%"
        height="450px"
        :nodeStyle="nodeStyle"
      >
        <e-sankey-nodes-collection>
          <e-sankey-node id="Agricultural Waste" />
          <e-sankey-node id="Bio-conversion" />
          <e-sankey-node id="Liquid Biofuel" />
          <e-sankey-node id="Electricity" />
          <e-sankey-node id="Heat" />
        </e-sankey-nodes-collection>

        <e-sankey-links-collection>
          <e-sankey-link sourceId="Agricultural Waste" targetId="Bio-conversion" :value="124.729" />
          <e-sankey-link sourceId="Bio-conversion" targetId="Liquid Biofuel" :value="0.597" />
          <e-sankey-link sourceId="Bio-conversion" targetId="Electricity" :value="26.862" />
          <e-sankey-link sourceId="Bio-conversion" targetId="Heat" :value="280.845" />
        </e-sankey-links-collection>
      </ejs-sankey>
    </div>
  </div>
</template>

<script>
import {
  SankeyComponent,
  SankeyNodesCollectionDirective,
  SankeyNodeDirective,
  SankeyLinksCollectionDirective,
  SankeyLinkDirective,
  SankeyTooltip,
  SankeyLegend,
  SankeyExport
} from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  data() {
    return {
      nodeStyle: {
        fill: "#4472C4",
        opacity: 0.8,
        border: { width: 2, color: "#2E5090" }
      }
    };
  },
  components: {
    "ejs-sankey": SankeyComponent,
    "e-sankey-nodes-collection": SankeyNodesCollectionDirective,
    "e-sankey-node": SankeyNodeDirective,
    "e-sankey-links-collection": SankeyLinksCollectionDirective,
    "e-sankey-link": SankeyLinkDirective
  },
  provide: {
    sankey: [SankeyTooltip, SankeyLegend, SankeyExport]
  }
};
</script>
