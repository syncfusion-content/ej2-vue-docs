<template>
  <div>
    <div id="target" class="control-section">
      <ejs-dialog :target="data[0].target" :width="data[0].width" :content="data[0].content">
      </ejs-dialog>
    </div>
  </div>
</template>
<script setup>
import { DialogComponent as EjsDialog } from "@syncfusion/ej2-vue-popups";
  const data = [{ target: "#target",
                  width: "335px",
                  content: "This is a Dialog with content.",}]
</script>
<style>
  .control-section {
    height: 100%;
    min-height: 200px;
  }
</style>