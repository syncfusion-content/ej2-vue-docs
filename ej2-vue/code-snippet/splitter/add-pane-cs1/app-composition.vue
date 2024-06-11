<template>
  <div id="app" class="col-lg-12 control-section default-splitter">
    <ejs-splitter id='splitter' ref='splitterObj' width='700px' height='200px'>
      <e-panes>
        <e-pane content='Pane 1' size='300px'></e-pane>
        <e-pane content='Pane 2' size='300px'></e-pane>
      </e-panes>
    </ejs-splitter>
    <div class="addBtn">
      <button id='addButton' class="e-btn" v-on:click='addPane'>Add Pane</button>
    </div>
  </div>
</template>
<script setup>

import { SplitterComponent as EjsSplitter, PanesDirective as EPanes, PaneDirective as EPane } from '@syncfusion/ej2-vue-layouts';
import { ref } from 'vue';


const splitterObj = ref(null);

const addPane = () => {
  splitterObj.value.$el.ej2_instances[0].addPane({
    size: '200px',
    content: 'New Pane',
    min: '30px',
    max: '250px',
  }, 1);
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";

#app {
  margin: 65px auto;
}

#splitter1 div.e-pane-horizontal {
  padding: 5px;
}

.addBtn {
  margin-top: 20px;
  text-align: initial;
}
</style>