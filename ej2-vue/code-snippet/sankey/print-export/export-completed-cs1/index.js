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
    onExportComplete(args) {
      console.log("Export completed successfully");
    },

    handleExport() {
      const c = this.$refs.sankeyRef;
      if (!c) return;
      if (typeof c.export === "function") {
        c.export("PNG", "Sankey");
      } else if (c.ej2Instances && typeof c.ej2Instances.export === "function") {
        c.ej2Instances.export("PNG", "Sankey");
      } else {
        console.error("export() not found on wrapper or ej2Instances");
      }
    },
  },

  template: `
    <div class="control-pane">
      <div class="control-section">

        <button @click="handleExport" style="margin-bottom: 10px;">
          Export PNG
        </button>

        <ejs-sankey
          ref="sankeyRef"
          id="sankey-container"
          width="90%"
          height="450px"
          @exportComplete="onExportComplete"
        >
          <e-sankey-nodes>
            <e-sankey-node id="Agricultural Waste"></e-sankey-node>
            <e-sankey-node id="Biomass Residues"></e-sankey-node>
            <e-sankey-node id="Bio-conversion"></e-sankey-node>
            <e-sankey-node id="Liquid Biofuel"></e-sankey-node>
            <e-sankey-node id="Electricity"></e-sankey-node>
            <e-sankey-node id="Heat"></e-sankey-node>
          </e-sankey-nodes>

          <e-sankey-links>
            <e-sankey-link 
              sourceId="Agricultural Waste"
              targetId="Bio-conversion"
              :value="84.152"
            ></e-sankey-link>

            <e-sankey-link 
              sourceId="Biomass Residues"
              targetId="Bio-conversion"
              :value="24.152"
            ></e-sankey-link>

            <e-sankey-link 
              sourceId="Bio-conversion"
              targetId="Liquid Biofuel"
              :value="10.597"
            ></e-sankey-link>

            <e-sankey-link 
              sourceId="Bio-conversion"
              targetId="Electricity"
              :value="36.862"
            ></e-sankey-link>

            <e-sankey-link 
              sourceId="Bio-conversion"
              targetId="Heat"
              :value="60.845"
            ></e-sankey-link>
          </e-sankey-links>
          
        </ejs-sankey>

      </div>
    </div>
  `,

  provide: {
    sankey: [SankeyTooltip, SankeyLegend, SankeyExport]
  }
});