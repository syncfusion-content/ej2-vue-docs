<template>
    <div class="control_wrapper">
        <ejs-treemap id="treemap" :dataSource='dataSource' :colorValuePath='colorValuePath' :legendSettings='legendSettings' :weightValuePath='weightValuePath' :palette='palette' :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
</template>
<script setup>

import { TreeMapComponent as EjsTreemap, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
import { provide } from 'vue';

const dataSource = [
    { fruit:'Apple', count:5000, visibility: true , color: 'red'},
    { fruit:'Mango', count:3000, visibility: false, color:'blue'},
    { fruit:'Orange', count:2300, visibility: true, color:'green' },
    { fruit:'Banana', count:500, visibility: false, color:'yellow' },
    { fruit:'Grape', count:4300, visibility: true, color:'orange' },
    { fruit:'Mango', count:1200, visibility: false, color:'pink' },
    { fruit:'Banana', count:4500, visibility: true , color:'violet'}
];

const weightValuePath = 'count';

const colorValuePath='color';

const palette=[];

const legendSettings = {
    visible: true,
    valuePath:'fruit',
    removeDuplicateLegend: true
};

const leafItemSettings = {
    labelPath: 'fruit'
 }

provide('treemap', [TreeMapLegend]);

</script>