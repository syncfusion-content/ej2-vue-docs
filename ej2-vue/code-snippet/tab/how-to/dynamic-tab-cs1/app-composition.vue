<template>
    <div id="app">
        <div id='tab1_content' style='display: none'>
            <ul>
                <li>Click on the "+" header to add dynamic tab items. </li>
                <li>It displays input elements to get the new tab information. </li>
                <li>Add details and click the "Add Tab" button to open the newly added tab.</li>
            </ul>
        </div>
        <div id='form-container' style='display: none'>
            <div class='e-float-input'>
                <input type='text' id='tab-title' required="" />
                <span class='e-float-line'></span>
                <label class='e-float-text'>Enter header title</label>
            </div>
            <br />
            <div class='e-float-input'>
                <textarea rows='5' type='text' id='tab-content' required=""></textarea>
                <span class='e-float-line'></span>
                <label class='e-float-text'>Enter content</label>
            </div>
            <br />
            <div class='btn-section'>
                <button id='btn-add' class='e-btn' v-on:click='btnClicked'>Add Tab</button>
                <br />
                <br />
                <span class='info'> * Title is mandatory to add a new Tab</span>
            </div>
        </div>
        <ejs-tab id='dynamic_tab' ref='TabInstance' :selected="tabSelected">
            <e-tabitems>
                <e-tabitem :header='headerText0' :content="content0"></e-tabitem>
                <e-tabitem :header='headerText1' :content="content1"></e-tabitem>
            </e-tabitems>
        </ejs-tab>
    </div>
</template>
<script setup>

import { TabComponent as EjsTab, TabItemsDirective as ETabitems, TabItemDirective as ETabitem } from '@syncfusion/ej2-vue-navigations';
import { enableRipple, createElement } from '@syncfusion/ej2-base';
import { ref, onMounted } from 'vue';

enableRipple(true);

const TabInstance = ref(null);
const headerText0 = { 'text': 'Tab1' };
const headerText1 = { 'iconCss': 'e-add-icon' };
const content0 = '#tab1_content';
const content1 = '#form-container';

onMounted(() => {
    let addBtn = document.querySelectorAll(".e-ileft.e-icon");
    addBtn[0].setAttribute("title", "Add Tab");
});

const tabSelected = (args) => {
    if (args.selectedIndex === document.querySelectorAll('#dynamic_tab .e-toolbar-item').length - 1) {
        document.getElementById('tab-title').value = '';
        document.getElementById('tab-content').value = '';
    }
};
const btnClicked = () => {
    let title = document.getElementById('tab-title').value;
    let content = document.getElementById('tab-content').value;
    var tabObj = TabInstance.value.ej2Instances;
    let item = { header: { text: title }, content: createElement('pre', { innerHTML: content.replace(/\n/g, '<br>\n') }).outerHTML };
    let totalItems = document.querySelectorAll('#dynamic_tab .e-toolbar-item').length;
    tabObj.addTab([item], totalItems - 1);
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

#container {
    visibility: hidden;
}

#loader {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

.e-content .e-item {
    font-size: 12px;
    margin: 10px;
    text-align: justify;
}

.container {
    min-width: 350px;
    max-width: 500px;
    margin: 0 auto;
}

#form-container {
    margin: 0 auto;
    max-width: 300px;
}

.btn-section {
    text-align: center;
}

.add-tab-btn-section td {
    padding: 10px;
}

.info {
    font-weight: bold;
}

.e-add-icon::before {
    content: '\e823';
}
</style>