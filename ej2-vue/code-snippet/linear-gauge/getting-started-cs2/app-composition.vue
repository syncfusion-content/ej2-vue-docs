<template>
  <div class="control-section">
    <div align='center'>
      <ejs-lineargauge style='display:block' align='center'>
        <e-annotations>
          <e-annotation :content='contentTemplate' :zIndex='zindex' x=100 y=100>
          </e-annotation>
        </e-annotations>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { LinearGaugeComponent as EjsLineargauge, Annotations, AnnotationsDirective as EAnnotations, AnnotationDirective as EAnnotation } from "@syncfusion/ej2-vue-lineargauge";

const contentTemplate = '<div id="first"><h1>Gauge</h1></div>';
const zindex = 1;

provide('lineargauge',  [Annotations]);

</script>