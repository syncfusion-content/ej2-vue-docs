
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ButtonPlugin ,RadioButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(SidebarPlugin);
Vue.use(ButtonPlugin);
Vue.use(RadioButtonPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app">
    <ejs-sidebar id="default-sidebar" ref="sidebar" :type="type" :target="target" :position="position" :enablePersistence="enablePersistence">
      <div class="title"> Sidebar content</div>
       <div class="sub-title">
        Click the button to close the Sidebar.
    </div>
    <div class="center-align">
        <button ejs-button id="close" v-on:click="closeClick" class="e-btn close-btn">Close Sidebar</button>
    </div>
</ejs-sidebar>
<div id="head">
    <ejs-button id="toggle" ref="togglebtn" class="e-btn e-info"  cssClass="e-flat" iconCss="e-icons e-menu" isToggle="true" v-on:click.native="btnClick" :content ="contentValue">Open</ejs-button>
</div>
<div>
<div id="maincontent" class="content">
    <div>
        <div class="title">Main content</div>
            <div class="rows">
                <div class="row">
                  <ejs-radiobutton id="left" label='Left' name='state' checked='true' :change="positionChange"></ejs-radiobutton>
                </div>
                <div class="row">
                  <ejs-radiobutton id="right" label='Right' name='state' :change="positionChange"></ejs-radiobutton>
                </div>
            </div>
        </div>
        </div>
</div>
</div>
`,
    
    data() {
        return {
            type: 'Push',
            target: '.content',
            position: 'Left',
            enablePersistence: true,
            content: "Open",
        }
    },
    computed: {
        contentValue: {
        get: function () {
            return this.content;
        },
        set: function (content) {
            this.content = content
        }
        }
    },
    methods: {
        positionChange: function (args) {
            this.position = args.event.target.id == "left" ? "Left" : "Right";
        },
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
        }
    }
});