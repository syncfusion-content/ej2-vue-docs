<template>
    <div id="app">
        <div style="margin: 50px;">
            <div class="e-card" style="max-width:400px">
                <div class="e-card-header-title">Eiffel Tower</div>
                <div class="e-card-content">
                    The Eiffel Tower is acknowledged as the universal symbol of Paris and France.
                </div>
                <div class="e-card-actions">
                    <button class="e-card-btn">
                        <img src="./fav.png" style="height: 18px;width: 18px;" title="Bookmark">
                    </button>
                    <button class="e-card-btn">
                        <img src="./like.png" style="height: 18px;width: 18px;" title="Like">
                    </button>
                    <button class="e-card-btn">
                        <img src="./share.png" style="height: 18px;width: 18px;" title="Share">
                    </button>
                </div>
            </div>
        </div>
        <div style="margin-left: 50px;">
            <div class="e-card" style="max-width:400px">
                <div class="e-card-header-title">Eiffel Tower</div>
                <div class="e-card-content">
                    The Eiffel Tower is acknowledged as the universal symbol of Paris and France.
                </div>
                <div class="e-card-actions e-card-vertical">
                    <button class="e-card-btn">LIKE</button>
                    <button class="e-card-btn">SHARE</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css';

#container {
    visibility: hidden;
}

#loader {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

.e-card {
    width: 300px
}
</style>