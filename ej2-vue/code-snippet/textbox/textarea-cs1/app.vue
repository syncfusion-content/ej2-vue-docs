<template>
    <div class='wrap'>
        <div class="multiline">
            <ejs-textbox name='default' :multiline="true" placeholder="Enter your address"
                value='Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center'></ejs-textbox>
        </div>
    </div>
</template>
<script>

import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';

export default {
    name: "App",
    components: {
        "ejs-textbox": TextBoxComponent
    },
    data: function () {
        return {
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

#container {
    visibility: hidden;
    padding-left: 5%;
    width: 100%;
}

#loader {
    color: #008cff;
    font-family: 'Helvetica Neue', 'calibiri';
    font-size: 14px;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

.multiline {
    margin: 10px auto;
    width: 30%;
}</style>