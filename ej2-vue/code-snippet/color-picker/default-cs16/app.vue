<template>
    <div class='wrap'>
        <h4>Choose Color</h4>
        <ejs-colorpicker locale='de-DE'></ejs-colorpicker>
    </div>
</template>

<script>

import { ColorPickerComponent } from '@syncfusion/ej2-vue-inputs';
import { enableRipple, L10n } from '@syncfusion/ej2-base';

enableRipple(true);

L10n.load({
    'de-DE': {
        'colorpicker': {
            'Apply': 'Anwenden',
            'Cancel': 'Abbrechen',
            'ModeSwitcher': 'Modus wechseln'
        }
    }
});

export default {
    name: "App",
    components: {
        "ejs-colorpicker": ColorPickerComponent,
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
    margin: 0 auto;
    width: 300px;
    text-align: center;
}
</style>