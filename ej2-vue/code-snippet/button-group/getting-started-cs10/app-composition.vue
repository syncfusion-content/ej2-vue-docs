<template>
  <div id='app'>
      <h5>Normal behavior</h5>
      <div id='basic'>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <h5>Checkbox type behavior</h5>
      <div id='checkbox'>
        <input type="checkbox" id="checkbold" name="font" value='bold' />
        <input type="checkbox" id="checkitalic" name="font" value='italic' />
        <input type="checkbox" id="checkunderline" name="font" value='underline' />
      </div>
      <h5>Radiobutton type behavior</h5>
      <div id='radio'>
        <input type="radio" id="radioleft" name="align" value='left'/>
        <input type="radio" id="radiomiddle" name="align" value='middle'/>
        <input type="radio" id="radioright" name="align" value='right'/>
      </div>
  </div>
</template>

<script setup>
import { createButtonGroup } from '@syncfusion/ej2-splitbuttons';
import { onMounted } from 'vue';
    onMounted(() => {
  createButtonGroup('#basic', {
      buttons: [
          { content: 'HTML' },
          { content: 'CSS' },
          { content: 'Javascript'}
      ]
  });

  createButtonGroup('#checkbox', {
      buttons: [
          { content: 'Bold' },
          { content: 'Italic' },
          { content: 'Undeline'}
      ]
  });

  createButtonGroup('#radio', {
      buttons: [
          { content: 'Left' },
          { content: 'Center' },
          { content: 'Right'}
      ]
  });
});
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
.e-btn-group {
  margin: 0 5px 5px 5px;
}
</style>