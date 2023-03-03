

<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :layers='layers'>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Highlight, Bubble } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return {
        layers: [{
            shapeData: world_map,
            shapeDataPath: 'name',
            shapePropertyPath: 'name',
            bubbleSettings: [{
                visible: true,
                dataSource: [
                    { name: 'India', population: '38332521' },
                    { name: 'South Africa', population: '19651127' },
                    { name: 'Pakistan', population: '3090416' }
                ],
            highlightSettings: {
                enable: true,
                fill: 'green',
                border: { color: 'white', width: 2}
            },
            valuePath: 'population'
        }]
    }]
    }
},
provide: {
    maps: [Highlight, Bubble]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>


