<template>
<div>
    <div id="header" style="background-color: #179bd7"></div>
      <div class='control_wrapper'>
         <ejs-treemap id='container' :dataSource="dataSource" weightValuePath="Population" format="n"
                     useGroupingSeparator="true" enableDrillDown="true" :palette="palette"
         :leafItemSettings='leafItemSettings' :levels='levels' :drillEnd='drillEnd' :loaded="loaded">
         </ejs-treemap>
      </div>
  </div>
</template>

<script setup>

import { TreeMapComponent as EjsTreemap} from '@syncfusion/ej2-vue-treemap';
import { data } from './datasource.js';

const dataSource = data;
const palette = ["#9999ff", "#CCFF99", "#FFFF99", "#FF9999", "#FF99FF", "#FFCC66"];
const levels = [
    {
        groupPath: 'Continent', border: { color: 'black', width: 0.5 },
    },
    {
      groupPath: 'States', border: { color: 'black', width: 0.5 },
    },
    {
      groupPath: 'Region', border: { color: 'black', width: 0.5 },
    }
];
const leafItemSettings = {
  labelPath:'Name',
  showLabels: false
};

const drillEnd = function(args){
    let header = document.getElementById('header');
    let layout = document.getElementById("container_TreeMap_Squarified_Layout");
    let population = 0;
    if (args.treemap.layout.renderItems[0]['isDrilled']) {
        for (let i = 0; i < args.treemap.layout.renderItems.length; i++) {
            population += +(args.treemap.layout.renderItems[i]['data'].Population);
        }
        header.innerHTML = layout.children[0].children[1].innerHTML.split(']')[1] + ' - ' + population;
    }
    else if (args.treemap.layout.renderItems[0]['parent'].Continent) {
        for (let i = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
            population += +(args.treemap.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
        }
        header.innerHTML = 'Continent - Population : ' + population;
    } else {
        population = args.treemap.layout.renderItems[0]['data'].Population;
        header.innerHTML = layout.children[0].children[1].innerHTML.split(']')[1] + ' - Population : ' + population;
    }
};

const loaded = function(args) {
  let header = document.getElementById('header');
    var population = 0;
    for (let i = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
        population += +(args.treemap.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
    }
    header.innerHTML = 'Continent - Population : ' + population
};

</script>