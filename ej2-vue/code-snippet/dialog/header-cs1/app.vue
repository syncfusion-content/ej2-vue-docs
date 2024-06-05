<template>
    <div>
        <div id="target" class="control-section; position:relative" style="height:350px;">
            <!-- Render Dialog -->
            <ejs-dialog ref="headerDialog" :header='header' :target='target' :width='width' :content='content'>
            </ejs-dialog>
        </div>
    </div>
</template>
<script>

import { DialogComponent } from '@syncfusion/ej2-vue-popups';

export default {
    name: "App",
    components: {
        "ejs-dialog": DialogComponent
    },
    data: function () {
        return {
            target: "#target",
            width: '335px',
            header: 'Dialog header',
            content: 'This is a Dialog with header.'
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

.control-section {
    height: 100%;
    min-height: 200px;
}
</style>