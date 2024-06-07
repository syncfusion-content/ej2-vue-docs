<template>
    <div>
        <ul id="skeleton-list" class="e-card">
            <li>
                <div class='listProfile'>
                    <ejs-skeleton shape="Circle" width="40px" shimmerEffect='Pulse'></ejs-skeleton>
                </div>
                <div>
                    <ejs-skeleton width="60%" height='15px' shimmerEffect='Pulse'></ejs-skeleton><br>
                    <ejs-skeleton width="40%" height='15px' shimmerEffect='Pulse'></ejs-skeleton>
                </div>
            </li>
            <li>
                <div class='listProfile'>
                    <ejs-skeleton shape="Circle" width="40px" shimmerEffect='Pulse'></ejs-skeleton>
                </div>
                <div>
                    <ejs-skeleton width="60%" height='15px' shimmerEffect='Pulse'></ejs-skeleton><br>
                    <ejs-skeleton width="40%" height='15px' shimmerEffect='Pulse'></ejs-skeleton>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
    
import { SkeletonComponent as EjsSkeleton} from "@syncfusion/ej2-vue-notifications";

</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";

    #skeleton-list {
    padding-left: 12px;
    padding-top: 7px;
    line-height: inherit;
    }
    #skeleton-list li {
        list-style: none;
        display: flow-root;
        margin-bottom: 9px;
    }
    .listProfile {
        float: left;
        margin-right: 15px;
    }

</style>