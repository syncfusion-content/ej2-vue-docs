<template>
    <div id="app" class="col-lg-12 control-section default-splitter">
        <ejs-splitter id='splitter' ref='splitterObj' width='600px' height='200px'>
            <e-panes>
                <e-pane content='#left-pane-content' min='60px' size='200px'></e-pane>
                <e-pane content='#middle-pane-content' min='60px' size='200px'></e-pane>
                <e-pane content='#last-pane-content' min='60px' size='200px'></e-pane>
            </e-panes>
        </ejs-splitter>

        <!-- pane contents -->
        <div id="left-pane-content" style="display: none;">
            <div>Left pane<div id='panetext'>size: 25%</div>
                <div id='panetext'>min: 60px</div>
            </div>
        </div>

        <div id="middle-pane-content" style="display: none;">
            <span>Middle pane<div id="panetext">size: 50%</div>
                <div id="panetext">min: 60px</div>
            </span>
        </div>

        <div id="last-pane-content" style="display: none;">
            <span>Right pane<div id="panetext">size: 25%</div>
                <div id="panetext">min: 60px</div>
            </span>
        </div>
    </div>
</template>
<script setup>

import { SplitterComponent as EjsSplitter, PanesDirective as EPanes, PaneDirective as EPane } from '@syncfusion/ej2-vue-layouts';

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";

#app {
    text-align: center;
    margin: 65px auto;
}

.content {
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 9px;
}

.e-splitter {
    margin: 0 auto;
}

.e-pane {
    text-align: center;
    align-items: center;
    display: grid;
}
</style>