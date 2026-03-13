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
    onLabelRendering(args) {
      // Customize label appearance during rendering (same logic as React)
      args.labelStyle = {
        fontFamily: "Arial",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "12px",
        color: "#000"
      };
    }
  },

  template: `
    <div class="control-pane">
      <div class="control-section" id="sankey-container">
        <ejs-sankey
          width="90%"
          height="450px"
          :labelRendering="onLabelRendering"
        >
          <e-sankey-nodes-collection>
            <e-sankey-node id="Agricultural Waste" />
            <e-sankey-node id="Bio-conversion" />
            <e-sankey-node id="Liquid Biofuel" />
            <e-sankey-node id="Electricity" />
            <e-sankey-node id="Heat" />
          </e-sankey-nodes-collection>

          <e-sankey-links-collection>
            <e-sankey-link sourceId="Agricultural Waste" targetId="Bio-conversion" :value="124.729" />
            <e-sankey-link sourceId="Bio-conversion" targetId="Liquid Biofuel" :value="0.597" />
            <e-sankey-link sourceId="Bio-conversion" targetId="Electricity" :value="26.862" />
            <e-sankey-link sourceId="Bio-conversion" targetId="Heat" :value="280.845" />
          </e-sankey-links-collection>

        </ejs-sankey>
      </div>
    </div>
  `,

  provide: {
    sankey: [SankeyTooltip, SankeyLegend, SankeyExport]
  }
});