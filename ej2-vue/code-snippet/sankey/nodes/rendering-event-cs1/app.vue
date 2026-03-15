<template>
  <div class="control-pane">
    <div class="control-section">

      <ejs-sankey
        id="sankey-container"
        width="90%"
        height="450px"
        :nodeRendering="onNodeRendering"
      >
        <e-sankey-nodes-collection>
          <e-sankey-node id="Agricultural Waste" />
          <e-sankey-node id="Biomass Residues" />
          <e-sankey-node id="Bio-conversion" />
          <e-sankey-node id="Liquid Biofuel" />
          <e-sankey-node id="Electricity" />
          <e-sankey-node id="Heat" />
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

  methods: {
    onNodeRendering(args) {
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
  },

  components: {
    "ejs-sankey": SankeyComponent,
    "e-sankey-nodes-collection": SankeyNodesCollectionDirective,
    "e-sankey-node": SankeyNodeDirective,
    "e-sankey-links-collection": SankeyLinksCollectionDirective,
    "e-sankey-link": SankeyLinkDirective
  },

  provide: {
    sankey: [SankeyTooltip, SankeyLegend]
  }
};
</script>
