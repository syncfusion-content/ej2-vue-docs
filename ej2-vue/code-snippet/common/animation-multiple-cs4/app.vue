


<template>
     <div id='container'>
        <div id='element1'></div>
        <div id='element2'></div>
    </div>
</template>
<script>
    import { Animation } from '@syncfusion/ej2-base';
    import Vue from "vue";
    export default {
        mounted: function () {
            var animation = new Animation();
            animation.animate('#element1', { name: 'FadeOut' });
            animation.animate('#element2', { name: 'ZoomOut' });
        }
    }
</script>
<style>
  
#element1, #element2 {
    background: #333333;
    border: 1px solid #cecece;
    box-sizing: border-box;
    float: left;
    height: 100px;
    width:100px;
}

#element2 {
    margin-left: 20px;
}
</style>



