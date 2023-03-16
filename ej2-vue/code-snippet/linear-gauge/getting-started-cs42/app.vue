

<template>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge :container='container'>
                <e-axes>
                    <e-axis >
                        <e-pointers>
                            <e-pointer value= 50 width= 15 type= 'Bar'></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-lineargauge>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
export default {
    data: function () {
        return {
            container: {
               width: 30
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


