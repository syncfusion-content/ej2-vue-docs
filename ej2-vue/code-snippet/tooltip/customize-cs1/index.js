
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ButtonPlugin);
import { TooltipPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(TooltipPlugin);
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(RadioButtonPlugin);


new Vue({
	el: '#app',
	template: `
   <div id='app'>
        <ejs-tooltip ref='tooltip_1' cssClass="curvetips e-tooltip-css" content="Tooltip arrow customized" target="#target">
            <ejs-tooltip mouseTrail=true :showTipPointer=false content='Disabled tooltip pointer' target='#tooltip' cssClass='pointertip e-tooltip-css'>
                <ejs-tooltip position="TopRight" content='Tooltip arrow customized as balloon tip' target='#bubbletip' cssClass='bubbletip e-tooltip-css' ref="tooltip_2">
                    <div id='container'>
                        <div id="customization" class="customTipContainer">
                            <ejs-button id="target">
                                Customized Tip Arrow
                            </ejs-button>
                            <div id="positions">
                                <ul>
                                    <li>
                                        <ejs-radiobutton id='element1' label='TopCenter' name='default' value='TopCenter' checked=true  v-on:change='onChange'/>
                                    </li>
                                    <li>
                                        <ejs-radiobutton id='element2' label='BottomLeft' name='default' value='BottomLeft' v-on:change='onChange'/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="balloon" class="customTipContainer">
                            <ejs-button id="bubbletip">
                                Bubble Tip Arrow
                            </ejs-button>
                            <div id="btn">
                                <ul>
                                    <li>
                                        <ejs-radiobutton id='radio1' label='BottomLeft' name='position' value='BottomLeft' v-on:change='onChanged'/>
                                    </li>
                                    <li>
                                        <ejs-radiobutton id='radio2' label='TopRight' name='position' value='TopRight'  checked=true v-on:change='onChanged'/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="disabledContainer" class="customTipContainer">
                            <ejs-button id="tooltip">
                                Disabled Tip Arrow
                            </ejs-button>
                        </div>
                    </div>
                </ejs-tooltip>
            </ejs-tooltip>
        </ejs-tooltip>
    </div>
`,

  data: function() {
    return {
    };
  },
  methods: {
        onChange(args) {
            this.$refs.tooltip_1.position = args.value;
            this.$refs.tooltip_1.dataBind();
        },
        onChanged(args) {
            this.$refs.tooltip_2.position = args.value;
            if(this.$refs.tooltip_2.position == 'BottomLeft'){
             this.$refs.tooltip_2.offsetY = -30;
            } else {
             this.$refs.tooltip_2.offsetY = 0;
            }
             this.$refs.tooltip_2.dataBind();
        }

  }

});