
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(MenuPlugin);


new Vue({
    el: '#app',
    template: `
    <div>
        <ejs-menu :items='menuItems'></ejs-menu>
    </div>
`,

    data: function () {
        return {
            // Menu items definition
            menuItems: [
                {
                    text: 'Home',
                    htmlAttributes: {
                        role: 'menuitem',
                        'aria-label': 'Home',
                        tabindex: '1'
                    }
                },
                {
                    text: 'Book Categories',
                    items: [
                        {
                            text: 'Cookbooks',
                            htmlAttributes: {
                                role: 'menuitem',
                                'aria-label': 'Cookbooks',
                                tabindex: '1'
                            }
                        },
                        {
                            text: 'Children',
                            htmlAttributes: {
                                role: 'menuitem',
                                'aria-label': 'Children',
                                tabindex: '1'
                            }
                        }
                    ],
                    htmlAttributes: {
                        role: 'menuitem',
                        'aria-label': 'Book Categories',
                        tabindex: '1'
                    }
                },
                {
                    text: 'Purchase',
                    htmlAttributes: {
                        role: 'menuitem',
                        'aria-label': 'Purchase',
                        tabindex: '1'
                    }
                },
                {
                    text: 'Contact Us',
                    htmlAttributes: {
                        role: 'menuitem',
                        'aria-label': 'Contact Us',
                        tabindex: '1'
                    }
                },
                {
                    separator: true
                },
                {
                    text: 'Login',
                    id: 'login',
                    htmlAttributes: {
                        role: 'menuitem',
                        'aria-label': 'Login',
                        tabindex: '1'
                    }
                }
            ]
        };
    }

});