<template>
<div id="app" style="width: 100%; display: flex">
    <ejs-diagram id="diagram" :width='width' :height='height'  :nodes='nodes'  style="flex: 7;" :snapSettings='snapSettings' :scrollSettings='scrollSettings'></ejs-diagram>
    <div style="flex: 3;height: 250px;padding: 0px;right: 30px;bottom: 20px;border: #eeeeee;border-style: solid;box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);background: #f7f7f7;">
        <ejs-overview id="overview"  :sourceID='overviewsourceID' :width='overviewwidth' :height='overviewheight'></ejs-overview>
    </div>
</div>
</template>
<script>
import { DiagramComponent, OverviewComponent,SnapConstraints } from '@syncfusion/ej2-vue-diagrams';
let nodes = [{ id: 'node1', offsetX: 400, offsetY: 400, height: 100, width: 200 }];
export default {
name: "App",
components: {
    "ejs-diagram": DiagramComponent,
    "ejs-overview": OverviewComponent
},
data() {
    return {
        width: "100%",
        height: "590px",
        nodes: nodes,
        snapSettings: {
          constraints: SnapConstraints.None 
        },
        scrollSettings: { scrollLimit: 'Diagram' },
        overviewsourceID: "diagram",
        overviewwidth: "300px",
        overviewheight: "150ppx",
      }
        
},

}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
