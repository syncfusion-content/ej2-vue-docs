<template>
    <div id="app">
        <div class="control_wrapper">
            <ejs-treeview id='treeview' ref="treeview"  :fields="fields"></ejs-treeview>
        </div>
        <div id="btn">
            <ejs-button id="button1" ref="button1" cssClass="e-primary inline-element right" v-on:click="btnClick1" content="Add parent"></ejs-button>
            <ejs-button id="button2" ref="button2" cssClass="e-primary inline-element right" v-on:click="btnClick2" content="Add child"></ejs-button>        
        </div>
    </div>
</template>
<script>
import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

export default {
    name: "App",
    components: {
        "ejs-treeview": TreeViewComponent,
        "ejs-button": ButtonComponent
    },
    data() {
        let dataSource = [
            { id: 1, name: 'Discover Music', hasChild: true, expanded: true },
            { id: 2, pid: 1, name: 'Hot Singles' },
            { id: 3, pid: 1, name: 'Rising Artists' },
            { id: 4, pid: 1, name: 'Live Music' },
            { id: 6, pid: 1, name: 'Best of 2017 So Far' },
            { id: 7, name: 'Sales and Events', hasChild: true },
            { id: 8, pid: 7, name: '100 Albums - $5 Each' },
            { id: 9, pid: 7, name: 'Hip-Hop and R&B Sale' },
            { id: 10, pid: 7, name: 'CD Deals' },
            { id: 11, name: 'Categories', hasChild: true },
            { id: 12, pid: 11, name: 'Songs' },
            { id: 13, pid: 11, name: 'Bestselling Albums' },
            { id: 14, pid: 11, name: 'New Releases' },
            { id: 15, pid: 11, name: 'Bestselling Songs' },
            { id: 16, name: 'MP3 Albums', hasChild: true },
            { id: 17, pid: 16, name: 'Rock' },
            { id: 18, pid: 16, name: 'Gospel' },
            { id: 19, pid: 16, name: 'Latin Music' },
            { id: 20, pid: 16, name: 'Jazz' },
            { id: 21, name: 'More in Music', hasChild: true },
            { id: 22, pid: 21, name: 'Music Trade-In' },
            { id: 23, pid: 21, name: 'Redeem a Gift Card' },
            { id: 24, pid: 21, name: 'Band T-Shirts' },
        ];
        return {
            fields: { dataSource: dataSource, id: 'id', parentID: 'pid', text: 'name',  hasChildren: 'hasChild' },
        };
    },
    methods: {
        btnClick1: function () {
            this.$refs.treeview.addNodes([
                { id: 12, name: 'New Parent' },
                { id: 13, pid: 12, name: 'New Child1' },
            ]);
        },
        btnClick2: function () {
            this.$refs.treeview.addNodes([{ id: 11, name: 'New Child2', pid: 1 }], '1', null);
        },
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";

.control_wrapper {
    display: block;
    max-width: 400px;
    max-height: 320px;
    margin: auto;
    overflow: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}

#app {
    width: 350px;
    margin: 0 auto;
}
#btn{
        margin-left: 50px;
        margin-top: 20px;
    }
</style>