<template>
    <div class="container">
        <div id="targetElement" class="content-area">
            <h2>Floating Action Button Click event</h2>
            <p class="log-label">Action Log:</p>
            <div class="log-output">{{ logMessage }}</div>

            <ejs-fab
                id="fab"
                iconCss="e-icons e-edit"
                content="Edit"
                v-on:click="onClick"
                target="#targetElement"
            />
        </div>
    </div>
</template>

<script setup>
import { FabComponent as EjsFab } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const logMessage: 'No actions yet...',
const onClick = function () {
    logMessage = `Edit clicked at ${new Date().toLocaleTimeString()}`;
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

    .container {
    display: flex;
    justify-content: center;
    padding: 40px;
    }

    .content-area {
    position: relative;
    width: 400px;
    min-height: 300px;
    padding: 24px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #fafafa;
    }

    h2 {
    margin: 0 0 16px;
    color: #333;
    }

    .log-label {
    margin: 0 0 8px;
    font-size: 14px;
    color: #666;
    }

    .log-output {
    padding: 12px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: monospace;
    color: #2196f3;
    }
</style>