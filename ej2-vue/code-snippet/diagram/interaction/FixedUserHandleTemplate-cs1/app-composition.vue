<template>
    <div id="app">
        <ejs-diagram ref="diagram" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :fixedUserHandleTemplate="fixedUserHandleTemplate"  ></ejs-diagram>
    </div>
</template>
<script setup>
import { createApp,ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
import { onMounted, ref } from "vue";
const diagram = ref(null);
const nodes = [{
    id:"node1",
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // A fixed user handle is created and stored in fixed user handle collection of Node.
     fixedUserHandles: [{ offset: { x: 0, y: 0 }, margin: { right: 20 }, width: 50, height: 20, id: 'usercon1' }]
}];

const connectors = [{
     id: "connector1",
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        },
        sourcePoint: {
            x: 400,
            y: 200
        },
        targetPoint: {
            x: 500,
            y: 300
        }, type: 'Orthogonal',
        fixedUserHandles: [{ offset: 0.5, width: 120, alignment: 'Before', height: 20, id: 'usercon2', displacement: { x: 10, y: 10 } }]
}]

const width = "100%";
const height = "350px";

const itemVue = createApp({}).component("fixedUserHandleTemplate", {
  template: ` 
    <div v-if="data.id == 'usercon1'">
        <div style="width:100%;height:100%">
            <input id="colorPicker" type="color" value="#008000"/>
        </div>
    </div>
    <div v-else-if="data.id=='usercon2'">
        <div style="width:100%;height:100%">
            <input type="button" value="FixedUserHandleTemplate" style="color:red; "/>
        </div>
    </div> `,
  data() {
    return {};
  }
})

const fixedUserHandleTemplate = function()
{
    return { template: itemVue };
}


onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    colorPicker.addEventListener('change', (event) => {
    const currentColor  = event.target.value;
    diagramInstance.nodes[0].style.fill = currentColor; 
    });

})

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
