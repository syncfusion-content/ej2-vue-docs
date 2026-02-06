<template>
    <div>
        <div class="header">
            <span id="hamburger" class="e-icons menu default" @click='hamburgerClick'></span>
            <div class="content">Header content</div>
        </div>
        <ejs-sidebar ref="sidebar" id='default-sidebar' width='220px' type='Over'>
            <div class="title-header">
                <div style="display:inline-block"> Menu </div>
                <span id="close" class="e-icons" @click='close'></span>
            </div>
            <div class="content-area">
                <ejs-accordion ref="accordion" :items='items' :expanding='expand' :clicked='clicked'></ejs-accordion>
            </div>
        </ejs-sidebar>
    </div>
</template>

<script setup>

import { Accordion } from "@syncfusion/ej2-navigations";
import { SidebarComponent as EjsSidebar, AccordionComponent as EjsAccordion } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';
import { ref } from "vue";

enableRipple(true);

const sidebar = ref(null);

const items = [
    {
        header: 'Appliances',
        content: '<div id="Appliances_Items"></div>',
        subItems: [
            {
                header: 'Kitchen',
                content: '<div id="Appliances_Kitchen_Items"></div>',
                subItems: [
                    { header: 'Electric Cookers' },
                    { header: 'Coffee Makers' },
                    { header: 'Blenders' },
                ]
            },
            {
                header: 'Washing Machine',
                content: '<div id="Appliances_Washing_Items"></div>',
                subItems: [
                    { header: 'Fully Automatic' },
                    { header: 'Semi Automatic' }
                ]
            },
            {
                header: 'Air Conditioners',
                content: '<div id="Appliances_Conditioners_Items"></div>',
                subItems: [
                    { header: 'Inverter ACs' },
                    { header: 'Split ACs' },
                    { header: 'Window ACs' },
                ]
            }
        ]
    },
    {
        header: 'Accessories',
        content: '<div id="Accessories_Items"></div>',
        subItems: [
            {
                header: 'Mobile',
                content: '<div id="Accessories_Mobile_Items"></div>',
                subItems: [
                    { header: 'Headphones' },
                    { header: 'Memory Cards' },
                    { header: 'Power Banks' }
                ]
            },
            {
                header: 'Computer',
                content: '<div id="Accessories_Computer_Items"></div>',
                subItems: [
                    { header: 'Pendrives' },
                    { header: 'External Hard Disks' },
                    { header: 'Monitors' }
                ]
            }
        ]
    },
    {
        header: 'Fashion',
        content: '<div id="Fashion_Items"></div>',
        subItems: [
            { header: 'Men' },
            { header: 'Women' }
        ]
    },
    {
        header: 'Home & Living',
        content: '<div id="Home_Living_Items"></div>',
        subItems: [
            { header: 'Furniture' },
            { header: 'Decor' }
        ]
    },
    {
        header: 'Entertainment',
        content: '<div id="Entertainment_Items"></div>',
        subItems: [
            { header: 'Televisions' },
            { header: 'Home Theatres' },
            { header: 'Gaming Laptops' }
        ]
    }
];

const expand = (e) => {
    if (e.isExpanded) {
        if (e.element.getElementsByClassName('e-acrdn-content')[0].children[0].classList.contains('e-accordion')) {
            return;
        }
        //Initialize Nested Accordion component
        var nestAcrdn = new Accordion({
            items: e.item.subItems,
            expanding: expand,
            clicked: clicked
        });

        var elemId = e.element.getElementsByClassName('e-acrdn-content')[0].children[0].id;
        //Render initialized Nested Accordion component
        nestAcrdn.appendTo('#' + elemId);
    }
};

const clicked = (e) => {
    if (!e.item && !(e.originalEvent.target.closest('.e-acrdn-item').getElementsByClassName('e-tgl-collapse-icon').length)) {
        sidebar.value.hide();
    }
};

const hamburgerClick = () => {
    sidebar.value.show();
};

const close = () => {
    sidebar.value.hide();
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";

body {
    margin: 0;
}

.header {
    width: 100%;
    background-color: #7b8cfb;
}

#default-sidebar,
.header .content {
    background-color: #7b8cfb;
    color: white;
    border: none;
}

.header .content {
    font-size: 20px;
    line-height: 50px;
    text-align: center;
}

.main-content {
    text-align: center;
    font-size: 20px;
    padding: 100px 15px;
}

#default-sidebar .close-btn:hover {
    color: rgba(0, 0, 0, .87);
    background-color: #fafafa;
}

#hamburger.menu {
    font-size: 25px;
    cursor: pointer;
    float: left;
    line-height: 50px;
    position: absolute;
    z-index: 1000;
    left: 25px;
    color: white;
}

#hamburger.menu:before {
    content: '\e99a';
}

#close:before {
    content: "\e945";
}

.title-header {
    text-align: center;
    font-size: 18px;
    padding: 15px 15px 35px;
}

.e-sidebar .title-header #close {
    cursor: pointer;
    line-height: 25px;
    float: right;
}
</style>