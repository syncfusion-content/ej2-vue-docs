import { Animation } from '@syncfusion/ej2-base';
import { createApp } from "vue";
    
createApp({
	template: `
     <div id='container'>
        <div id='element1'></div>
        <div id='element2'></div>
    </div>
`,

        mounted: function () {
            var animation = new Animation({ delay: 2000, duration: 5000 });
            animation.animate('#element1', { name: 'FadeOut' });
            animation.animate('#element2', { name: 'ZoomOut' });
        }
    
}).mount('#app');