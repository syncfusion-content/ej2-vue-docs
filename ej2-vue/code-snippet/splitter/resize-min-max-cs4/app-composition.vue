<template>
    <div id="app" class="col-lg-12 control-section default-splitter">
        <ejs-splitter id='splitter' ref='splitterObj' width='600px' height='200px'>
            <e-panes>
                <e-pane :content='content1'></e-pane>
                <e-pane :content='content2'></e-pane>
                <e-pane :content='content3'></e-pane>
            </e-panes>
        </ejs-splitter>
    </div>
</template>
<script setup>

import { SplitterComponent as EjsSplitter, PanesDirective as EPanes, PaneDirective as EPane } from '@syncfusion/ej2-vue-layouts';
import { createApp } from 'vue';

var contentVue1 = createApp().component("contentTemp1", {
    template: `<div class="content">
        <h3 class="h3">Grid </h3>
        The ASP.NET DataGrid component, or DataTable is a feature-rich component used to display data in a tabular format.
    </div>`,
    data() {
        return {
            data: {}
        };
    }
});

var contentVue2 = createApp().component("contentTemp2", {
    template: `<div class="content">
        <h3 class="h3">Schedule </h3>
        The ASP.NET Scheduler, a.k.a. event calendar, facilitates almost all calendar features, thus allowing users to manage their time efficiently
    </div>`,
    data() {
        return {
            data: {}
        };
    }
});

var contentVue3 = createApp().component("contentTemp3", {
    template: `<div class="content">
        <h3 class="h3">Chart </h3>
        ASP.NET charts, a well-crafted easy-to-use charting package, is used to add beautiful charts in web and mobile applications
    </div>`,
    data() {
        return {
            data: {}
        };
    }
});

const content1 = () => {
    return { template: contentVue1 }
}
const content2 = () => {
    return { template: contentVue2 }
}
const content3 = () => {
    return { template: contentVue3 }
}

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";

#app {
    margin: 65px auto;
}

.content {
    padding: 10px;
}

.e-splitter {
    margin: 0 auto;
}
</style>