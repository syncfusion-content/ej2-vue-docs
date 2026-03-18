<template>
    <div>
        <ejs-menu ref="menu" id="menu" :items='menuItems' :fields='menuFields' :created='onCreated'></ejs-menu>
    </div>
</template>

<script setup>

import { MenuComponent as EjsMenu } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';
import { ref } from "vue";

enableRipple(true);

const menu = ref(null);
const menuItems = [
    {
        continent: 'Asia',
        countries: [
            { country: 'China' },
            { country: 'India' },
            { country: 'Japan' }
        ]
    },
    {
        continent: 'North America',
        countries: [
            { country: 'Canada' },
            { country: 'Mexico' },
            { country: 'USA' }
        ]
    },
    {
        continent: 'South America',
        countries: [
            { country: 'Brazil' },
            { country: 'Colombia' },
            { country: 'Argentina' }
        ]
    },
    {
        continent: 'Oceania',
        countries: [
            { country: 'Australia' },
            { country: 'New Zealand' },
            { country: 'Samoa' },
        ]
    },
    { continent: 'Antarctica' }
];
const menuFields = {
    text: ['continent', 'country'],
    children: ['countries']
};
const onCreated = function () {
    var insertItem = [
        {
            continent: 'Europe',
            countries: [
                { country: 'Finland' },
                { country: 'Austria' }
            ]
        }
    ];
    menu.value.insertBefore(insertItem, 'Oceania', false);
    insertItem = [
        {
            continent: 'Africa',
            countries: [
                { country: 'Nigeria' }
            ]
        }
    ];
    menu.value.insertAfter(insertItem, 'Oceania', false);
    menu.value.removeItems(['South America', 'Mexico'], false);
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

body {
    margin-top: 100px;
    text-align: center;
}
</style>