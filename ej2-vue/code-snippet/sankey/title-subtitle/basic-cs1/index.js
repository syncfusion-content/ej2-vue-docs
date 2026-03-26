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

  template: `
    <div class="control-pane">
      <div class="control-section"  id="sankey-container">

        <ejs-sankey
          width="90%"
          height="450px"
          title="Energy Flow Diagram"
          subTitle="Agricultural Energy Conversion"
        >
          <e-sankey-nodes>
            <e-sankey-node id="Agricultural Waste" />
            <e-sankey-node id="Biomass Residues" />
            <e-sankey-node id="Bio-conversion" />
            <e-sankey-node id="Liquid Biofuel" />
            <e-sankey-node id="Electricity" />
            <e-sankey-node id="Heat" />
          </e-sankey-nodes>

          <e-sankey-links>
            <e-sankey-link sourceId="Agricultural Waste" targetId="Bio-conversion" :value="84.152" />
            <e-sankey-link sourceId="Biomass Residues" targetId="Bio-conversion" :value="24.152" />
            <e-sankey-link sourceId="Bio-conversion" targetId="Liquid Biofuel" :value="10.597" />
            <e-sankey-link sourceId="Bio-conversion" targetId="Electricity" :value="36.862" />
            <e-sankey-link sourceId="Bio-conversion" targetId="Heat" :value="60.845" />
          </e-sankey-links>

        </ejs-sankey>

      </div>
    </div>
  `,

  provide: {
    sankey: [SankeyTooltip, SankeyLegend, SankeyExport]
  }
});