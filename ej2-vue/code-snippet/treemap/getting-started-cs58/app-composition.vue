<template>
    <div class="control_wrapper">
        <ejs-treemap id="treemap" :dataSource='dataSource' :tooltipSettings='tooltipSettings' :weightValuePath='weightValuePath' :leafItemSettings='leafItemSettings'></ejs-treemap>
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

const tooltipSettings = {
    visible: true,
    format:'Name:${fruit} - TotalCount:${count}'
};

const leafItemSettings = {
    labelPath: 'fruit'
};

provide('treemap', [TreeMapTooltip]);

</script>