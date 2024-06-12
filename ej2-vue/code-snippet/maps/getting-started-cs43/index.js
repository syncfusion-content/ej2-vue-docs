
import Vue from 'vue';
import { MapsPlugin, Marker } from '@syncfusion/ej2-vue-maps';
import { default_data } from './default-data.js';
import { world_map } from './world-map.js';
import { africa } from './africa.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div class='wrapper'>
            <ejs-maps  ref="maps" :layers='layers' :shapeSelected='shapeSelected'>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return {
        layers: [
        {
            shapeData: world_map,
            shapePropertyPath: 'continent',
            shapeDataPath: 'continent',
            dataSource:default_data,
            shapeSettings: {
                colorValuePath: 'drillColor'
            },
            markerSettings: [{
                visible: true,
                template: '<div id="marker3" class="markerTemplate">Africa' +
                    '</div>',
                dataSource: [
                    { latitude: 10.97274101999902, longitude: 16.390625 }
                ],
                animationDuration: 0
            }]
        },
        {
            shapeData: africa,
            shapeSettings: {
                fill: '#80306A'
            },
            highlightSettings: {
                enable: true,
                fill: '#80306A'
            }
        }]
    }
},
provide: {
    maps: [Marker]
},
methods: {
    shapeSelected: function(args){
        let shape = (args.shapeData).continent;
        if (shape === 'Africa') {
            this.$refs.maps.ej2Instances.baseLayerIndex = 1;
            this.$refs.maps.ej2Instances.refresh();
        }
    }
}

});