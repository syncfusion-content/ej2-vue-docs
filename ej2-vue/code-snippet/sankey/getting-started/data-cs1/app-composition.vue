<template>
  <div class="control-pane">
    <div class="control-section"  id="sankey-container">
      <EjsSankey
        width="90%"
        height="420px"
        :title="title"
      >
        <ESankeyNodesCollection>
          <ESankeyNode id="Energy Input" :label="{ text: 'Energy Input' }" />
          <ESankeyNode id="Generation" :label="{ text: 'Generation' }" />
          <ESankeyNode id="Distribution" :label="{ text: 'Distribution' }" />
          <ESankeyNode id="Consumption" :label="{ text: 'Consumption' }" />
        </ESankeyNodesCollection>

        <ESankeyLinksCollection>
          <ESankeyLink sourceId="Energy Input" targetId="Generation" :value="500" />
          <ESankeyLink sourceId="Generation" targetId="Distribution" :value="450" />
          <ESankeyLink sourceId="Distribution" targetId="Consumption" :value="400" />
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

const title = ref("Energy Flow Diagram");

provide("sankey", [SankeyTooltip, SankeyLegend, SankeyExport]);
</script>

<style>
#sankey-container {
  height: 450px;
}
</style>
