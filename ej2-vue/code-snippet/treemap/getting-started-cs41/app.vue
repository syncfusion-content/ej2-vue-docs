<template>
    <div class="control_wrapper">
        <ejs-treemap id="treemap" :dataSource='dataSource' :rangeColorValuePath='rangeColorValuePath' :legendSettings='legendSettings' :weightValuePath='weightValuePath' :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
</template>
<script>

import { TreeMapComponent, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";

export default {
name: "App",
components: {
"ejs-treemap":TreeMapComponent
},
  data: function() {
    return {
     dataSource: [{ fruit:'Apple', count:5000 },
                       { fruit:'Mango', count:3000 },
                       { fruit:'Orange', count:2300 },
                       { fruit:'Banana', count:500 },
                       { fruit:'Grape', count:4300 },
                       { fruit:'Papaya', count:1200 },
                       { fruit:'Melon', count:4500 }
    ],
   weightValuePath: 'count',
    rangeColorValuePath:'count',
    legendSettings: {
        visible: true
    },
    leafItemSettings: {
        labelPath: 'fruit',
        colorMapping:[
            {
               from: 500,
               to: 2500,
               color:'green',
               showLegend: false,
           },
           {
               from: 3000,
               to: 4000,
               color:'red',
               showLegend: true,
           },
           {
               color:'orange',
               showLegend: true,
           }
        ]
     }
    }
  },
   provide:{
    treemap:[TreeMapLegend]
    },
}
</script>