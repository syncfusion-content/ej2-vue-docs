<template>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge :format='format'>
            </ejs-lineargauge>
        </div>
    </div>
</template>
<script>

import { LinearGaugeComponent } from "@syncfusion/ej2-vue-lineargauge";

export default {
name: "App",
components: {
"ejs-lineargauge":LinearGaugeComponent
},
    data: function () {
        return {
            format: 'c'
        }
    }
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>