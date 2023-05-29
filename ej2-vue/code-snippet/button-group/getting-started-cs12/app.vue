


<template>
  <div id='app'>
    <div class='e-btn-group'>
        <input type="radio" id="radioleft" name="align" value="left"/>
        <label class="e-btn" for="radioleft">Left</label>
        <input type="radio" id="radiomiddle" name="align" value="middle"/>
        <label class="e-btn" for="radiomiddle">Center</label>
        <input type="radio" id="radioright" name="align" value="right"/>
        <label class="e-btn" for="radioright">Right</label>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

export default {
  name: 'app'
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  #app {
   margin: 20px;
  }

  .e-btn-group {
    margin: 25px 5px 20px 20px;
   }
</style>



