
import Vue from 'vue';
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
import { enableRipple, L10n } from '@syncfusion/ej2-base';

enableRipple(true);

L10n.load({
    'ar-AE': {
        'colorpicker': {
            'Apply': 'تطبيق',
            'Cancel': 'إلغاء',
            'ModeSwitcher': 'مفتاح كهربائي الوضع'
        }
    }
});

Vue.use(ColorPickerPlugin);


new Vue({
	el: '#app',
	template: `
<div class='wrap'>
    <h4>Choose Color</h4>
    <ejs-colorpicker :enableRtl="true" locale='ar-AE'></ejs-colorpicker>
</div>
`,

});