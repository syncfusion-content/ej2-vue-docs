<template>
    <div class="template-menu-control">
        <ejs-menu :items="data" :fields="menuFields" :template="menuTemplate"></ejs-menu>
    </div>
</template>

<script>

import { MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { createApp } from "vue";

export default {
    name: "App",
    components: {
        "ejs-menu": MenuComponent
    },
    data: function () {
        var menutemplateVue = createApp().component("demoTemplate", {
            template: '  <span v-if="data.category"> {{data.category}} </span>' +
                ' <div v-else-if="data.value" style="width: 100%;display: flex;justify-content: space-between;">' +
                '<img v-if="data.url" class="e-avatar e-avatar-small" v-bind:style="image" />' +
                '<span style="width:100%;">{{data.value}}</span></div>' +
                '<span class="e-menu-template" v-else-if="data.support">' +
                '<ul>' +
                '<li v-bind:key="index" v-for="(val,index) of data.support">' +
                ' {{val.value}} ' +
                '<span v-if="val.count" class="e-badge e-badge-success">{{val.count}}</span> ' +
                ' </li> ' +
                '</ul>' +
                '</span>' +
                '<div tabindex="0" class="e-card" v-else>' +
                '<div class="e-card-header">' +
                '<div class="e-card-header-caption">' +
                '<div class="e-card-header-title">About Us</div>' +
                '</div>' +
                '</div>' +
                '<div class="e-card-content">{{data.about.value}} </div>' +
                '<div class="e-card-actions">' +
                '<button class="e-btn e-outline">Read More </button>' +
                '</div>' +
                '</div>',
            data() {
                return {
                    data: {}
                }
            },
            computed: {
                image: function () {
                    return 'background-image: url(https://ej2.syncfusion.com/react/demos/src/menu/images/' + this.data.url + '.png);';
                }
            }
        });

        return {
            data: [
                {
                    category: 'Products',
                    options: [
                        { value: 'JavaScript', url: 'javascript' },
                        { value: 'Angular', url: 'angular' },
                        { value: 'ASP.NET Core', url: 'core' },
                        { value: 'ASP.NET MVC', url: 'mvc' }
                    ]
                },
                {
                    category: 'Services',
                    options: [
                        {
                            support: [
                                { value: 'Application Development', count: '1200+' },
                                { value: 'Maintenance & Support', count: '3700+' },
                                { value: 'Quality Assurance' },
                                { value: 'Cloud Integration', count: '900+' }
                            ]
                        }
                    ]
                },
                {
                    category: 'About Us',
                    options: [
                        {
                            about: {
                                value: "We are on a mission to provide world-class best software solutions for web, mobile and desktop platforms. Around 900+ applications are desgined and delivered to our customers to make digital & strengthen their businesses."
                            }
                        }
                    ]
                },
                { category: 'Careers' },
                { category: 'Sign In' }
            ],
            menuFields: {
                text: ['category', 'value'],
                children: ['options']
            },
            menuTemplate: function () {
                return {
                    template: menutemplateVue
                }
            }
        };
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/material3.css";
/* ej2 Menu template styles */

.template-menu-control {
    margin-top: 45px;
    text-align: center;
}

/* Common customization */

.e-bigger .template-menu-control .e-menu-wrapper.e-control ul.e-ul .e-menu-item,
.template-menu-control .e-menu-wrapper.e-control ul.e-ul .e-menu-item,
.template-menu-control .e-menu-wrapper.e-control ul.e-ul .e-menu-item .e-menu-template {
    display: flex;
    height: auto;
    padding: 0;
}

/* Avatar customization */

.e-bigger .template-menu-control .e-menu-wrapper ul .e-menu-item .e-avatar {
    background-size: auto;
    text-indent: 40px;
}

.template-menu-control .e-menu-wrapper ul .e-menu-item .e-avatar {
    background-color: inherit;
    background-position: 0;
    background-size: 25px;
    color: inherit;
    font-size: inherit;
    height: inherit;
    justify-content: left;
    margin: 0 10px;
    width: 100%;
    text-indent: 35px;
}

/* Badge customization */

.template-menu-control .e-menu-wrapper ul .e-menu-item ul li {
    padding: 0 10px;
}

.e-bigger .template-menu-control .e-menu-wrapper ul .e-menu-item ul li .e-badge {
    margin: 18px 0px 0px 10px;
}

.template-menu-control .e-menu-wrapper ul .e-menu-item ul li .e-badge {
    float: right;
    margin: 13px 0px 0px 10px;
}

.template-menu-control .e-menu-wrapper ul .e-menu-item ul li:hover {
    background-color: #eee;
}

/* Card customization */

.e-bigger .template-menu-control .e-menu-wrapper ul.e-ul .e-menu-item .e-card {
    width: 320px;
}

.template-menu-control .e-menu-wrapper ul.e-ul .e-menu-item .e-card {
    width: 290px;
    font-size: inherit;
    cursor: default;
    background-color: inherit;
    border-color: transparent;
}

.template-menu-control .e-menu-wrapper ul.e-ul .e-menu-item .e-card .e-card-content {
    white-space: normal;
    color: inherit;
    padding-top: 0;
    text-align: justify;
    font-size: inherit;
}

.e-bigger .template-menu-control .e-menu-wrapper ul.e-ul .e-menu-item .e-card .cb-icons {
    width: 40px;
    font-size: 40px;
    height: 40px;
}

.template-menu-control .e-menu-wrapper ul.e-ul .e-menu-item .e-card .cb-icons {
    width: 30px;
    font-size: 30px;
    height: 30px;
}

.template-menu-control .e-menu-wrapper ul.e-ul .e-menu-item .e-card .e-card-btn {
    background-color: inherit;
}
</style>