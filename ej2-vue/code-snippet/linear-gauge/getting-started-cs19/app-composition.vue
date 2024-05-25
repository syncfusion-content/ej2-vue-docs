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
<script setup>
import { provide } from "vue";

import { LinearGaugeComponent as EjsLineargauge, Annotations, AxisDirective as EAxis, AxesDirective as EAxes,
  PointersDirective as EPointers, PointerDirective as EPointer, AnnotationDirective as EAnnotation, AnnotationsDirective as EAnnotations } from "@syncfusion/ej2-vue-lineargauge";

const zindex = 1;
const contentTemplate = '10';
const axisValue = 0;

const annotationRender = () => {
};

provide('lineargauge',  [Annotations]);

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>