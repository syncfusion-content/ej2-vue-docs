

<template>
    <div id='container'>
        <div id='element1'>
            <p>Draggable Element </p>
        </div>
    </div>
</template>
<script>
    import { Draggable } from '@syncfusion/ej2-base';
    import Vue from "vue";
    export default {
        mounted: function () {

            var dragElement = document.getElementById('element1');
            var draggable = new Draggable(dragElement, { clone: false });
        }
    }
</script>
<style>
    #element1,
    .helper {
        height: 100px;
        width: 150px;
        border: 1px solid #cecece;
        cursor: move;
        user-select: none;
        color: #6a77a7;
        touch-action: none;
    }

    p {
        padding-top: 23px;
        text-align: center;
    }

    .helper {
        opacity: 0.6;
    }

    .select {
        border: 1px solid #cccccc;
        background: #ededed;
    }
</style>


 
 