<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :animationComplete='animationComplete'>
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

import { LinearGaugeComponent as EjsLineargauge, AxisDirective as EAxis, AxesDirective as EAxes } from "@syncfusion/ej2-vue-lineargauge";

const animationComplete = () => {
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>