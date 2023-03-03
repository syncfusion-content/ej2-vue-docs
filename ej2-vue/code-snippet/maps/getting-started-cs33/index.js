
import Vue from 'vue';
import { MapsPlugin, DataLabel } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';

Vue.use(MapsPlugin);
let contentVue = Vue.component("contentTemplate", {
    template: '<div><div><img src="https://ej2.syncfusion.com/demos/src/maps/images/weather-clear.png" style="width:22px;height:22px"> </div> {{data.Name}} </img></div>',
        data() {
            return {
                data: {}
            };
        }
});
let contentTemplate = function() {
    return { template: contentVue };
};

new Vue({
	el: '#app',
	template: `
    <div id="template">
        <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource'
                    :dataLabelSettings='dataLabelSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return {
        shapeData: usMap,
        shapeSettings: {
           autofill:true
        },
        shapePropertyPath: 'name',
        shapeDataPath: 'Name',
        dataSource: [
            { "Name": "Iowa", "Population": "29863010" },
            { "Name": "Utah", "Population": "1263010" },
            { "Name": "Texas"," Population": "963010" }
        ],
        dataLabelSettings: {
            visible: true,
            labelPath: 'Name',
            template: contentTemplate
        }
    }
},
provide: {
    maps: [DataLabel]
},

});