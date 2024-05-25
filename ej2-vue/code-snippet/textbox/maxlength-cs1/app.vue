<template>
    <div class='wrap'>
        <div class="multiline">
            <label class="label">Add maxlength attribute through inline</label>
            <ejs-textbox id='default' :multiline="true" placeholder="Enter your address" floatLabelType="Auto"
                maxlength="15"></ejs-textbox>
            <label class="label">Add maxlength attribute through addAttributes method</label>
            <ejs-textbox id='default' :multiline="true" placeholder="Enter your address" floatLabelType="Auto"
                ref="textareaObj"></ejs-textbox>
            <ejs-button id='modalbtn' v-on:click="modalBtnClick">Add max length</ejs-button>
        </div>
    </div>
</template>
<script>

import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    name: "App",
    components: {
        "ejs-textbox": TextBoxComponent,
        "ejs-button": ButtonComponent
    },
    methods: {
        modalBtnClick: function () {
            this.$refs.textareaObj.addAttributes({ maxlength: 15 });
        }
    }

}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";

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
}
</style>