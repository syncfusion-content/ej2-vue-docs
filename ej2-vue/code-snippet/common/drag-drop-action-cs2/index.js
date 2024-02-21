
import { Draggable, Droppable } from '@syncfusion/ej2-base';
import { createApp } from "vue";

createApp({
	template: `
    <div id='container'>
        <div id='droppable'>
            <p class='drop'><span>Drop Target </span></p>
        </div>
        <div id='element1'>
            <p class='drag-text' ref='dragText'>Drag </p>
        </div>

    </div>
`,

        mounted: function () {
            var draggable = new Draggable(document.getElementById('element1'), {
                clone: false
            });
            var droppable = new Droppable(document.getElementById('droppable'), {
                drop: (e) => {
                    this.$refs.dragText.textContent = 'Dropped';
                }
            });
        }
    
}).mount('#app');