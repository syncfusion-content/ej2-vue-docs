

<template>
    <div id='element'>
        <div class="sample_container">
            <div class="block" style="display:inline-block">
                <div class="e-card e-badge-showcase">
                    <div class="e-card-content">
                        <div>
                            <span class="e-badge e-badge-primary">Primary</span>
                        </div>
                    </div>
                    <div class="e-card-content">
                        <div>
                            <code>.e-badge-primary</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block" style="display:inline-block">
                <div class="e-card e-badge-showcase">
                    <div class="e-card-content">
                        <span class="e-badge e-badge-secondary">Secondary</span>
                    </div>
                    <div class="e-card-content">
                        <code>.e-badge-secondary</code>
                    </div>
                </div>
            </div>

            <div class="block" style="display:inline-block">
                <div class="e-card e-badge-showcase">
                    <div class="e-card-content">
                        <span class="e-badge e-badge-success">Success</span>
                    </div>
                    <div class="e-card-content">
                        <code>.e-badge-success</code>
                    </div>
                </div>
            </div>

            <div class="block" style="display:inline-block">
                <div class="e-card e-badge-showcase">
                    <div class="e-card-content">
                        <span class="e-badge e-badge-danger">Danger</span>
                    </div>
                    <div class="e-card-content">
                        <code>.e-badge-danger</code>
                    </div>
                </div>
            </div>

            <div class="block" style="display:inline-block">
                <div class="e-card e-badge-showcase">
                    <div class="e-card-content">
                        <span class="e-badge e-badge-warning">Warning</span>
                    </div>
                    <div class="e-card-content">
                        <code>.e-badge-warning</code>
                    </div>
                </div>
            </div>

            <div class="block" style="display:inline-block">
                <div class="e-card e-badge-showcase">
                    <div class="e-card-content">
                        <span class="e-badge e-badge-info">Info</span>
                    </div>
                    <div class="e-card-content">
                        <code>.e-badge-info</code>
                    </div>
                </div>
            </div>

            <div class="block" style="display:inline-block">
                <div class="e-card e-badge-showcase">
                    <div class="e-card-content">
                        <span class="e-badge e-badge-light">Light</span>
                    </div>
                    <div class="e-card-content">
                        <code>.e-badge-light</code>
                    </div>
                </div>
            </div>

            <div class="block" style="display:inline-block">
                <div class="e-card e-badge-showcase">
                    <div class="e-card-content">
                        <span class="e-badge e-badge-dark">Dark</span>
                    </div>
                    <div class="e-card-content">
                        <code>.e-badge-dark</code>
                    </div>
                </div>
            </div>
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
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";

    #element {
        width: 100%;
        margin: auto;
    }

    .sample_container {
        width: 800px;
        margin: auto;
    }

    .block {
        margin: 10px 10px 10px 10px;
        vertical-align: top;
    }

    .e-badge-showcase.e-card {
        width: 150px;
        height: 90px;
        padding: 5px;
        margin: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        border-radius: 8px;
    }

    .e-badge-showcase.e-card .e-card-header .e-card-header-title {
        align-self: center;
        font-size: 18px;
        letter-spacing: 1px;
        text-shadow: #eaeaea 1px 1px 2px;
    }

    .e-badge-showcase.e-card .e-card-header .e-card-sub-title {
        color: rgba(0, 0, 0, 0.75);
        white-space: pre-line;
        font-size: 14px;
        text-shadow: #eaeaea 1px 1px 2px
    }

    .e-badge-showcase.e-card .e-card-header .e-card-sub-title p {
        margin: 0;
    }

    .e-badge-showcase.e-card .e-card-content {
        align-self: center;
        padding: 0 0 10px 0;
    }

    .e-badge-showcase.e-card .e-card-content .e-badge {
        font-size: 12px;
    }


</style>



