
    import Vue from 'vue';
    import { DiagramPlugin,PageSettings } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height'
        :pageSettings='pageSettings' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                pageSettings: {
                orientation: 'Landscape',
                showPageBreaks: true,
                // Defines the background Image source
                background: {
                    source: 'https://www.w3schools.com/images/w3schools_green.jpg',
                    // Defines the scale values for the background image
                    scale:'Meet',
                    // Defines the align values for the background image
                    align:'XMinYMin'
                },
                width: 300,
                height: 300,
                margin: {
                    left: 10,
                    top: 10,
                    bottom: 10
                    },
                }
            }
        }
    
});