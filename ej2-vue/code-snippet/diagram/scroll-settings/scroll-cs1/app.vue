<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "500px",
            scrollSettings: {
              //To scroll the diagram infinitely
              scrollLimit: 'Infinity',
            },
            rulerSettings: {
              showRulers: true
            }
        }
    },
    mounted: function () {
      const diagramInstance = this.$refs.diagram.ej2Instances;
      diagramInstance.scrollSettings.horizontalOffset = 100;
      diagramInstance.scrollSettings.verticalOffset = 100;
      diagramInstance.dataBind();
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
