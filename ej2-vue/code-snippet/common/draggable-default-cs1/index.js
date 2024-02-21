
import { Draggable } from '@syncfusion/ej2-base';
import { createApp } from "vue";
    
createApp({
	template: `
    <div id='container'>
        <div id='element1' ref='dragElement'>
            <p>Draggable Element </p>
        </div>
    </div>
`,

        mounted: function () {

            new Draggable(this.$refs.dragElement, { clone: false });
        }
    
}).mount('#app');