<template>
  <div>
    <table class="table-section">
      <tr>
        <td>
          <ejs-inplaceeditor mode="Inline" type="Numeric" name="Number" :validationRules="ValidationRules">
          </ejs-inplaceeditor>
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup>

import { InPlaceEditorComponent as EjsInplaceeditor } from '@syncfusion/ej2-vue-inplace-editor';

const ValidationRules = {
  Number: { maxLength: 5 },
}

</script>