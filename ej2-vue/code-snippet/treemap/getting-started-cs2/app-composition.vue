<template>
    <div class="control_wrapper">
        <ejs-treemap id="treemap"  :dataSource='dataSource' :equalColorValuePath='equalColorValuePath' :weightValuePath='weightValuePath' :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
</template>
<script setup>

import { TreeMapComponent as EjsTreemap } from "@syncfusion/ej2-vue-treemap";

const dataSource = [
    { Car:'Mustang', Brand:'Ford', count:232 },
                      { Car:'EcoSport', Brand:'Ford', count:121 },
                      { Car:'Swift', Brand:'Maruti', count:143 },
                      { Car:'Baleno', Brand:'Maruti', count:454 },
                      { Car:'Vitara Brezza', Brand:'Maruti', count:545 },
                      { Car:'A3 Cabriolet', Brand:'Audi',count:123 },
                      { car:'RS7 Sportback', Brand:'Audi', count:523 }
];

const weightValuePath = 'count';
const leafItemSettings = {
    labelPath: 'Car',
    colorMapping:[
        {
           value:'Ford',
           color:'green'
       },
       {
           value:'Audi',
           color:'red'
       },
       {
           value:'Maruti',
           color:'orange'
       }
    ]
};
const equalColorValuePath = 'Brand';

</script>