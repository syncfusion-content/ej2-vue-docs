<template>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge :title ='title' :titleStyle ='titleStyle'>
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
            title: 'linear gauge',
            titleStyle: {
                fontFamily: "Arial",
                fontStyle: 'italic',
                fontWeight: 'regular',
                color: "#E27F2D",
                size: '23px'
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