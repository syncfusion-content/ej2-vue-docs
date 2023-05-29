
    import { Draggable } from '@syncfusion/ej2-base';
    import Vue from "vue";
    
new Vue({
	el: '#app',
	template: `
    <div id='container'>
        <div id='element1'>
            <p>Draggable Element </p>
        </div>
    </div>
`,

        mounted: function () {

            var dragElement = document.getElementById('element1');
            var draggable = new Draggable(dragElement, { clone: true });
        }
    
});