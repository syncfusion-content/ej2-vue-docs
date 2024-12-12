


<template>
    <div class="icon-bar">
        <span class="e-icons e-cut"></span>
        <span class="e-icons e-copy"></span>
        <span class="e-icons e-paste"></span>
    </div>
</template>
<script>
export default {}
</script>
<style>
  
.e-icons {
    color: #ffffff;
}

.icon-bar {
    width: 20%;
    background-color: #555;
    overflow: auto;
    margin-top: 20px;
    margin-left: 240px;
}

.icon-bar span {
    float: left;
    width: 33%;
    text-align: center;
    padding: 12px 0;
    transition: all 0.3s ease;
}

.icon-bar span:hover {
    background-color: #000;
}
</style>



