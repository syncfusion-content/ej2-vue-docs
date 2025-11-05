<template>
<div>
  <div id="target" class="control-section">
    <ejs-dialog :target="target" :width="width" :content="content">
    </ejs-dialog>
  </div>
</div>
</template>
<script>
import { DialogComponent } from "@syncfusion/ej2-vue-popups";
export default {
name: "App",
components: {
"ejs-dialog":DialogComponent
},
data: function () {
  return {
    target: "#target",
    width: "335px",
    content: "This is a Dialog with content.",
  };
},
methods: {},
}
</script>
<style>

.control-section {
  height: 100%;
  min-height: 200px;
}
</style>