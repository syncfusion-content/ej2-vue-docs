<template>
    <div class="control_wrapper">
        <ejs-treemap id="treemap" :dataSource='dataSource' :colorValuePath='colorValuePath' :palette='palette' :weightValuePath='weightValuePath' :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
</template>
<script>

import { TreeMapComponent } from "@syncfusion/ej2-vue-treemap";

export default {
name: "App",
components: {
"ejs-treemap":TreeMapComponent
},
  data: function() {
    return {
     dataSource: [
                       { fruit:'Apple', count:5000, color: 'red'},
                       { fruit:'Mango', count:3000, color:'blue'},
                       { fruit:'Orange', count:2300, color:'green' },
                       { fruit:'Banana', count:500, color:'yellow' },
                       { fruit:'Grape', count:4300, color:'orange' },
                       { fruit:'Papaya', count:1200, color:'pink' },
                       { fruit:'Melon', count:4500, color:'violet' }
    ],
    weightValuePath: 'count',
    colorValuePath:'color',
    palette:[],
    leafItemSettings: {
        labelPath: 'fruit',
     }
    }
  }
}
</script>