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
<script>

import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';

export default {
  name: "App",
  components: {
    "ejs-inplaceeditor": InPlaceEditorComponent
  },
  data: function () {
    return {
      ValidationRules: {
        Number: { maxLength: 5 }
      },
    };
  },
};
</script>
