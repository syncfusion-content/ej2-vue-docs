<template>
  <div id="app" class="control-pane">
    <div class="control-section">
      <ejs-sankey
        id="sankey-container"
        width="90%"
        height="450px"
        :linkStyle="linkStyle"
      >
        <e-sankey-nodes-collection>
          <e-sankey-node id="Agricultural Waste" fill="#FF6B6B" />
          <e-sankey-node id="Biomass Residues" />
          <e-sankey-node id="Bio-conversion" fill="#4ECDC4" />
          <e-sankey-node id="Liquid Biofuel" fill="#45B7D1" />
          <e-sankey-node id="Electricity" fill="#FFA07A" />
          <e-sankey-node id="Heat" fill="#98D8C8" />
        </e-sankey-nodes-collection>

        <e-sankey-links-collection>
          <e-sankey-link sourceId="Agricultural Waste" targetId="Bio-conversion" :value="84.152" />
          <e-sankey-link sourceId="Biomass Residues" targetId="Bio-conversion" :value="24.152" />
          <e-sankey-link sourceId="Bio-conversion" targetId="Liquid Biofuel" :value="10.597" />
          <e-sankey-link sourceId="Bio-conversion" targetId="Electricity" :value="36.862" />
          <e-sankey-link sourceId="Bio-conversion" targetId="Heat" :value="60.845" />
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
  SankeyLegend
} from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    "ejs-sankey": SankeyComponent,
    "e-sankey-nodes-collection": SankeyNodesCollectionDirective,
    "e-sankey-node": SankeyNodeDirective,
    "e-sankey-links-collection": SankeyLinksCollectionDirective,
    "e-sankey-link": SankeyLinkDirective
  },
  data() {
    return {
      linkStyle: {
        colorType: "Blend"
      }
    };
  },
  provide: {
    sankey: [SankeyTooltip, SankeyLegend]
  }
};
</script>

<style>
#sankey-container {
  height: 450px;
}
</style>
