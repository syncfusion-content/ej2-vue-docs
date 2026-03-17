<template>
    <div>
        <ejs-menu :items='menuItems' :beforeOpen='onBeforeOpen' cssClass='e-scrollable-menu'
            :enableScrolling='true'></ejs-menu>
    </div>
</template>

<script>

import { MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { enableRipple, closest } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
    name: "App",
    components: {
        "ejs-menu": MenuComponent
    },
    data: function () {
        return {
            // Menu items definition
            menuItems: [
                {
                    text: 'Appliances',
                    items: [
                        {
                            text: 'Kitchen',
                            items: [
                                { text: 'Electric Cookers' },
                                { text: 'Coffee Makers' },
                                { text: 'Blenders' },
                                { text: 'Microwave Ovens' }
                            ]
                        },
                        {
                            text: 'Television',
                            items: [
                                { text: 'Our Exclusive TVs' },
                                { text: 'Smart TVs' },
                                { text: 'Big Screen TVs' }
                            ]
                        },
                        {
                            text: 'Washing Machine'
                        },
                        {
                            text: 'Refrigerators'
                        },
                        {
                            text: 'Air Conditioners',
                            items: [
                                { text: 'Inverter ACs' },
                                { text: 'Split ACs' },
                                { text: 'Window ACs' },
                            ]
                        },
                        {
                            text: 'Water Purifiers'
                        },
                        {
                            text: 'Air Purifiers'
                        },
                        {
                            text: 'Chimneys'
                        },
                        {
                            text: 'Inverters'
                        },
                        {
                            text: 'Healthy Living'
                        },
                        {
                            text: 'Vacuum Cleaners'
                        },
                        {
                            text: 'Room Heaters'
                        },
                        {
                            text: 'New Launches'
                        }
                    ]
                },
                {
                    text: 'Accessories',
                    items: [
                        {
                            text: 'Mobile',
                            items: [
                                { text: 'Headphones' },
                                { text: 'Memory Cards' },
                                { text: 'Power Banks' },
                                { text: 'Mobile Cases' },
                                { text: 'Screen Protectors' }
                            ]
                        },
                        {
                            text: 'Laptops'
                        },
                        {
                            text: 'Desktop PC',
                            items: [
                                { text: 'Pendrives' },
                                { text: 'External Hard Disks' },
                                { text: 'Monitors' },
                                { text: 'Keyboards' }
                            ]
                        },
                        {
                            text: 'Camera',
                            items: [
                                { text: 'Lens' },
                                { text: 'Tripods' }
                            ]
                        }
                    ]
                },
                {
                    text: 'Fashion',
                    items: [
                        {
                            text: 'Men'
                        },
                        {
                            text: 'Women'
                        }
                    ]
                },
                {
                    text: 'Home & Living',
                    items: [
                        {
                            text: 'Furniture'
                        },
                        {
                            text: 'Decor'
                        },
                        {
                            text: 'Smart Home Automation'
                        },
                        {
                            text: 'Dining & Serving'
                        }
                    ]
                },
                {
                    text: 'Entertainment',
                    items: [
                        {
                            text: 'Televisions'
                        },
                        {
                            text: 'Home Theatres'
                        },
                        {
                            text: 'Gaming Laptops'
                        }
                    ]
                },
                {
                    text: 'Contact Us'
                },
                {
                    text: 'Help'
                }]
        };
    },
    methods: {
        onBeforeOpen(args) {
            // Restricting sub menu wrapper height
            if (args.parentItem.text === 'Appliances') {
                closest(args.element, '.e-menu-wrapper').style.height = '230px';
            }
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

body {
    margin-top: 100px;
    text-align: center;
}

/* Restricting the parent menu wrapper size */
.e-menu-wrapper.e-scrollable-menu:not(.e-menu-popup) {
    width: 492px;
}
</style>