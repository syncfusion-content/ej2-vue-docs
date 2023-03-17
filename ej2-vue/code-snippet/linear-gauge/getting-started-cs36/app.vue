

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
import Vue from 'vue';
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";

Vue.use(LinearGaugePlugin);
export default { };

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


