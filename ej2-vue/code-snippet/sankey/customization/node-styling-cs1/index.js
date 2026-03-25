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
      nodeStyle: {
        fill: "#4472C4",
        opacity: 0.8,
        border: { width: 2, color: "#2E5090" }
      }
    };
  },

  template: `
    <div class="control-pane">
      <div class="control-section" id="sankey-container">
        <ejs-sankey
          width="90%"
          height="450px"
          :nodeStyle="nodeStyle"
        >
          <e-sankey-nodes>
            <e-sankey-node id="Agricultural Waste" />
            <e-sankey-node id="Bio-conversion" />
            <e-sankey-node id="Liquid Biofuel" />
            <e-sankey-node id="Electricity" />
            <e-sankey-node id="Heat" />
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
``