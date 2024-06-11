<template>
    <div id="app">
        <div style="margin: 50px;">
            <div tabindex="0" class="e-card">
                <div class="e-card-header">
                    <div class="e-card-header-image football e-card-corner"></div>
                    <div class="e-card-header-caption">
                        <div class="e-card-header-title"> Laura Callahan</div>
                        <div class="e-card-sub-title">Sales Coordinator and Representative</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin-left: 50px;margin-top:30px">
            <div tabindex="0" class="e-card">
                <div class="e-card-header">
                    <div class="e-card-header-caption">
                        <div class="e-card-header-title"> Laura Callahan</div>
                        <div class="e-card-sub-title">Sales Coordinator and Representative</div>
                    </div>
                    <div class="e-card-header-image football"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css';

.e-card .e-card-header .e-card-header-image.football {
    background-image: url('./football.png');
}

.e-card {
    width: 300px
}
</style>