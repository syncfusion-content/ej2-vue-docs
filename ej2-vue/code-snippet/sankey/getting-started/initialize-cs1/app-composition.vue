<template>
  <div class="control-pane">
    <div class="control-section"  id="sankey-container">
      <EjsSankey
        width="90%"
        height="420px"
        :title="title"
      >
        <ESankeyNodesCollection>
          <ESankeyNode id="A" />
          <ESankeyNode id="B" />
          <ESankeyNode id="C" />
        </ESankeyNodesCollection>

        <ESankeyLinksCollection>
          <ESankeyLink sourceId="A" targetId="B" :value="100" />
          <ESankeyLink sourceId="B" targetId="C" :value="80" />
        </ESankeyLinksCollection>

      </EjsSankey>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import {
  SankeyComponent as EjsSankey,
  SankeyNodesCollectionDirective as ESankeyNodesCollection,
  SankeyNodeDirective as ESankeyNode,
  SankeyLinksCollectionDirective as ESankeyLinksCollection,
  SankeyLinkDirective as ESankeyLink,
  SankeyTooltip,
  SankeyLegend,
  SankeyExport
} from "@syncfusion/ej2-vue-charts";

const title = ref("Sankey Chart");

provide("sankey", [SankeyTooltip, SankeyLegend, SankeyExport]);
</script>

<style>
#sankey-container {
  height: 450px;
}
</style>