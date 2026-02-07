<template>
    <div>
        <ejs-menu ref="menu" id="menu" :items='menuItems' :fields='menuFields' :created='onCreated'></ejs-menu>
    </div>
</template>

<script>

import { MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
    name: "App",
    components: {
        "ejs-menu": MenuComponent
    },
    data: function () {
        return {
            menuItems: [
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
            ],
            menuFields: {
                text: ['continent', 'country'],
                children: ['countries']
            }
        };
    },
    methods: {
        onCreated: function () {
            var insertItem = [
                {
                    continent: 'Europe',
                    countries: [
                        { country: 'Finland' },
                        { country: 'Austria' }
                    ]
                }
            ];
            this.$refs.menu.insertBefore(insertItem, 'Oceania', false);
            insertItem = [
                {
                    continent: 'Africa',
                    countries: [
                        { country: 'Nigeria' }
                    ]
                }
            ];
            this.$refs.menu.insertAfter(insertItem, 'Oceania', false);
            this.$refs.menu.removeItems(['South America', 'Mexico'], false);
        }
    }
}
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