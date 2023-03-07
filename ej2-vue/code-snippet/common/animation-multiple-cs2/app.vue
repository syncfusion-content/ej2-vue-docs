


<template>
    <div>
        <p><b>Smaller Icons</b></p>
        <div class="small-icon-bar">
            <span class="e-icons e-small e-cut"></span>
            <span class="e-icons e-small e-copy"></span>
            <span class="e-icons e-small e-paste"></span>
        </div>
        <p><b>Medium Icons</b></p>
        <div class="medium-icon-bar">
            <span class="e-icons e-medium e-cut"></span>
            <span class="e-icons e-medium e-copy"></span>
            <span class="e-icons e-medium e-paste"></span>
        </div>
        <p><b>Larger Icons</b></p>
        <div class="large-icon-bar">
            <span class="e-icons e-large e-cut"></span>
            <span class="e-icons e-large e-copy"></span>
            <span class="e-icons e-large e-paste"></span>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    export default {

    }
</script>
<style>
  
.small-icon-bar {
    width: 20%;
    background-color: lightgrey;
    overflow: auto;
}

.small-icon-bar span:hover {
    background-color: #e2e2e2;
}

.small-icon-bar span {
    float: left;
    width: 33%;
    text-align: center;
    padding: 12px 0;
    transition: all 0.3s ease;
    font-size: 36px;
}

.medium-icon-bar {
    width: 20%;
    background-color: lightgrey;
    overflow: auto;
}

.medium-icon-bar span:hover {
    background-color: #e2e2e2;
}

.medium-icon-bar span {
    float: left;
    width: 33%;
    text-align: center;
    padding: 12px 0;
    transition: all 0.3s ease;
    font-size: 36px;
}

.large-icon-bar {
    width: 20%;
    background-color: lightgrey;
    overflow: auto;
}

.large-icon-bar span:hover {
    background-color: #e2e2e2;
}

.large-icon-bar span {
    float: left;
    width: 33%;
    text-align: center;
    padding: 12px 0;
    transition: all 0.3s ease;
    font-size: 36px;
}
</style>



