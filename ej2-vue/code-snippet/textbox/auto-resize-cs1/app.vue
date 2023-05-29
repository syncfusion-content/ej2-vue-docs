

<template>
        <div class="multiline">
            <ejs-textbox ref="textareaObj" id='default' :multiline="true" value= 'Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center' placeholder="Enter your address" floatLabelType="Auto" :input= "inputHandler" :created= "createHandler"></ejs-textbox>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextBoxPlugin);

export default {
 data: function(){
        return {
            createHandler: (args) => {
                this.$refs.textareaObj.addAttributes({rows: 1});
                this.$refs.textareaObj.$el.style.height = "auto";
                this.$refs.textareaObj.$el.style.height = (this.$refs.textareaObj.$el.scrollHeight)+"px";
            },
            inputHandler: (args) => {
                args.event.currentTarget.style.height = "auto";
                args.event.currentTarget.style.height = (args.event.currentTarget.scrollHeight)+"px";
            }
        }
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
    #container {
        visibility: hidden;
        padding-left: 5%;
        width: 100%;
    }
    #loader {
        color: #008cff;
        font-family: 'Helvetica Neue','calibiri';
        font-size: 14px;
        height: 40px;
        left: 45%;
        position: absolute;
        top: 45%;
        width: 30%;
    }
    .multiline{
        margin: 10px auto;
        width: 30%;
    }

</style>


