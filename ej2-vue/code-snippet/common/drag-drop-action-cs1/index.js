
    import { Draggable, Droppable } from '@syncfusion/ej2-base';
    import Vue from "vue";
    
new Vue({
	el: '#app',
	template: `
    <div id='container'>
        <div id='droppable'>
            <p class='drop'><span>Drag Area </span></p>
        </div>
        <div id='element1'>
            <p class='drag-text'>Drag </p>
        </div>

    </div>
`,

        mounted: function () {
            var draggable = new Draggable(document.getElementById('element1'), {
                clone: false, dragArea: "#droppable"
            });
        }
    
});