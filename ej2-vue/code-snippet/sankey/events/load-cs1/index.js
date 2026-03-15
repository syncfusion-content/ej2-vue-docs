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
    onLoad(args) {
      console.log("Sankey chart is loading...", args);
    }
  },

  template: `
    <div class="control-pane">
      <div class="control-section" id="sankey-container">

        <ejs-sankey
          width="90%"
          height="450px"
          :load="onLoad"
        >
          <e-sankey-nodes-collection>
            <e-sankey-node id="Agricultural Waste" />
            <e-sankey-node id="Bio-conversion" />
            <e-sankey-node id="Liquid Biofuel" />
            <e-sankey-node id="Electricity" />
            <e-sankey-node id="Heat" />
          </e-sankey-nodes-collection>

          <e-sankey-links-collection>
            <e-sankey-link
              sourceId="Agricultural Waste"
              targetId="Bio-conversion"
              :value="124.729"
            />
            <e-sankey-link
              sourceId="Bio-conversion"
              targetId="Liquid Biofuel"
              :value="0.597"
            />
            <e-sankey-link
              sourceId="Bio-conversion"
              targetId="Electricity"
              :value="26.862"
            />
            <e-sankey-link
              sourceId="Bio-conversion"
              targetId="Heat"
              :value="280.845"
            />
          </e-sankey-links-collection>

          <!-- Services provided via Vue 'provide' below -->
        </ejs-sankey>

      </div>
    </div>
  `,

  provide: {
    sankey: [SankeyTooltip, SankeyLegend, SankeyExport]
  }
});
