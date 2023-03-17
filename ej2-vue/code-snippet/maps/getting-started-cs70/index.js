
import Vue from 'vue';
import { MapsPlugin, Marker, Zoom, MapsTooltip, Point } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
import { cluster } from './marker-cluster.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <div class='wrapper'>
            <ejs-maps  :titleSettings='titleSettings' :zoomSettings='zoomSettings'  :useGroupingSeparator='useGroupingSeparator' format='n'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :markerClusterSettings='markerClusterSettings' :markerSettings='markerSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return{
        useGroupingSeparator: true,
        zoomSettings: {
            enable: true,
        },
        shapeData: world_map,
        shapeSettings: {
            fill: '#C1DFF5'
        },
        titleSettings: {
            text: 'Top 13 largest cities in the World',
            textStyle: {
                size: '16px'
            }
        },
        markerClusterSettings: {
            allowClustering: true,
            allowClusterExpand: true,
            shape: 'Circle',
            height: 40,
            width: 40,
            labelStyle : { color: 'white'},
            offset: new Point(10, 20),
            opacity: 0.9,
            fill: 'green',
            connectorLineSettings: {
                color: 'orange',
                opacity: 0.8,
                width: 2
            }
        },
        markerSettings: [
            {
                dataSource: cluster,
                visible: true,
                shape: 'Balloon',
                height:20,
                width:20,
                animationDuration:0,
                tooltipSettings: {
                    visible: true,
                    valuePath: 'area',
                }
            },
        ]
    }
},
provide: {
    maps: [Marker, Zoom, MapsTooltip]
}

});