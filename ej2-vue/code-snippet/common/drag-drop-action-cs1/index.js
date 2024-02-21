
import { Draggable } from '@syncfusion/ej2-base';
import { createApp } from "vue";

createApp({
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
            new Draggable(document.getElementById('element1'), {
                clone: false, dragArea: "#droppable"
            });
        }
    
}).mount('#app');