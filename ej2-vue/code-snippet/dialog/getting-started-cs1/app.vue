

<template>
  <div>
    <div id="target"  class="control-section">
        <ejs-dialog :target='target' :width='width' :content='content'>
        </ejs-dialog>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(DialogPlugin);

export default {
    data: function() {
        return {
            target: "#target",
            width: '335px',
            content: 'This is a Dialog with content.'
        }
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
    .control-section {
        height: 100%;
        min-height: 200px;
    }
</style>


