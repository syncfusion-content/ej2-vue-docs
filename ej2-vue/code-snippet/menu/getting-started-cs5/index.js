
import Vue from "vue";
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(MenuPlugin);


new Vue({
	el: '#app',
	template: `
    <div class="template-menu-control">
        <ejs-menu :items="data" :fields="menuFields" :template="menuTemplate"></ejs-menu>
    </div>
`,

  data: function() {
    var menutemplateVue = Vue.component("demo", {
    template: '  <span v-if="data.category"> {{data.category}} </span>'+
    ' <div v-else-if="data.value" style="width: 100%;display: flex;justify-content: space-between;">'+
     '<img v-if="data.url" class="e-avatar e-avatar-small" v-bind:style="image" />' +
       '<span style="width:100%;">{{data.value}}</span></div>' +
    '<span class="e-menu-template" v-else-if="data.support">'+
        '<ul>'+
        '<li v-bind:key="index" v-for="(val,index) of data.support">'+
        ' {{val.value}} ' +
            '<span v-if="val.count" class="e-badge e-badge-success">{{val.count}}</span> '+
        ' </li> '+
        '</ul>'+
    '</span>'+
    '<div tabindex="0" class="e-card" v-else>'+
        '<div class="e-card-header">'+
            '<div class="e-card-header-caption">'+
                '<div class="e-card-header-title">About Us</div>'+
            '</div>'+
        '</div>'+
        '<div class="e-card-content">{{data.about.value}} </div>'+
        '<div class="e-card-actions">'+
            '<button class="e-btn e-outline">Read More </button>'+
        '</div>'+
    '</div>',
    data() {
        return {
        data: {}
        }
    },
    computed: {
        image: function() {
        return 'background-image: url(https://ej2.syncfusion.com/react/demos/src/menu/images/' + this.data.url + '.png);';
        }
    }
    });

    return {
        data: [
            {
                category: 'Products',
                options: [
                    { value: 'JavaScript', url: 'javascript' },
                    { value: 'Angular', url: 'angular' },
                    { value: 'ASP.NET Core', url: 'core' },
                    { value: 'ASP.NET MVC', url: 'mvc' }
                ]
            },
            {
                category: 'Services',
                options: [
                    {
                        support: [
                            { value: 'Application Development', count: '1200+' },
                            { value: 'Maintenance & Support', count: '3700+' },
                            { value: 'Quality Assurance' },
                            { value: 'Cloud Integration', count: '900+' }
                        ]
                    }
                ]
            },
            {
                category: 'About Us',
                options: [
                    {
                        about: {
                            value: "We are on a mission to provide world-class best software solutions for web, mobile and desktop platforms. Around 900+ applications are desgined and delivered to our customers to make digital & strengthen their businesses."
                        }
                    }
                ]
            },
            { category: 'Careers' },
            { category: 'Sign In' }
        ],
        menuFields: {
            text: ['category', 'value'],
            children: ['options']
        },
        menuTemplate: function () {
            return {
                template : menutemplateVue
            }
        }
    };
  }

});