<template>
  <div class="control-pane" style="direction: rtl">
    <div class="control-section" id="sankey-container">
      <ejs-sankey
        width="90%"
        height="450px"
        orientation="Horizontal"
        :enableRtl="true"
        :nodes="nodes"
        :links="links"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import {
  SankeyComponent,
  SankeyTooltip,
  SankeyLegend,
  SankeyExport
} from '@syncfusion/ej2-vue-charts';

export default defineComponent({
  name: 'App',
  components: {
    'ejs-sankey': SankeyComponent
  },
  setup() {
    const nodes = [
      { id: 'Agricultural Waste' },
      { id: 'Biomass Residues' },
      { id: 'Bio-conversion' },
      { id: 'Liquid Biofuel' },
      { id: 'Electricity' },
      { id: 'Heat' }
    ];

    const links = [
      { sourceId: 'Agricultural Waste', targetId: 'Bio-conversion', value: 84.152 },
      { sourceId: 'Biomass Residues',   targetId: 'Bio-conversion', value: 24.152 },
      { sourceId: 'Bio-conversion',     targetId: 'Liquid Biofuel', value: 10.597 },
      { sourceId: 'Bio-conversion',     targetId: 'Electricity',    value: 36.862 },
      { sourceId: 'Bio-conversion',     targetId: 'Heat',           value: 60.845 }
    ];

    return { nodes, links };
  },
  provide: {
    // Equivalent of <Inject services={[SankeyTooltip, SankeyLegend, SankeyExport]} />
    sankey: [SankeyTooltip, SankeyLegend, SankeyExport]
  }
});
</script>
