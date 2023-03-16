
import Vue from 'vue';
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
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

Vue.use(ColorPickerPlugin);


new Vue({
	el: '#app',
	template: `
<div class='wrap'>
    <h4>Choose Color</h4>
    <ejs-colorpicker locale='de-DE'></ejs-colorpicker>
</div>
`,

});