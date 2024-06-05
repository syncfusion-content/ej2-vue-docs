<template>
  <div id="app" class="col-lg-12 control-section default-splitter">
    <ejs-splitter id='default-splitter' height='250px'>
      <e-panes>
        <e-pane content='Left Pane'></e-pane>
        <e-pane content='Middle Pane'></e-pane>
        <e-pane content='Right Pane'></e-pane>
      </e-panes>
    </ejs-splitter>
  </div>
</template>
<script setup>
import { SplitterComponent as EjsSplitter, PanesDirective as EPanes, PaneDirective as EPane } from '@syncfusion/ej2-vue-layouts';

</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css';

#app {
  margin: 60px auto;
  max-width: 700px;
}

.e-splitter {
  margin: 0 auto;
}

.e-pane {
  text-align: center;
  align-items: center;
  display: grid;
}
</style>