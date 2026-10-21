<template>
    <div>
        <ejs-button iconCss='e-search-icon'></ejs-button>
    </div>
</template>

<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/button/index.css";
button {
  margin: 25px 5px 20px 20px;
}

.e-btn-icon.e-search-icon {
   background: url('../../../button/images/search_icon.svg');
   height: 25px;
   width: 25px;
}

</style>