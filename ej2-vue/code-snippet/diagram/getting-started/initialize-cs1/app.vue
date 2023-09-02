

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' ></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
export default {
    components: {
        'ejs-diagram': DiagramComponent
    },
    name: 'app'
    data () {
        return {
            width: "100%",
            height: "350px"
        }
    }
}
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


