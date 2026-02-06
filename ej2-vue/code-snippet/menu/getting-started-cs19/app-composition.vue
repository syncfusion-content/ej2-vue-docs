<template>
    <div>
        <ejs-menu :items='menuItems' :beforeItemRender='onBeforeItemRender'></ejs-menu>
    </div>
</template>

<script setup>

import { MenuComponent as EjsMenu } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Menu items definition
const menuItems = [
    {
        text: 'Appliances',
        items: [
            { text: 'Washing Machine', url: 'https://www.google.com/search?q=washing+machine' },
            { text: 'Air Conditioners', url: 'https://www.google.com/search?q=air+conditioners' }
        ]
    },
    {
        text: 'Mobile',
        items: [
            { text: 'Headphones', url: 'https://www.google.com/search?q=headphones' },
            { text: 'Memory Cards', url: 'https://www.google.com/search?q=memory+cards' },
            { text: 'Power Banks', url: 'https://www.google.com/search?q=power+banks' }
        ]
    },
    {
        text: 'Entertainment',
        items: [
            { text: 'Televisions', url: 'https://www.google.com/search?q=televisions' },
            { text: 'Home Theatres', url: 'https://www.google.com/search?q=home+theatres' },
            { text: 'Gaming Laptops', url: 'https://www.google.com/search?q=gaming+laptops' }
        ]
    },
    { text: 'Fashion', url: 'https://www.google.com/search?q=fashion' },
    { text: 'Offers', url: 'https://www.google.com/search?q=offers' }
];
const onBeforeItemRender = (args) => {
    if (args.item.url) {
        args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
    }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";

body {
    margin-top: 100px;
    text-align: center;
}
</style>