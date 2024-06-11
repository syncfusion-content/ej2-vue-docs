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
<script setup>
import { provide, ref } from "vue";

import { LinearGaugeComponent as EjsLineargauge, Annotations, AxesDirective as EAxes, AxisDirective as EAxis, AnnotationDirective as EAnnotation,
  AnnotationsDirective as EAnnotations, PointerDirective as EPointer, PointersDirective as EPointers } from "@syncfusion/ej2-vue-lineargauge";

const gauge = ref(null);
const zindex = 1;
const contentTemplate = '10';
const axisValue = 0;

const clicked = () => {
  gauge.value.ej2Instances.setAnnotationValue(0, '50', 50);
};

provide('lineargauge',  [Annotations]);

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>