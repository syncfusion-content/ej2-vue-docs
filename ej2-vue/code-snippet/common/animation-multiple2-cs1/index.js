
    import { Animation } from '@syncfusion/ej2-base';
    import Vue from "vue";
    
new Vue({
	el: '#app',
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
    
});