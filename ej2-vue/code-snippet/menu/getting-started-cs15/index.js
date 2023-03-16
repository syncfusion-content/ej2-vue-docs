
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(MenuPlugin);


new Vue({
	el: '#app',
	template: `
    <div>
        <ejs-menu :items='menuItems' showItemOnClick = "true"></ejs-menu>
    </div>
`,

  data: function() {
    return {
        // Menu items definition
        menuItems: [
        {
            text: 'File',
            items: [
                { text: 'Open' },
                { text: 'Save' },
                { text: 'Exit' }]
        },
        {
            text: 'Edit',
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }]
        },
        {
             text: 'View',
             items: [
                 {
                 text: 'Toolbars',
                 items: [
                     { text: 'Menu Bar' },
                     { text: 'Bookmarks Toolbar' },
                     { text: 'Customize' },
                   ]
                 },
                {
                 text: 'Zoom',
                 items: [
                     { text: 'Zoom In' },
                     { text: 'Zoom Out' },
                     { text: 'Reset' },
                    ]
                },
                { text: 'Full Screen' }
            ]
        },
        {
            text: 'Tools',
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { text: 'Options' }]
        },
        { text: 'Go' },
        { text: 'Help' }
    ]
    };
  }

});