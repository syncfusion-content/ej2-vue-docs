
import Vue from 'vue';
import { MapsPlugin, Marker, Zoom } from '@syncfusion/ej2-vue-maps';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
Vue.use(ButtonPlugin);


new Vue({
    el: '#app',
    template: `
    <div id="app">
        <div class='wrapper'>
        <ejs-button id='button' isToggle="true" v-on:click.native='getMinMaxValues'> GetMinMaxLatitudeLongitude
        </ejs-button>
        <p id="coordinatesDisplay"></p>
       <ejs-maps id="maps" ref="maps" :zoomSettings='zoomSettings' :centerPosition='centerPosition'>
           <e-layers>
               <e-layer :shapeData='shapeData'  :markerSettings='markerSettings'></e-layer>
           </e-layers>
       </ejs-maps>
        </div>
    </div>
`,

    data() {
        return {
            shapeData: world_map,
            zoomSettings: {
                enable: true,
                zoomFactor: 7
            },
            centerPosition: {
                latitude: 21.815447,
                longitude: 80.1932,
            },
            markerSettings: [
                {
                    visible: true,
                    height: 25,
                    width: 25,
                    shape: "Circle",
                    animationDuration: 1500,
                    dataSource: [
                        {
                            latitude: 22.572646,
                            longitude: 88.363895,
                        },
                        {
                            latitude: 25.0700428,
                            longitude: 67.2847875,
                        }
                    ]
                }
            ]
        }
    },
    provide: {
        maps: [Marker, Zoom]
    },
    methods: {
        formatKey: function (key) {
            if (key === 'minLatitude') {
                return 'Minimum Latitude';
            } else if (key === 'maxLatitude') {
                return 'Maximum Latitude';
            } else if (key === 'minLongitude') {
                return 'Minimum Longitude';
            } else if (key === 'maxLongitude') {
                return 'Maximum Longitude';
            }
        },

        getMinMaxValues: function () {
            var mapBoundCoordinates;
            mapBoundCoordinates = this.$refs.maps.ej2Instances.getMinMaxLatitudeLongitude();
            const displayDiv = document.getElementById('coordinatesDisplay');
            displayDiv.innerHTML = '';
            if (mapBoundCoordinates) {
                for (const key in mapBoundCoordinates) {
                    if (Object.hasOwnProperty.call(mapBoundCoordinates, key)) {
                        const p = document.createElement('p');
                        const formattedKey = this.formatKey(key);
                        p.textContent = `${formattedKey}: ${mapBoundCoordinates[key]}`;
                        displayDiv.appendChild(p);
                    }
                }
            } else {
                displayDiv.textContent = 'No coordinates available';
            }
        }
    }
});