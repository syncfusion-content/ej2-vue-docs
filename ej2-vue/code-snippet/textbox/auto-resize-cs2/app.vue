<template>
    <div class='wrap'>
        <div class="multiline">
            <ejs-textbox id='default' :multiline="true" placeholder="Enter your address" floatLabelType="Auto"
                :input="inputHandler" maxlength="25"></ejs-textbox>
            <span id='numbercount'></span>
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
            inputHandler: (args) => {
                let word, addresscountRem, addressCount;
                word = args.value;
                addressCount = word.length;
                addresscountRem = document.getElementById('numbercount');
                addresscountRem.textContent = addressCount + "/25";
            }
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
}

#numbercount {
    margin-left: 170px;
}
</style>