<template>
    <div>
        <div class="content-wrapper">
            <div align='center'>
                <ejs-lineargauge ></ejs-lineargauge>
            </div>
        </div>
  </div>
</template>
<script>
import { LinearGaugeComponent } from '@syncfusion/ej2-vue-lineargauge';

export default {
name: "App",
    components: {
        'ejs-lineargauge': LinearGaugeComponent
    }
}
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>