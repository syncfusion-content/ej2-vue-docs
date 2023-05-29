

<template>
    <div class="control_wrapper">
        <ejs-treemap id="treemap"  :dataSource='dataSource' :tooltipSettings='tooltipSettings' :weightValuePath='weightValuePath' :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
</template>
<script>
import Vue from 'vue';
import Template1 from "./LabelTemplate.vue";
import { TreeMapPlugin, TreeMapTooltip } from "@syncfusion/ej2-vue-treemap";
Vue.use(TreeMapPlugin);

let contentVue = Vue.component("contentTemplate", {
  template: '<div><p>Name : {{data.fruit}}</p><p>TotalCount : {{data.count}}</p></div>',
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
     tooltipSettings: {
            visible: true,
            template:contentTemplate
    },
    leafItemSettings: {
        labelPath: 'fruit'
     }
    }
  },
  provide:{
    treemap:[TreeMapTooltip]
},
}
</script>


