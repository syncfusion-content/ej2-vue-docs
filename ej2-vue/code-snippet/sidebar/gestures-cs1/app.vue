

<template>
<div id="app">
    <div class="wrapper">
        <ejs-sidebar id="default-sidebar" ref="sidebar" :width="width" :type="type" :enableGestures="enableGestures">
           <div class="title"> Sidebar content</div>
            <div class="sub-title">
               Click the button to close the Sidebar.
            </div>
            <div class="center-align">
               <button  ejs-button  id="close" v-on:click="closeClick"  class="e-btn close-btn">Close Sidebar</button>
            </div>
        </ejs-sidebar>
        <div>
            <div class="title">Main content</div>
                <div class="sub-title"> Click the button to open/close the Sidebar.</div>
                   <div style="padding:20px" class="center-align">
                       <button ejs-button id="toggle"  class="e-btn e-info" v-on:click="toggleClick" >Toggle Sidebar</button>
                </div>
           </div>
       </div>
    </div>
</template>
<script>
import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';

export default {
     components: {
        'ejs-sidebar': SidebarComponent
     },
     data () {
        return {
            enableGestures: false,
            type:'Push',
            width:'280px'
        }
    },
    methods: {
        toggleClick :function() {
            this.$refs.sidebar.toggle();
        },
        closeClick: function() {
            this.$refs.sidebar.hide();
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

.center-align {
    text-align: center;
    padding: 20px;
}

.title {
    text-align: center;
    font-size: 20px;
    padding: 15px;
}

.sub-title {
    text-align: center;
    font-size: 16px;
    padding: 10px;
}

.center {
    text-align: center;
    display: none;
    font-size: 13px;
    font-weight: 400;
    margin-top: 20px;
}

#default-sidebar {
    background-color: rgb(25, 118, 210);
    color: #ffffff;
}

.close-btn:hover {
    color: #fafafa;
}
</style>


