<template>
  <div id='app'>
    <div class="e-btn-group">
        <div class='e-btn-group'>
            <ejs-button >HTML</ejs-button>
            <ejs-button >CSS</ejs-button>
            <ejs-button >Javascript</ejs-button>
            <ejs-dropdownbutton :items='items'>More</ejs-dropdownbutton>
        </div>
    </div>
  </div>
</template>
<script>

import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-dropdownbutton":DropdownbuttonComponent
},
  name: 'app',
  data () {
        return {
            items:[
            {
                text: 'Learn SQL'
            },
            {
                text: 'Learn PHP'
            },
            {
                text: 'Learn Bootstrap'
            }]
        };
    }
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

</style>