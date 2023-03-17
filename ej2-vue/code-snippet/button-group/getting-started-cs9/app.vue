


<template>
  <div id='app'>
    <form>
        <div class='e-btn-group'>
            <input type="radio" id="male" name="gender" value="male" checked/>
            <label class="e-btn" for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female"/>
            <label class="e-btn" for="female">Female</label>
            <input type="radio" id="transgender" name="gender" value="transgender"/>
            <label class="e-btn" for="transgender">Transgender</label>
        </div>
        <ejs-button isPrimary='true'>Submit</ejs-button>
    </form>
  </div>
</template>
<script>
import Vue from 'vue';
import { ButtonPlugin  } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(ButtonPlugin);
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

  .e-btn-group, button {
   margin: 20px 5px 20px 20px;
  }
</style>



