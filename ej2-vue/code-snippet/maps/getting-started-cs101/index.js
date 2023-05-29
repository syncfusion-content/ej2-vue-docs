
import Vue from 'vue';
import { MapsPlugin, Marker, Legend, MapsTooltip } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <div class='wrapper'>
            <ejs-maps ref="maps" :legendSettings='legendSettings' :markerDragStart='markerDragStart' :markerDragEnd='markerDragEnd'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :markerSettings='markerSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return{
        shapeData: world_map,
        legendSettings:{
            visible:true,
            type:'Markers',
            shape:'Circle',
            shapeWidth:10,
            shapeHeight:10,
            fill:'#FF471A',
            shapeBorder: { width: 2, color: '#285255' },
        },
        shapeSettings:{
          fill:'#C3E6ED'
        },
        markerSettings: [{
            visible: true,
            legendText:'name',
            enableDrag:true,
            animationDuration: 0,
            shape: 'Balloon',
            width: 20,
            height: 20,
            border: { width: 2, color: '#285255' },
            tooltipSettings: {
                visible: true,
                valuePath: 'name',
            },
            dataSource: [
                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'MarkerOne' },
                { latitude: 59.88893689676585, longitude: -109.3359375, name:'MarkerTwo'},
                { latitude: -6.64607562172573, longitude: -55.54687499999999 , name:'MarkerThree'},
                { latitude: 23.644385824912135, longitude: 77.83189239539234  , name:'MarkerFour'},
                { latitude: 63.66569332894224, longitude: 98.2225173953924 , name:'MarkerFive'}
            ]
        }]
    }
},
provide: {
    maps: [Marker, Legend, MapsTooltip]
},
methods:{
    markerDragStart: function(args) {
       // When the marker begins to move on the map, the event is triggered.
    },
    markerDragEnd: function(args) {
        // When the marker on the map stops dragging, the event is triggered.
        let mapsInstance = this.$refs.maps.ej2Instances;
        mapsInstance.layers[args.layerIndex].markerSettings[args.markerIndex].dataSource[args.dataIndex].name = 'Dragged Marker ' + (args.dataIndex + 1);
        mapsInstance.refresh();
    }  
}
});