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
      <div class="control-section" id="sankey-container">

        <ejs-sankey
          width="90%"
          height="450px"
        >
          <e-sankey-nodes>
            <e-sankey-node id="Agricultural Waste" fill="#FF6B6B" />
            <e-sankey-node id="Bio-conversion" fill="#4ECDC4" />
            <e-sankey-node id="Liquid Biofuel" fill="#45B7D1" />
            <e-sankey-node id="Electricity" fill="#FFA07A" />
            <e-sankey-node id="Heat" fill="#98D8C8" />
          </e-sankey-nodes>

          <e-sankey-links>
            <e-sankey-link sourceId="Agricultural Waste" targetId="Bio-conversion" :value="124.729" />
            <e-sankey-link sourceId="Bio-conversion" targetId="Liquid Biofuel" :value="0.597" />
            <e-sankey-link sourceId="Bio-conversion" targetId="Electricity" :value="26.862" />
            <e-sankey-link sourceId="Bio-conversion" targetId="Heat" :value="280.845" />
          </e-sankey-links>

        </ejs-sankey>

      </div>
    </div>
  `,

  provide: {
    sankey: [SankeyTooltip, SankeyLegend, SankeyExport]
  }
});