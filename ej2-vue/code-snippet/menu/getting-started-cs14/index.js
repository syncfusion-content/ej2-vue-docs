
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(MenuPlugin);


new Vue({
	el: '#app',
	template: `
 <div id='container'>
        <div class="control-section">
            <div class="menu-section">
                <ejs-menu :items='menuItems' :beforeOpen='beforeOpen' :beforeClose='beforeClose' :onClose='onClose' :onOpen='onOpen' :select='select'></ejs-menu>
            </div>
            <div class="property-section">
                <table id="propertyTable" title="Event trace">
                    <tbody>
                        <th>Event trace:-</th>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button id='clear' @click=onClick>Clear</button>
        </div>
    </div>
`,

   data: function() {
        return {
           menuItems:  [
        {
        text: 'Events',
        items: [
            { text: 'Conferences' },
            { text: 'Music' },
            { text: 'Workshops' }
        ]
    },
    {
        text: 'Movies',
        items: [
            { text: 'Now Showing' },
            { text: 'Coming Soon' }
        ]
    },
    {
        text: 'Directory',
        items: [
            { text: 'Media Gallery' },
            { text: 'Newsletters' }
        ]
    },
    {
        text: 'Queries',
        items: [
            { text: 'Our Policy' },
            { text: 'Site Map' }
        ]
    },
    { text: 'Services' }
    ]
    };
    },
    methods: {
updateEventLog: function(args) {
    var propertyElem = document.getElementById('propertyTable');
    propertyElem.getElementsByTagName('td')[0].insertAdjacentHTML('beforeend', args.name + ' Event triggered. <br />');
},
beforeOpen: function(args) {
    this.updateEventLog(args);
},
beforeClose: function(args) {
    this.updateEventLog(args);
},
onClose: function(args) {
    this.updateEventLog(args);
},
onOpen: function(args) {
    this.updateEventLog(args);
},
select: function(args) {
    this.updateEventLog(args);
},
onClick: function(args) {
    var propertyElem = document.getElementById('propertyTable');
    propertyElem.getElementsByTagName('td')[0].innerHTML = '';
}
    }

});