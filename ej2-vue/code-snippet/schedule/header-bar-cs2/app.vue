

<template>
  <div id='app'>
    <div id='container'>
        <ejs-schedule id='Schedule' :height='height' :selectedDate='selectedData' :eventSettings='eventSettings' :views='views' :actionBegin='onActionBegin' :actionComplete='onActionComplete'></ejs-schedule>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { createElement, compile } from '@syncfusion/ej2-base';
import { Popup } from '@syncfusion/ej2-popups';
import { ItemModel } from '@syncfusion/ej2-navigations';
import { SchedulePlugin, Month } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);

var headerTemplateVue = Vue.component('header-template', {
    template: `<div class="profile-container"><div class="profile-image"></div><div class="content-wrap">
        '<div class="name">Nancy</div><div class="destination">Product Manager</div><div class="status"><div class="status-icon"></div>Online</div></div></div>`,
    data() {
        return {
            data: {}
        };
    }
});

export default {
  data (){
    return {
      height: '550px',
      width: '100%',
      eventSettings: { dataSource: scheduleData  },
      selectedData: new Date(2018, 1, 15),
      views: ['Month'],
      currentView: 'Month',
      headerTemplate: function () {
        return { template: headerTemplateVue }
      },
    }
  },
  methods: {
      onActionBegin: function(args) {
        if (args.requestType === 'toolbarItemRendering') {
            let userIconItem = {
                align: 'Right', prefixIcon: 'user-icon', text: 'Nancy', cssClass: 'e-schedule-user-icon'
            };
            args.items.push(userIconItem);
        }
      },
      onActionComplete: function(args) {
        let scheduleElement = document.getElementById('Schedule');
        if (args.requestType === 'toolBarItemRendered') {
            let userIconEle = scheduleElement.querySelector('.e-schedule-user-icon');
            userIconEle.onclick = () => {
                this.profilePopup.relateTo = userIconEle;
                this.profilePopup.dataBind();
                if (this.profilePopup.element.classList.contains('e-popup-close')) {
                    this.profilePopup.show();
                } else {
                    this.profilePopup.hide();
                }
            };
        }
        let userContentEle = createElement('div', {
            className: 'e-profile-wrapper'
        });
        scheduleElement.parentElement.appendChild(userContentEle);
        let userIconEle = scheduleElement.querySelector('.e-schedule-user-icon');
        let getDOMString = compile(this.headerTemplate);
        let output = getDOMString({});
        this.profilePopup = new Popup(userContentEle, {
            content: output[0],
            relateTo: userIconEle,
            position: { X: 'left', Y: 'bottom' },
            collision: { X: 'flip', Y: 'flip' },
            targetType: 'relative',
            viewPortElement: scheduleElement,
            width: 210,
            height: 80
        });
        this.profilePopup.hide();
      }
  },
  provide: {
    schedule: [Month]
  }
}
</script>
<style>
  @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";

.e-schedule .e-schedule-toolbar .user-icon,
.e-profile-wrapper .profile-image {
  background-image: url('https://ej2.syncfusion.com/demos/src/schedule/images/nancy.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
}

/* csslint ignore:start */
.e-schedule .e-schedule-toolbar .user-icon {
  height: 24px;
  min-width: 24px !important;
  width: 24px !important;
}
/* csslint ignore:end */

.e-schedule .e-schedule-toolbar .e-toolbar-items .e-schedule-user-icon .e-tbar-btn:hover {
  background-color: inherit;
}

.e-schedule .e-schedule-toolbar .e-toolbar-items .e-schedule-user-icon .e-tbar-btn-text {
  display: none;
}

/* csslint ignore:start */
.e-schedule .e-schedule-toolbar .e-toolbar-pop .e-schedule-user-icon .e-tbar-btn-text {
  padding-left: 8px !important;
}
/* csslint ignore:end */

.e-profile-wrapper {
  width: 210px;
  height: 80px;
  background-color: #fafafa;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.e-profile-wrapper .profile-container {
  display: flex;
  padding: 10px;
}

.e-profile-wrapper .profile-image {
  box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0, 0, 0, 0.2);
  width: 60px;
  height: 60px;
}

.e-profile-wrapper .content-wrap {
  padding-left: 10px;
}

.e-profile-wrapper .name {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  margin-top: 2px;
}

.e-profile-wrapper .destination {
  font-size: 12px;
}

.e-profile-wrapper .status-icon {
  height: 6px;
  width: 6px;
  background: green;
  border-radius: 100%;
  float: left;
  margin-right: 4px;
  margin-top: 4px;
 }

 .e-profile-wrapper .status {
  font-size: 11px;
 }
</style>


