<template>
    <div class="control_wrapper">
        <ejs-treemap id="treemap" :dataSource='dataSource' :palette='palette' :tooltipSettings='tooltipSettings' :weightValuePath='weightValuePath'  :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
</template>
<script setup>

import { TreeMapComponent as EjsTreemap, TreeMapTooltip } from "@syncfusion/ej2-vue-treemap";

const dataSource = [
    { fruit:'Apple', count:5000 },
    { fruit:'Mango', count:3000 },
    { fruit:'Orange', count:2300 },
    { fruit:'Banana', count:500 },
    { fruit:'Grape', count:4300 },
    { fruit:'Papaya', count:1200 },
    { fruit:'Melon', count:4500 }
];

const weightValuePath = 'count';
const leafItemSettings = {
    labelPath: 'fruit'
};
const palette = ['#71B081','#5A9A77', '#498770', '#39776C', '#266665','#124F5E'];
const tooltipSettings = {
    visible: true,
    format:'${count} : ${fruit}'
};

provide('treemap', [TreeMapTooltip])

</script>