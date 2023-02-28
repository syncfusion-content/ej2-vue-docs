

<template>
    <div class="control_wrapper">
        <ejs-treemap id="treemap"  :dataSource='dataSource' :legendSettings='legendSettings' :weightValuePath='weightValuePath' :rangeColorValuePath= 'rangeColorValuePath' :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
</template>
<script>
import Vue from 'vue';
import { TreeMapPlugin, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
Vue.use(TreeMapPlugin);

export default {
  data: function() {
    return {
     dataSource: [
                       { fruit:'Apple', count:5000 },
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
        visible: true,
        position: 'Top'
    },
    leafItemSettings: {
        labelPath: 'fruit',
        colorMapping:[
            {
               from:500,
               to:3000,
               color:'orange'
           },
           {
               from:3000,
               to:5000,
               color:'green'
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


