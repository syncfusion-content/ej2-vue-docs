
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple, closest } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(MenuPlugin);


new Vue({
	el: '#app',
	template: `
    <div>
        <ejs-menu :items='menuItems' :beforeOpen='onBeforeOpen'></ejs-menu>
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
                { text: 'Toolbar' },
                { text: 'Sidebar' }]
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
  },
   methods: {
        onBeforeOpen(args) {
            // Getting parent menu item element offset
            let relativeOffset = closest(args.event.target, '.e-menu-item').getBoundingClientRect();
            // Getting sub menu wrapper element using closest method
            let subMenuEle = closest(args.element, '.e-menu-wrapper');
            subMenuEle.style.display = 'block';
            args.top = (relativeOffset.top - subMenuEle.getBoundingClientRect().height) + pageYOffset;
            args.left = relativeOffset.left + pageXOffset;
            subMenuEle.style.display = '';
        }
   }

});