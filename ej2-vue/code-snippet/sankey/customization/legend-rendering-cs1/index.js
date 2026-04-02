import Vue from "vue";
import {
  SankeyPlugin,
  SankeyTooltip,
  SankeyLegend,
  SankeyExport
} from "@syncfusion/ej2-vue-charts";

Vue.use(SankeyPlugin);

new Vue({
  el: '#app',
  data: function () {
    return {
      legendSettings: {
        visible: true,
        position: 'Bottom'
      }
    };
  },
  methods: {
    onLegendItemRendering(args) {
      // Customize legend item: text + style
      if (args && args.text) {
        args.text = String(args.text).toUpperCase();
      }
      args.fill= '#333'
    }
  },
  template: `
    <div class="control-pane">
      <div class="control-section" id="sankey-container">
        <ejs-sankey
          width="90%"
          height="450px"
          :legendSettings="legendSettings"
          @legendItemRendering="onLegendItemRendering"
        >
          <e-sankey-nodes>
            <e-sankey-node id="Agricultural Waste"></e-sankey-node>
            <e-sankey-node id="Bio-conversion"></e-sankey-node>
            <e-sankey-node id="Liquid Biofuel"></e-sankey-node>
            <e-sankey-node id="Electricity"></e-sankey-node>
            <e-sankey-node id="Heat"></e-sankey-node>
          </e-sankey-nodes>

          <e-sankey-links>
            <e-sankey-link sourceId="Agricultural Waste" targetId="Bio-conversion" :value="124.729"></e-sankey-link>
            <e-sankey-link sourceId="Bio-conversion" targetId="Liquid Biofuel" :value="0.597"></e-sankey-link>
            <e-sankey-link sourceId="Bio-conversion" targetId="Electricity" :value="26.862"></e-sankey-link>
            <e-sankey-link sourceId="Bio-conversion" targetId="Heat" :value="280.845"></e-sankey-link>
          </e-sankey-links>
        </ejs-sankey>
      </div>
    </div>
  `,
  provide: {
    sankey: [SankeyTooltip, SankeyLegend, SankeyExport]
  }
});