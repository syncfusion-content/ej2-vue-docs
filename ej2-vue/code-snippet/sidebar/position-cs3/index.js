
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ButtonPlugin,RadioButtonPlugin} from '@syncfusion/ej2-vue-buttons';

Vue.use(SidebarPlugin);
Vue.use(ButtonPlugin);
Vue.use(RadioButtonPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
<ejs-sidebar id="default-sidebar" ref="sidebar" :type="type" :target="target">
    <div class="title"> Sidebar content</div>
    <div class="sub-title">
        Click the button to close the Sidebar.
    </div>
    <div class="center-align">
        <button ejs-button id="close" v-on:click="closeClick" class="e-btn close-btn">Close Sidebar</button>
    </div>
</ejs-sidebar>
<div id="head">
    <ejs-button id="toggle" ref="togglebtn"  cssClass="e-flat" iconCss="e-icons e-menu" isToggle="true" v-on:click.native="btnClick" :content ="contentValue">Open</ejs-button>
</div>
<div>
<div id="maincontent" class="content">
    <div>
        <div class="title">Main content</div>
        <div class="rows">
            <div class="row">
                <ejs-radiobutton id='push' label="Push" name="type"  :change="changeHandler" ></ejs-radiobutton>
            </div>
            <div class="row">
                <ejs-radiobutton id='slide'  label="Slide" name="type" :change="changeHandler"></ejs-radiobutton>
            </div>
            <div class="row">
                <ejs-radiobutton id='over'  label="Over" name="type"  :change="changeHandler"></ejs-radiobutton>
            </div>
            <div class="row">
                <ejs-radiobutton id='auto'  label="Auto" name="type" checked="true" :change="changeHandler"></ejs-radiobutton>
            </div>
        </div>
    </div>
</div>
</div>
</div>
`,

    data () {
        return {
         type :'Push',
         target : '.content',
         content: "Open",
        }
    },
    methods: {
        btnClick: function () {
            if (this.$refs.togglebtn.$el.classList.contains('e-active')) {
                this.contentValue='Open';
                this.$refs.sidebar.hide();
            }
            else {
                this.contentValue='Close';
                this.$refs.sidebar.show();
            }
        },
        closeClick: function () {
            this.$refs.sidebar.hide();
            this.$refs.togglebtn.$el.classList.remove('e-active');
            this.contentValue='Open';
        },
        changeHandler:  function(args) {
            if(args.event.target.id == 'over') {
                this.type = 'Over';
                this.dataBind();
            } else if (args.event.target.id == 'push') {
                this.type = 'Push';
                this.dataBind();
            } else if (args.event.target.id == 'slide') {
                this.type = 'Slide';
                this.dataBind();
            } else {
                this.type = 'Auto';
                this.dataBind();
            }
        }
    }    
});