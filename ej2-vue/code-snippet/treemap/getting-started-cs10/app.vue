<template>
    <div class="control_wrapper">
        <ejs-treemap id="treemap" :dataSource='dataSource' :weightValuePath='weightValuePath' :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
</template>
<script>


import { TreeMapComponent } from "@syncfusion/ej2-vue-treemap";
import { createApp } from 'vue';

const app = createApp({});

let contentVue =app.component("contentTemplate", {
  template: '<div>{{data.Car}}-{{data.Brand}}</div>',
  data() {
    return {
      data: {}
    };
  }
});

let contentTemplate = function() {
  return { template: contentVue };
};
export default {
name: "App",
components: {
"ejs-treemap":TreeMapComponent
},
  data: function() {
    return {
     dataSource: [
         { Car:'Mustang', Brand:'Ford', count:232 },
                       { Car:'EcoSport', Brand:'Ford', count:121 },
                       { Car:'Swift', Brand:'Maruti', count:143 },
                       { Car:'Baleno', Brand:'Maruti', count:454 },
                       { Car:'Vitara Brezza', Brand:'Maruti', count:545 },
                       { Car:'A3 Cabriolet', Brand:'Audi',count:123 },
                       { Car:'RS7 Sportback', Brand:'Audi', count:523 }
    ],
    weightValuePath: 'count',
    leafItemSettings: {
       labelPath: 'Car',
       labelTemplate:contentTemplate
     }
    }
  }
}
</script>