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
      title: "Energy Flow Diagram"
    };
  },

  template: `
    <div class="control-pane">
      <div class="control-section"  id="sankey-container">
        <ejs-sankey
          width="90%"
          height="420px"
          :title="title"
        >
          <e-sankey-nodes-collection>
            <e-sankey-node id="Energy Input" :label="{ text: 'Energy Input' }" />
            <e-sankey-node id="Generation" :label="{ text: 'Generation' }" />
            <e-sankey-node id="Distribution" :label="{ text: 'Distribution' }" />
            <e-sankey-node id="Consumption" :label="{ text: 'Consumption' }" />
          </e-sankey-nodes-collection>

          <e-sankey-links-collection>
            <e-sankey-link sourceId="Energy Input" targetId="Generation" :value="500" />
            <e-sankey-link sourceId="Generation" targetId="Distribution" :value="450" />
            <e-sankey-link sourceId="Distribution" targetId="Consumption" :value="400" />
          </e-sankey-links-collection>

        </ejs-sankey>
      </div>
    </div>
  `,

  provide: {
    sankey: [SankeyTooltip, SankeyLegend, SankeyExport]
  }
});
