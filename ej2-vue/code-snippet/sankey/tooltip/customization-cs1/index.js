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
  data() {
    return {
      tooltip: {
        enable: true,
        textStyle: {
          fontFamily: "Arial",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          color: "#000"
        },
        fill: "#F3F3F3",
      }
    };
  },
  template: `
    <div class="control-pane">
      <div class="control-section">
        <ejs-sankey
          id="sankey-container"
          width="90%"
          height="450px"
          :tooltip="tooltip"
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
            <e-sankey-link sourceId="Agricultural Waste" targetId="Bio-conversion" :value="84.152"></e-sankey-link>
            <e-sankey-link sourceId="Biomass Residues" targetId="Bio-conversion" :value="24.152"></e-sankey-link>
            <e-sankey-link sourceId="Bio-conversion" targetId="Liquid Biofuel" :value="10.597"></e-sankey-link>
            <e-sankey-link sourceId="Bio-conversion" targetId="Electricity" :value="36.862"></e-sankey-link>
            <e-sankey-link sourceId="Bio-conversion" targetId="Heat" :value="60.845"></e-sankey-link>
          </e-sankey-links>
        </ejs-sankey>
      </div>
    </div>
  `,
  provide: {
    sankey: [SankeyTooltip, SankeyLegend, SankeyExport]
  }
});