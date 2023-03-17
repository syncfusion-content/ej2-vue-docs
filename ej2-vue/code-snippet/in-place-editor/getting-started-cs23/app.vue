

<template>
  <div>
    <table class="table-section">
            <tr>
                <td>
                    <ejs-inplaceeditor  mode="Inline" type="Numeric" name= "Number" :validationRules="ValidationRules">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            </table>
  </div>
</template>
<script>
import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';

Vue.use(InPlaceEditorPlugin);

export default {
   name: 'app',
  data: function() {
    return {
            ValidationRules: {
                Number: { maxLength: 5 },
            },
    };
  },
};
</script>



