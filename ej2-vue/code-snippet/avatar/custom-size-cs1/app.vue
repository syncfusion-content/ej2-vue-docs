<template>
    <div id='element'>
        <span class="e-avatar">26px</span>
        <span class="e-avatar">24px</span>
        <span class="e-avatar">22px</span>
        <span class="e-avatar">20px</span>
        <span class="e-avatar">18px</span>
    </div>
</template>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";

#element {
    display: block;
    width: 400px;
    margin: 100px auto;
    border-radius: 3px;
}

.e-avatar {
    margin: 2px;
}
#element :nth-child(5) {
    font-size: 18px;
}

#element :nth-child(4) {
    font-size: 20px;
}

#element :nth-child(3) {
    font-size: 22px;
}

#element :nth-child(2) {
    font-size: 24px;
}

#element :nth-child(1) {
    font-size: 26px;
}
</style>