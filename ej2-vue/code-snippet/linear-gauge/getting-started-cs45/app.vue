<template>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge orientation='Horizontal' :allowMargin=false :margin='margin' background='skyblue':border ='border'>
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
            border: { color: "#FF0000", width: 2 },
            margin: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
             }
        }
    }
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>