<template>
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
</template>

<script>

import { MapsComponent, DataLabel, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';
import { createApp } from 'vue';

const app = createApp({});


let contentVue = app.component("contentTemplate", {
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
export default {
name: "App",
components: {
"ejs-maps":MapsComponent,
"e-layers":LayersDirective,
"e-layer":LayerDirective
},
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
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>