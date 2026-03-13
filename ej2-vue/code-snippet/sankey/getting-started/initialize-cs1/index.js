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
      title: "Sankey Chart"
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
            <e-sankey-node id="A" />
            <e-sankey-node id="B" />
            <e-sankey-node id="C" />
          </e-sankey-nodes-collection>

          <e-sankey-links-collection>
            <e-sankey-link sourceId="A" targetId="B" :value="100" />
            <e-sankey-link sourceId="B" targetId="C" :value="80" />
          </e-sankey-links-collection>

        </ejs-sankey>
      </div>
    </div>
  `,

  provide: {
    sankey: [SankeyTooltip, SankeyLegend, SankeyExport]
  }
});