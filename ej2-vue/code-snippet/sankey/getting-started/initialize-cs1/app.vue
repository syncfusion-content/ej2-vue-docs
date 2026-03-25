<template>
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
</template>

<script>
import {
  SankeyComponent,
  SankeyNodesCollectionDirective,
  SankeyNodeDirective,
  SankeyLinksCollectionDirective,
  SankeyLinkDirective,
  SankeyTooltip,
  SankeyLegend,
  SankeyExport
} from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",

  data() {
    return {
      title: "Sankey Chart"
    };
  },

  components: {
    "ejs-sankey": SankeyComponent,
    "e-sankey-nodes-collection": SankeyNodesCollectionDirective,
    "e-sankey-node": SankeyNodeDirective,
    "e-sankey-links-collection": SankeyLinksCollectionDirective,
    "e-sankey-link": SankeyLinkDirective
  },

  provide: {
    sankey: [SankeyTooltip, SankeyLegend, SankeyExport]
  }
};
</script>

<style>
#sankey-container {
  height: 450px;
}
</style>