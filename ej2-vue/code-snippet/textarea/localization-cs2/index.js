
import Vue from 'vue';
import { TextAreaPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextAreaPlugin);

// Load culture for textarea
L10n.load({
    'de-DE': {
        'textarea': {'placeholder': "Geben Sie Ihre Kommentare ein"}
    }
});

new Vue({
	el: '#app',
	template: `
    <div class ='wrap'>
        <div id ='input-container'>
        <ejs-textarea id='default' floatLabelType="Auto" locale="de-DE"></ejs-textarea>
        </div>
    </div>
`,

   data: function() {
        return { }
    }

});