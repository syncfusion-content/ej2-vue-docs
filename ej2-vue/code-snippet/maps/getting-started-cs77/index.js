
import Vue from 'vue';
import { MapsPlugin, MapsTooltip, DataLabel, Print } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(MapsPlugin,ButtonPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <button id="print" @click="clickPrint">Print</button>
        <ejs-maps id='container' :allowPrint='allowPrint' ref="maps" height='450px' width='500px'>
            <e-layers>
                <e-layer :shapeData='shapeData' :dataLabelSettings='dataLabelSettings' :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings' ></e-layer>
            </e-layers>
        </ejs-maps>
    </div>
`,

data () {
    return {
        dataLabelSettings: {
            visible: true,
            labelPath: 'name',
            smartLabelMode: 'Trim'
        },
        shapeData: usMap,
        shapeSettings: {
            autofill: true
        },
        tooltipSettings: {
            visible: true,
            valuePath: 'name'
        },
        allowPrint: true
    }
},
provide: {
    maps: [MapsTooltip, DataLabel, Print]
},
methods: {
    clickPrint: function(args) {
        let map=document.getElementById('container');
        map.ej2_instances[0].print();
    }
}

});