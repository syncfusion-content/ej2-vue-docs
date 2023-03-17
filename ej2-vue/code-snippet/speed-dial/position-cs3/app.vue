

<template>
    <div>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;">
        <ejs-button id="refresh" class="e-primary" v-on:click.native="refresh"> Refresh </ejs-button></div>
        <ejs-speeddial ref="speeddial" id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' target='#targetElement' position='MiddleRight' :items='items'></ejs-speeddial>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { SpeedDialPlugin, ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
    import { enableRipple } from '@syncfusion/ej2-base';

    enableRipple(true);
    Vue.use(SpeedDialPlugin);
    Vue.use(ButtonPlugin);

    export default {
        data() {
            return {
                items: [
                    { iconCss: 'e-icons e-cut' },
                    { iconCss: 'e-icons e-copy' },
                    { iconCss: 'e-icons e-paste' }
                ]
            };
        },
        methods: {
            refresh: function () {
                document.getElementById("targetElement").style.minHeight = "300px";
                this.$refs.speeddial.refreshPosition();
            }
        }
    }
</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

    #hide {
        float: right;
    }
</style>


