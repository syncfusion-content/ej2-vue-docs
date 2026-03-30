<template>
  <div class="control-pane">
    <div class="control-section">

      <button @click="handleExportPNG" style="margin-right: 5px;">Export PNG</button>
      <button @click="handleExportPDF" style="margin-right: 5px;">Export PDF</button>
      <button @click="handleExportSVG" style="margin-bottom: 10px;">Export SVG</button>

      <ejs-sankey
        ref="sankeyRef"
        id="sankey-container"
        width="90%"
        height="450px"
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
  SankeyLegend,
  SankeyExport
} from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",

  methods: {
   
doExport(format, fileName) {
      const c = this.$refs.sankeyRef;
      if (!c) return;

      const proxied = typeof c.export === 'function' ? c.export.bind(c) : null;
      const instance = c.ej2Instances?.export ? c.ej2Instances.export.bind(c.ej2Instances) : null;

      (proxied || instance)?.(format, fileName);
    },

    handleExportPNG() { this.doExport('PNG', 'Sankey'); },
    handleExportPDF() { this.doExport('PDF', 'Sankey'); },
    handleExportSVG() { this.doExport('SVG', 'Sankey'); },
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

<style>
#sankey-container {
  height: 450px;
}
</style>