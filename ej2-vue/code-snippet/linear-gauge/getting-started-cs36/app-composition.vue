<template>
   <div>
    <div class="content-wrapper">
        <ejs-lineargauge >
            <e-axes>
                <e-axis minimum = 0 maximum = 200 ></e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>
import { LinearGaugeComponent as EjsLineargauge, AxesDirective as EAxes, AxisDirective as EAxis } from "@syncfusion/ej2-vue-lineargauge";

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>