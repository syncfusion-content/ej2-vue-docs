import Vue from "vue";
import {
  SankeyPlugin,
  SankeyTooltip,
  SankeyLegend
} from "@syncfusion/ej2-vue-charts";

Vue.use(SankeyPlugin);

new Vue({
  el: "#app",
  template: `
    <div class="control-pane">
      <div class="control-section">
        <ejs-sankey
          id="sankey-container"
          width="90%"
          height="450px"
        >
          <e-sankey-nodes-collection>
            <e-sankey-node id="Agricultural Waste" :offset="-50"></e-sankey-node>
            <e-sankey-node id="Biomass Residues"></e-sankey-node>
            <e-sankey-node id="Bio-conversion"></e-sankey-node>
            <e-sankey-node id="Liquid Biofuel" :offset="50"></e-sankey-node>
            <e-sankey-node id="Electricity" :offset="-30"></e-sankey-node>
            <e-sankey-node id="Heat" :offset="30"></e-sankey-node>
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
    sankey: [SankeyTooltip, SankeyLegend]
  }
});