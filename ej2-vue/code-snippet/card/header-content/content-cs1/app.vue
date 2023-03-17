

<template>
  <div id="app">
     <div tabindex="0" class="e-card">
            <div class="e-card-header">
                <div class="e-card-header-image football"></div>
                <div class="e-card-header-caption">
                    <div class="e-card-header-title"> Laura Callahan</div>
                    <div class="e-card-sub-title">Sales Coordinator and Representative</div>
                </div>
            </div>
            <div class="e-card-content">
                Laura received a BA in psychology from the University of Washington. She has also completed a course in business French. She reads and writes French.
            </div>
        </div>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  name: 'app',
}
</script>
<style>
  @import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css';

.e-card .e-card-header .e-card-header-image.football {
    background-image: url('./football.png');
}

.e-card {
    width: 300px
}
</style>


