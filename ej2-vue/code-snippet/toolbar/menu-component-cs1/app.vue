<template>
    <div id="app">
        <ejs-toolbar>
            <e-items>
                <e-item :template='menuTemplate'></e-item>
            </e-items>
        </ejs-toolbar>
    </div>
</template>

<script>

import { MenuComponent, ToolbarComponent, ItemDirective, ItemsDirective } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';
import { createApp } from "vue";

enableRipple(true);

var menutemplateVue = createApp().component("demo", {
    components: {
        "ejs-menu": MenuComponent
    },
    template: '<ejs-menu :items="menuItems"></ejs-menu>',
    data() {
        return {
            data: {},
            menuItems: [
                {
                    text: 'Appliances',
                    items: [
                        {
                            text: 'Kitchen',
                            items: [
                                { text: 'Electric Cookers' },
                                { text: 'Coffee Makers' },
                                { text: 'Blenders' }
                            ]
                        },
                        {
                            text: 'Washing Machine',
                            items: [
                                { text: 'Fully Automatic' },
                                { text: 'Semi Automatic' }
                            ]
                        },
                        {
                            text: 'Air Conditioners',
                            items: [
                                { text: 'Inverter ACs' },
                                { text: 'Split ACs' },
                                { text: 'Window ACs' }
                            ]
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
                                { text: 'Power Banks' }
                            ]
                        },
                        {
                            text: 'Computer',
                            items: [
                                { text: 'Pendrives' },
                                { text: 'External Hard Disks' },
                                { text: 'Monitors' }
                            ]
                        }
                    ]
                },
                {
                    text: 'Fashion',
                    items: [
                        {
                            text: 'Men',
                            items: [
                                { text: 'Shirts' },
                                { text: 'Jackets' },
                                { text: 'Track Suits' }
                            ]
                        },
                        {
                            text: 'Women',
                            items: [
                                { text: 'Kurtas' },
                                { text: 'Salwars' },
                                { text: 'Sarees' }
                            ]
                        }
                    ]
                },
                {
                    text: 'Home & Living',
                    items: [
                        {
                            text: 'Furniture',
                            items: [
                                { text: 'Beds' },
                                { text: 'Mattresses' },
                                { text: 'Dining Tables' }
                            ]
                        },
                        {
                            text: 'Decor',
                            items: [
                                { text: 'Clocks' },
                                { text: 'Wall Decals' },
                                { text: 'Paintings' }
                            ]
                        }
                    ]
                }
            ],
        };
    }
});

export default {
    name: "App",
    components: {
        "ejs-toolbar": ToolbarComponent,
        "e-items": ItemsDirective,
        "e-item": ItemDirective
    },
    data: function () {
        return {
            menuTemplate: function () {
                return {
                    template: menutemplateVue
                }
            }
        }
    },
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
</style>