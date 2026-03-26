import Vue from "vue";
import {
  SankeyPlugin,
  SankeyTooltip,
  SankeyLegend
} from "@syncfusion/ej2-vue-charts";

Vue.use(SankeyPlugin);

new Vue({
  el: "#app",
  data() {
    return {
      labelSettings: { visible: true }
    };
  },
  template: `
    <div class="control-pane">
      <div class="control-section">
        <ejs-sankey
          id="sankey-container"
          width="90%"
          height="450px"
          :labelSettings="labelSettings"
        >
          <e-sankey-nodes>
            <e-sankey-node id="Agricultural Waste" :label="{ text: 'Agri Waste', padding: 0 }>"</e-sankey-node>
            <e-sankey-node id="Biomass Residues" :label="{ text: 'Biomass', padding: 10 }"></e-sankey-node>
            <e-sankey-node id="Bio-conversion" :label="{ text: 'Bio', padding: 0 }"></e-sankey-node>
            <e-sankey-node id="Liquid Biofuel" :label="{ text: 'Liquid', padding: 10 }"></e-sankey-node>
            <e-sankey-node id="Electricity" :label="{ text: 'Electricity', padding: 0 }"></e-sankey-node>
            <e-sankey-node id="Heat"  :label="{ text: 'Heat', padding: 10 }"></e-sankey-node>
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