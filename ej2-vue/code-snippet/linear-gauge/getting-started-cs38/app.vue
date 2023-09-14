

<template>
   <div>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge>
                <e-axes>
                    <e-axis minimum=0 maximum=200>
                        <e-pointers>
                            <e-pointer value=40 color='green'></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-lineargauge>
        </div>
    </div>
  </div>
</template>
<script>
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointerDirective, PointersDirective } from "@syncfusion/ej2-vue-lineargauge";

export default {
    components: {
        'ejs-lineargauge': LinearGaugeComponent,
        'e-axes': AxesDirective,
        'e-axis': AxisDirective,
        'e-pointer': PointerDirective,
        'e-pointers': PointersDirective
    }
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


