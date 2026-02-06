<template>
    <div id='container'>
        <div class="control-section">
            <div class="menu-section">
                <ejs-menu :items='menuItems' :beforeOpen='beforeOpen' :beforeClose='beforeClose' :onClose='onClose'
                    :onOpen='onOpen' :select='select'></ejs-menu>
            </div>
            <div class="property-section">
                <table id="propertyTable" title="Event trace">
                    <tbody>
                        <th>Event trace:-</th>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button id='clear' @click=onClick>Clear</button>
        </div>
    </div>
</template>

<script setup>

import { MenuComponent as EjsMenu } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const menuItems = [
    {
        text: 'Events',
        items: [
            { text: 'Conferences' },
            { text: 'Music' },
            { text: 'Workshops' }
        ]
    },
    {
        text: 'Movies',
        items: [
            { text: 'Now Showing' },
            { text: 'Coming Soon' }
        ]
    },
    {
        text: 'Directory',
        items: [
            { text: 'Media Gallery' },
            { text: 'Newsletters' }
        ]
    },
    {
        text: 'Queries',
        items: [
            { text: 'Our Policy' },
            { text: 'Site Map' }
        ]
    },
    { text: 'Services' }
];

const updateEventLog = (args) => {
    var propertyElem = document.getElementById('propertyTable');
    propertyElem.getElementsByTagName('td')[0].insertAdjacentHTML('beforeend', args.name + ' Event triggered. <br />');
};
const beforeOpen = (args) => {
    updateEventLog(args);
};
const beforeClose = (args) => {
    updateEventLog(args);
};
const onClose = (args) => {
    updateEventLog(args);
};
const onOpen = (args) => {
    updateEventLog(args);
};
const select = (args) => {
    updateEventLog(args);
};
const onClick = () => {
    var propertyElem = document.getElementById('propertyTable');
    propertyElem.getElementsByTagName('td')[0].innerHTML = '';
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";

html,
body,
.control-section {
    height: 95%;
}

.menu-section {
    margin-top: 100px;
    text-align: center;
    float: left;
}

.property-section {
    overflow: auto;
    width: 40%;
    height: 330px;
    float: right;
    font-family: monospace;
}

.property-section th {
    text-align: left;
}

#clear {
    float: right;
    clear: both;
}
</style>