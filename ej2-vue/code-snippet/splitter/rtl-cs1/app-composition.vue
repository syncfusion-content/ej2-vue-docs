html
<template>
  <div id="app" class="col-lg-12 control-section default-splitter">
    <ejs-splitter id='splitter' height='200px' enableRtl='true'>
      <e-panes>
        <e-pane content='Left Pane' size='200px'></e-pane>
        <e-pane content='Middle Pane' size='200px'></e-pane>
        <e-pane content='Right Pane' size='200px'></e-pane>
      </e-panes>
    </ejs-splitter>
  </div>
</template>
<script setup>

import { SplitterComponent as EjsSplitter, PanesDirective as EPanes, PaneDirective as EPane } from '@syncfusion/ej2-vue-layouts';

</script>

<style>
.e-pane {
  align-items: center;
  padding: 9px;
  display: flex;
}

@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";
</style>