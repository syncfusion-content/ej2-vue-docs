<template>
    <div id="app">
        <ejs-button ref="updateScrollSettings" id="updateScrollSettings" >Update Scroll Settings</ejs-button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent,
        'ejs-button': ButtonComponent,
    },
        data() {
        return {
            width: "100%",
            height: "500px",
            rulerSettings: { showRulers: true },
            scrollSettings: { scrollLimit: 'Infinity' },
        }
    },
        mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
        const updateScrollSettings = this.$refs.updateScrollSettings.ej2Instances;
        //Updates scroll settings
        updateScrollSettings.element.onclick = () => {
          diagramInstance.scrollSettings.horizontalOffset = 200;
          diagramInstance.scrollSettings.verticalOffset = 200
          diagramInstance.dataBind();
        }
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
