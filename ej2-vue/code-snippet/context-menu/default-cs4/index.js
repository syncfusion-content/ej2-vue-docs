
import Vue from 'vue';
import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ContextMenuPlugin);

;
new Vue({
	el: '#app',
	template: `
<div>
<div id="target">Right click / Touch hold to open the ContextMenu</div>
<ejs-contextmenu target='#target' :items='menuItems' :animationSettings='animationSettings'></ejs-contextmenu>
</div>
`,

    data () {
        return {
            menuItems:[
                {
                    text: 'Show All Bookmarks'
                },
                {
                    text: 'Bookmarks Toolbar',
                    items: [
                        {
                            text: 'Most Visited',
                            items:[
                                {
                                    text: 'Gmail'
                                },
                                {
                                    text: 'Google'
                                }
                            ]
                        },
                        {
                            text: 'Recently Added'
                        }
                    ]
                }],
                 animationSettings: { effect: 'FadeIn', duration: 800 }
                }
        }
    
});