

<template>
    <div>
        <div class="content-wrapper">
            <ejs-lineargauge style='display:block' :title ='title' ></ejs-lineargauge>
        </div>
    </div>
</template>
<script>
import { LinearGaugeComponent } from "@syncfusion/ej2-vue-lineargauge";

export default {
    components: {
        'ejs-lineargauge': LinearGaugeComponent
    },
    data: function () {
        return {
            title: 'linear gauge',
        }
    }
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


