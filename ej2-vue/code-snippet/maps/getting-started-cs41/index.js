
import Vue from 'vue';
import { MapsPlugin, MapsComponent, Annotations } from '@syncfusion/ej2-vue-maps';
import { africa } from './africa.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div class='wrapper'>
            <ejs-maps :annotations='annotations'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' >
                    </e-layer>
                </e-layers>
            </ejs-maps>
    <svg height="150" width="400">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#C5494B;stop-opacity:1"></stop>
                <stop offset="100%" style="stop-color:#4C134F;stop-opacity:1"></stop>
            </linearGradient>
        </defs>
    </svg>
    <div id="maps-annotation" style="display: none;">
        <div id="annotation">
            <div>
                <p style="margin-left:10px;font-size:13px;font-weight:500">Facts about Africa</p>
            </div>
            <hr style="margin-top:-3px;margin-bottom:10px;border:0.5px solid #DDDDDD">
            <div>
                <ul style="list-style-type:disc; margin-left:-20px;margin-bottom:2px; font-weight:400">
                    <li>Africa is the second largest and second most populated continent in the world.</li>
                    <li style="padding-top:5px;">Africa has 54 sovereign states and 10 non-sovereign territories.</li>
                    <li style="padding-top:5px;">Algeria is the largest country in Africa, where as Mayotte is the smallest.</li>
                </ul>
            </div>
        </div>
    </div>
        <div id="compass-maps" style="display: none;">
          <img src="templates/maps/getting-started/compass.png" height="75px" width="75px">
        </div>
    </div>
    </div>
`,

data () {
    return {
        shapeData: africa,
        shapeSettings: {
            fill: 'url(#grad1)'
        },
        annotations:[{
            content:'#maps-annotation', // To insert the text content
            x: '0%', y: '70%'
        },
        {
            content: '#compass-maps',  // To insert the image
            x: '80%', y: '5%'
        }]
    }
},
provide: {
    maps: [ Annotations ]
}

});