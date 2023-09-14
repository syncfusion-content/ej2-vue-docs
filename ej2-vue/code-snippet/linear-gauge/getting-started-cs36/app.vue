

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
<script>
import { LinearGaugeComponent, AxesDirective, AxisDirective } from "@syncfusion/ej2-vue-lineargauge";

export default {
    components: {
        'ejs-lineargauge': LinearGaugeComponent,
        'e-axes': AxesDirective,
        'e-axis': AxisDirective
    }
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


