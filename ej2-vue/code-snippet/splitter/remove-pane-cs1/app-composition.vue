<template>
    <div id="app" class="col-lg-12 control-section default-splitter">
        <ejs-splitter id='splitter' ref='splitterObj' width='700px' height='200px'>
            <e-panes>
                <e-pane content='Pane 1' size='300px'></e-pane>
                <e-pane content='Pane 2' size='300px'></e-pane>
                <e-pane content='Pane 3' size='300px'></e-pane>
            </e-panes>
        </ejs-splitter>
        <div class="removeBtn">
            <button id='removeButton' class="e-btn" v-on:click='removePane'>Remove Pane</button>
        </div>
    </div>
</template>

<script setup>

import { SplitterComponent as EjsSplitter, PanesDirective as EPanes, PaneDirective as EPane } from '@syncfusion/ej2-vue-layouts';
import { ref } from 'vue';

const splitterObj = ref(null);
const removePane = () => {
    splitterObj.value.removePane(1);
}


</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";

#app {
    text-align: center;
    margin: 65px auto;
}

.content {
    justify-content: center;
    text-align: center;
    align-items: center;
}

.removeBtn {
    margin-top: 20px;
    text-align: initial;
}
</style>