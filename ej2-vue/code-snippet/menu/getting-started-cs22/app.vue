<template>
    <div class="toolbar-menu-control">
        <ejs-toolbar ref="toolbar" :created="onCreated">
            <e-items>
                <e-item :template='menuTemplate'></e-item>
                <e-item prefixIcon='em-icons e-shopping-cart' align='Right'></e-item>
            </e-items>
        </ejs-toolbar>
    </div>
</template>

<script>

import { MenuComponent, ToolbarComponent, ItemDirective, ItemsDirective, } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';
import { createApp } from "vue";

enableRipple(true);

var menutemplateVue = createApp().component("demoTemplate", {
    template: '<ejs-menu :items="menuItems" :animationSettings="animation"></ejs-menu>',
    components: {
        "ejs-menu": MenuComponent
    },
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
            animation: { effect: 'none' }
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
    methods: {
        onCreated: function () {
            this.$refs.toolbar.$el.ej2_instances[0].refreshOverflow();
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

@font-face {
    font-family: 'e-menu';
    src:
        url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
}

.em-icons {
    font-family: 'e-menu';
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    text-transform: none;
    line-height: 2;
}

.toolbar-menu-control .e-toolbar-items .e-toolbar-item .e-tbar-btn .e-btn-icon.e-shopping-cart {
    font-size: 20px;
    margin-right: 1px;
}

.toolbar-menu-control .e-shopping-cart::before {
    content: '\e7e8';
}

.toolbar-menu-control .e-menu-wrapper .e-menu {
    border: none;
}

.toolbar-menu-control {
    margin: 45px auto 0;
    max-width: 950px;
}

.toolbar-menu-control .e-toolbar .e-toolbar-left .e-toolbar-item.e-template {
    padding: 0;
}

.toolbar-menu-control .e-toolbar {
    overflow: visible !important;
}

.toolbar-menu-control .e-menu-wrapper {
    margin-right: 160px;
}

.toolbar-menu-control .e-hscroll .e-hscroll-content {
    position: static;
}

@media only screen and (max-width: 1300px) {
    .toolbar-menu-control {
        width: auto;
    }
}
</style>