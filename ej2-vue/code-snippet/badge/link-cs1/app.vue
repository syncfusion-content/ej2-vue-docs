

<template>
    <div id='element'>
        <div style="display: inline-block; margin-top: 15px;">
            <a href="#" class="e-badge e-badge-primary">Link Badge</a>
        </div>
    </div>
</template>
<script>

export default {
  data() {
    return {};
  }
}
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-vue-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";

    #element {
        display: flex;
        width: 400px;
        height: 50px;
        margin: auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
        justify-content: center;
        position: relative;
        top: 130px;
    }
</style>
