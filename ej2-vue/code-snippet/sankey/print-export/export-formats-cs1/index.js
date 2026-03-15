import Vue from "vue";
import {
  SankeyPlugin,
  SankeyTooltip,
  SankeyLegend,
  SankeyExport
} from "@syncfusion/ej2-vue-charts";

Vue.use(SankeyPlugin);

new Vue({
  el: "#app",

  methods: {
    handleExportPNG() {
      this.$refs.sankeyRef.export("PNG", "Sankey");
    },
    handleExportPDF() {
      this.$refs.sankeyRef.export("PDF", "Sankey");
    },
    handleExportSVG() {
      this.$refs.sankeyRef.export("SVG", "Sankey");
    }
  },

  template: `
    <div class="control-pane">
      <div class="control-section">

        <button @click="handleExportPNG" style="margin-right: 5px;">
          Export PNG
        </button>

        <button @click="handleExportPDF" style="margin-right: 5px;">
          Export PDF
        </button>

        <button @click="handleExportSVG" style="margin-bottom: 10px;">
          Export SVG
        </button>

        <ejs-sankey
          ref="sankeyRef"
          id="sankey-container"
          width="90%"
          height="450px"
        >

          <e-sankey-nodes-collection>
            <e-sankey-node id="Agricultural Waste"></e-sankey-node>
            <e-sankey-node id="Biomass Residues"></e-sankey-node>
            <e-sankey-node id="Bio-conversion"></e-sankey-node>
            <e-sankey-node id="Liquid Biofuel"></e-sankey-node>
            <e-sankey-node id="Electricity"></e-sankey-node>
            <e-sankey-node id="Heat"></e-sankey-node>
          </e-sankey-nodes-collection>

          <e-sankey-links-collection>
            <e-sankey-link sourceId="Agricultural Waste" targetId="Bio-conversion" :value="84.152"></e-sankey-link>
            <e-sankey-link sourceId="Biomass Residues" targetId="Bio-conversion" :value="24.152"></e-sankey-link>
            <e-sankey-link sourceId="Bio-conversion" targetId="Liquid Biofuel" :value="10.597"></e-sankey-link>
            <e-sankey-link sourceId="Bio-conversion" targetId="Electricity" :value="36.862"></e-sankey-link>
            <e-sankey-link sourceId="Bio-conversion" targetId="Heat" :value="60.845"></e-sankey-link>
          </e-sankey-links-collection>

        </ejs-sankey>

      </div>
    </div>
  `,

  provide: {
    sankey: [SankeyTooltip, SankeyLegend, SankeyExport]
  }
});