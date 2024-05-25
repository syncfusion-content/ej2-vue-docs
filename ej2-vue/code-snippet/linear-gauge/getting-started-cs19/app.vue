<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :annotationRender='annotationRender'>
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

import { LinearGaugeComponent, Annotations, AxesDirective, AxisDirective, AnnotationDirective, AnnotationsDirective, PointerDirective, PointersDirective } from "@syncfusion/ej2-vue-lineargauge";

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
    annotationRender: function () {
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