<template>
    <div>
        <ejs-menu :items='datasource' :fields='menuFields'></ejs-menu>
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
            //Menu datasource
            datasource: [
                { id: 'parent1', text: 'Events' },
                { id: 'parent2', text: 'Movies' },
                { id: 'parent3', text: 'Directory' },
                { id: 'parent4', text: 'Queries', pId: null },
                { id: 'parent5', text: 'Services', pId: null },

                { id: 'parent6', text: 'Conferences', pId: 'parent1' },
                { id: 'parent7', text: 'Music', pId: 'parent1' },
                { id: 'parent8', text: 'Workshops', pId: 'parent1' },

                { id: 'parent9', text: 'Now Showing', pId: 'parent2' },
                { id: 'parent10', text: 'Coming Soon', pId: 'parent2' },

                { id: 'parent10', text: 'Media Gallery', pId: 'parent3' },
                { id: 'parent11', text: 'Newsletters', pId: 'parent3' },

                { id: 'parent12', text: 'Our Policy', pId: 'parent4' },
                { id: 'parent13', text: 'Site Map', pId: 'parent4' },
                { id: 'parent14', text: 'Pop', pId: 'parent7' },
                { id: 'parent15', text: 'Folk', pId: 'parent7' },
                { id: 'parent16', text: 'Classical', pId: 'parent7' }
            ],
            //Menu fields definition
            menuFields: {
                itemId: 'id',
                text: 'text',
                parentId: 'pId'
            }
        };

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