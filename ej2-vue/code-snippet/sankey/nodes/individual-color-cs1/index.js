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

          <e-sankey-nodes>
            <e-sankey-node id="Agricultural Waste" color="#f41212"/>
          <e-sankey-node id="Biomass Residues" color="#aed62c"/>
          <e-sankey-node id="Bio-conversion" color="#259bc3"/>
          <e-sankey-node id="Liquid Biofuel" color="#0e11af"/>
          <e-sankey-node id="Electricity" color="#7a0e92"/>
          <e-sankey-node id="Heat" color="#c5b9bb" />
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
    sankey: [SankeyTooltip, SankeyLegend]
  }
});