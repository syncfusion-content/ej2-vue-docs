<template>
  <div id='app'>
      <div id='container'>
          <ejs-tooltip cssClass='e-tooltip-css' :opensOn='opensOnHover' target='#tooltiphover' :content='hoverContent'>
              <ejs-tooltip cssClass='e-tooltip-css' :opensOn='opensOnClick' target='#tooltipclick'
                  :content='clickContent'>
                  <ejs-tooltip cssClass='e-tooltip-css' opensOn="Click" isSticky=true target='#Mode'
                      :content='stickyContent'>
                      <ejs-tooltip cssClass='e-tooltip-css' target='#openMode' openDelay=1000 closeDelay=1000
                          :content='delayContent'>
                          <ejs-tooltip cssClass='e-tooltip-css' :opensOn='opensOnCustom' target='#tooltipcustom'
                              id='custom' ref='custom' :content='customContent'>
                              <ejs-tooltip cssClass='e-tooltip-css' :opensOn='opensOnFocus' target='#focus'
                                  :content='focusContent'>
                                  <div id="showTooltip">
                                      <div id="first">
                                          <ejs-button class="blocks e-outline" isPrimary=true id="tooltiphover">Hover
                                              me!(Default)</ejs-button>
                                          <ejs-button class="blocks e-outline" isPrimary=true id="tooltipclick">Click
                                              me!</ejs-button>
                                      </div>
                                      <br /><br />
                                      <div id="second">
                                          <ejs-button class="blocks e-outline" isPrimary=true id="Mode">Sticky
                                              Mode</ejs-button>
                                          <ejs-button class="blocks e-outline" isPrimary=true id="openMode">Tooltip with
                                              delay</ejs-button>
                                      </div>
                                      <br /><br />
                                      <div id="third">
                                          <button class="blocks e-outline e-btn e-primary" v-on:dblclick="doubleClick"
                                              id="tooltipcustom">Double click on me!</button>
                                          <div id="textbox" class="e-float-input blocks">
                                              <input id="focus" type="text" placeholder="Focus and blur" />
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
</template>
<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { TooltipComponent as EjsTooltip } from '@syncfusion/ej2-vue-popups';
import { ref } from 'vue';

const custom = ref(null);
const hoverContent = 'Tooltip from hover';
const stickyContent = 'Click close icon to close me';
const delayContent = 'Opens and closes Tooltip with delay of <i>1000 milliseconds</i>';
const customContent = 'Tooltip from custom mode';
const clickContent = 'Tooltip from click';
const focusContent = 'Tooltip from focus';
const opensOnHover = 'Hover';
const opensOnClick = 'Click';
const opensOnCustom = 'Custom';
const opensOnFocus = 'Focus';

const doubleClick = (args) => {
  if (args.target.getAttribute('data-tooltip-id')) {
      custom.value.close();
  } else {
      custom.value.open(args.target);
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#container {
  width: 100%;
}

#textbox {
  display: inline-block;
  top: -3px;
}

.blocks {
  margin: 0 10px 0 10px;
  text-transform: none;
  width: 168px;
}

#showTooltip {
  display: table;
  padding-top: 40px;
  margin: 0 auto;
}

#focus {
  border: 1px solid #ff4081;
  text-align: center;
  height: 31px;
  width: 168px;
}

::placeholder {
  color: #ff4081;
}
</style>
