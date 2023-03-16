
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ButtonPlugin);
import { TooltipPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(TooltipPlugin);


new Vue({
	el: '#app',
	template: `
   <div id='app'>
       <div id='container'>
            <ejs-tooltip cssClass='e-tooltip-css' :opensOn='opensOnHover' target='#tooltiphover' :content='hoverContent'>
                <ejs-tooltip cssClass='e-tooltip-css' :opensOn='opensOnClick' target='#tooltipclick' :content='clickContent'>
                    <ejs-tooltip cssClass='e-tooltip-css' opensOn="Click" isSticky=true target='#Mode' :content='stickyContent'>
                        <ejs-tooltip cssClass='e-tooltip-css' target='#openMode' openDelay=1000 closeDelay=1000 :content='delayContent'>
                            <ejs-tooltip cssClass='e-tooltip-css' :opensOn='opensOnCustom' target='#tooltipcustom' id='custom' ref='custom' :content='customContent'>
                                <ejs-tooltip cssClass='e-tooltip-css' :opensOn='opensOnFocus' target='#focus' :content='focusContent'>
                                    <div id="showTooltip">
                                        <div id="first">
                                            <ejs-button class="blocks e-outline" isPrimary=true id="tooltiphover">Hover me!(Default)</ejs-button>
                                            <ejs-button class="blocks e-outline" isPrimary=true id="tooltipclick">Click me!</ejs-button>
                                        </div>
                                        <br/><br/>
                                        <div id="second">
                                            <ejs-button class="blocks e-outline" isPrimary=true id="Mode">Sticky Mode</ejs-button>
                                            <ejs-button class="blocks e-outline" isPrimary=true id="openMode">Tooltip with delay</ejs-button>
                                        </div>
                                        <br/><br/>
                                        <div id="third">
                                        <button class="blocks e-outline e-btn e-primary" v-on:dblclick="doubleClick" id="tooltipcustom" >Double click on me!</button>
                                            <div id="textbox" class="e-float-input blocks">
                                                <input id="focus" type="text" placeholder="Focus and blur"/>
                                            </div>
                                        </div>
                                    </div>
                                </ejs-tooltip>
                            </ejs-tooltip>
                        </ejs-tooltip>
                    </ejs-tooltip>
                </ejs-tooltip>
            </ejs-tooltip>
        </div>
    </div>
`,

  data: function() {
    return {
            position: 'BottomCenter',
            hoverContent: 'Tooltip from hover',
            stickyContent: 'Click close icon to close me',
            delayContent:  'Opens and closes Tooltip with delay of <i>1000 milliseconds</i>',
            customContent: 'Tooltip from custom mode',
            clickContent:'Tooltip from click',
            focusContent:'Tooltip from focus',
            opensOnHover: 'Hover',
            opensOnClick: 'Click',
            opensOnCustom: 'Custom',
            opensOnFocus: 'Focus',
    };
  },
  methods: {
    doubleClick(args) {
        if (args.target.getAttribute('data-tooltip-id')) {
            this.$refs.custom.close();
        } else {
            this.$refs.custom.open(args.target);
        }
    }
  }

});