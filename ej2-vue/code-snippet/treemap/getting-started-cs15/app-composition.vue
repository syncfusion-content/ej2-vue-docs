<template>
    <div class="control_wrapper">
        <ejs-treemap id="treemap" :height='height' :dataSource='dataSource' :weightValuePath='weightValuePath' :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
</template>
<script setup>
import { TreeMapComponent as EjsTreemap } from "@syncfusion/ej2-vue-treemap";

const height = '350px';
const dataSource = [
    { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
    { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
    { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
    { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
    { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
    { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
    { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
    { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
    { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
    { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
    { Title: 'State wise International Airport count in South America', State: "Falkland Islands",Count: 1 },
    { Title: 'State wise International Airport count in South America', State: "French Guiana", Count:1 },
    { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
    { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
];
const weightValuePath = 'Count';
const leafItemSettings = {
    labelPath: 'State'
};

</script>