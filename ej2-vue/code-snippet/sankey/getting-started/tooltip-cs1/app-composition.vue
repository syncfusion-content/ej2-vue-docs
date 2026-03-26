<template>
  <div class="control-pane">
    <div class="control-section"  id="sankey-container">
      <EjsSankey
        width="90%"
        :height="chartHeight"
        :title="title"
        :subTitle="subTitle"
        :linkStyle="linkStyle"
        :labelSettings="labelSettings"
        :tooltip="tooltip"
        :legendSettings="legendSettings"
        :loaded="onLoaded"
      >
        <ESankeyNodesCollection>
          <ESankeyNode id="Electricity Generation" :offset="-120" />
          <ESankeyNode id="Residential" :offset="38" />
          <ESankeyNode id="Commercial" :offset="36" />
          <ESankeyNode id="Industrial" :offset="34" />
          <ESankeyNode id="Transportation" :offset="32" />
          <ESankeyNode id="Rejected Energy" :offset="-40" />
          <ESankeyNode id="Energy Services" />
          <ESankeyNode id="Solar" />
          <ESankeyNode id="Nuclear" />
          <ESankeyNode id="Wind" />
          <ESankeyNode id="Geothermal" />
          <ESankeyNode id="Natural Gas" />
          <ESankeyNode id="Coal" />
          <ESankeyNode id="Biomass" />
          <ESankeyNode id="Petroleum" :offset="-10" />
        </ESankeyNodesCollection>

        <ESankeyLinksCollection>
          <ESankeyLink sourceId="Solar" targetId="Electricity Generation" :value="454" />
          <ESankeyLink sourceId="Nuclear" targetId="Electricity Generation" :value="185" />
          <ESankeyLink sourceId="Wind" targetId="Electricity Generation" :value="47.8" />
          <ESankeyLink sourceId="Geothermal" targetId="Electricity Generation" :value="40" />
          <ESankeyLink sourceId="Natural Gas" targetId="Electricity Generation" :value="800" />
          <ESankeyLink sourceId="Coal" targetId="Electricity Generation" :value="28.7" />
          <ESankeyLink sourceId="Biomass" targetId="Electricity Generation" :value="50" />

          <ESankeyLink sourceId="Electricity Generation" targetId="Residential" :value="182" />
          <ESankeyLink sourceId="Natural Gas" targetId="Residential" :value="400" />
          <ESankeyLink sourceId="Petroleum" targetId="Residential" :value="50" />

          <ESankeyLink sourceId="Electricity Generation" targetId="Commercial" :value="351" />
          <ESankeyLink sourceId="Natural Gas" targetId="Commercial" :value="300" />

          <ESankeyLink sourceId="Electricity Generation" targetId="Industrial" :value="641" />
          <ESankeyLink sourceId="Natural Gas" targetId="Industrial" :value="786" />
          <ESankeyLink sourceId="Biomass" targetId="Industrial" :value="563" />
          <ESankeyLink sourceId="Petroleum" targetId="Industrial" :value="300" />

          <ESankeyLink sourceId="Electricity Generation" targetId="Transportation" :value="20" />
          <ESankeyLink sourceId="Natural Gas" targetId="Transportation" :value="51" />
          <ESankeyLink sourceId="Biomass" targetId="Transportation" :value="71" />
          <ESankeyLink sourceId="Petroleum" targetId="Transportation" :value="2486" />

          <ESankeyLink sourceId="Residential" targetId="Rejected Energy" :value="432" />
          <ESankeyLink sourceId="Commercial" targetId="Rejected Energy" :value="351" />
          <ESankeyLink sourceId="Industrial" targetId="Rejected Energy" :value="972" />
          <ESankeyLink sourceId="Transportation" targetId="Rejected Energy" :value="1920" />

          <ESankeyLink sourceId="Residential" targetId="Energy Services" :value="200" />
          <ESankeyLink sourceId="Commercial" targetId="Energy Services" :value="300" />
          <ESankeyLink sourceId="Industrial" targetId="Energy Services" :value="755" />
          <ESankeyLink sourceId="Transportation" targetId="Energy Services" :value="637" />
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
import { Browser } from "@syncfusion/ej2-base";

const title = ref("California Energy Consumption in 2023");
const subTitle = ref("Source: Lawrence Livermore National Laboratory");
const chartHeight = ref(Browser.isDevice ? "600px" : "450px");
const linkStyle = ref({ opacity: 0.6, curvature: 0.55, colorType: "Source" });
const labelSettings = ref({ visible: Browser.isDevice ? false : true });
const tooltip = ref({ enable: true });
const legendSettings = ref({ visible: true, position: "Bottom", itemPadding: 8 });

function onLoaded() {
  const el = document.getElementById("sankey-container");
  if (el) el.setAttribute("title", "");
}

provide("sankey", [SankeyTooltip, SankeyLegend, SankeyExport]);
</script>

<style>
#sankey-container {
  height: 450px;
}
</style>