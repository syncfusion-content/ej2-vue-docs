<template>
    <div>
        <div id="target" class="control-section; position:relative" style="height:350px;">
            <!-- Render Button to open the Dialog -->
            <ejs-button id='modalbtn' v-on:click="btnClick">Open</ejs-button>
            <!-- Render Dialog -->
            <ejs-dialog ref="localeDialog" :header='header' :target='target' :width='width' :locale='locale'
                :showCloseIcon='true' :animationSettings='animationSettings' :content='content' :open="dlgOpen"
                :close="dlgClose">
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>

import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { L10n } from '@syncfusion/ej2-base';
import { onMounted, ref } from 'vue';

const localeDialog = ref(null);

L10n.load({
    'fr-BE': {
        'dialog': {
            'close': "Fermer"
        }
    }
});

const target = '#target';
const width = '335px';
const header = 'Dialogue';
const content = 'Dialogue avec la culture française.';
const animationSettings = { effect: 'None' };
const locale = 'fr-BE';

onMounted(() => {
    document.getElementById('modalbtn').focus();
});

const btnClick = () => {
    localeDialog.value.show();
};
const dlgClose = () => {
    document.getElementById('modalbtn').style.display = '';
};
const dlgOpen = () => {
    document.getElementById('modalbtn').style.display = 'none';
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

.control-section {
    height: 100%;
    min-height: 200px;
}
</style>