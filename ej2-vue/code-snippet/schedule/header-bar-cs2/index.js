
import Vue from 'vue';
import { createElement, compile } from '@syncfusion/ej2-base';
import { Popup } from '@syncfusion/ej2-popups';
import { ItemModel } from '@syncfusion/ej2-navigations';
import { SchedulePlugin, Month } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);

new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule ref='scheduleObj' :height='height' :selectedDate='selectedData' :eventSettings='eventSettings' :views='views' :actionBegin='onActionBegin' :actionComplete='onActionComplete'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      width: '100%',
      eventSettings: { dataSource: scheduleData  },
      selectedData: new Date(2018, 1, 15),
      views: ['Month'],
      currentView: 'Month'
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
        let scheduleElement = this.$refs.scheduleObj;
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
        let templateContent = createElement('div', {
          className: 'profile-container', innerHTML: `<div class="profile-image"></div><div class="content-wrap">
                        <div class="name">Nancy</div><div class="destination">Product Manager</div><div class="status">
                        <div class="status-icon"></div>Online</div></div>` });
        this.profilePopup = new Popup(userContentEle, {
            content: templateContent,
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

});