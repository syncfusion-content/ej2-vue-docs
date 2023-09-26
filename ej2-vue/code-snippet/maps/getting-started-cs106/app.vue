

<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :dataLabelSettings='dataLabelSettings'
                        :tooltipSettings='tooltipSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, DataLabel, MapsTooltip } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';
Vue.use(MapsPlugin);
export default {
    data() {
        return {
            shapeData: usMap,
            shapeSettings: {
                autofill: true
            },
            dataLabelSettings: {
                visible: true,
                smartLabelMode: 'Hide',
                intersectionAction: 'Trim',
                labelPath: 'name',
                animationDuration: 4000
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name'
            }
        }
    },
    provide: {
        maps: [DataLabel, MapsTooltip]
    },
}
</script>
<style>
.wrapper {
    max-width: 400px;
    margin: 0 auto;
}
</style>


