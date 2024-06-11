<template>
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="clicked">Click</button>
      <ejs-lineargauge ref='gauge'>
        <e-annotations>
            <e-annotation :content='contentTemplate' :zIndex='zindex' :axisValue='axisValue'>
            </e-annotation>
        </e-annotations>
        <e-axes>
          <e-axis>
            <e-pointers>
              <e-pointer value=10></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script>

import { LinearGaugeComponent, Annotations, AnnotationDirective, AnnotationsDirective, AxesDirective, AxisDirective, PointerDirective, PointersDirective } from "@syncfusion/ej2-vue-lineargauge";

export default {
name: "App",
components: {
"ejs-lineargauge":LinearGaugeComponent,
"e-annotations":AnnotationsDirective,
"e-annotation":AnnotationDirective,
"e-axes":AxesDirective,
"e-axis":AxisDirective,
"e-pointers":PointersDirective,
"e-pointer":PointerDirective
},
  data:function(){
    return{
        zindex: 1,
        contentTemplate : '10',
        axisValue: 0
    }
  },
  methods: {
    clicked: function () {
      this.$refs.gauge.ej2Instances.setAnnotationValue(0, '50', 50);
    }
  },
  provide: {
    lineargauge: [Annotations]
  }
 };
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>