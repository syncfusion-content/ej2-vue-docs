import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
import { DropDownButton } from '@syncfusion/ej2-vue-splitbuttons';

Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :headerToolbar="headerToolbar" :created="onCreated">
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?"></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete."></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today."></e-message>
      </e-messages>
    </ejs-chatui>
  </div>

`,

  data () {
    return {
      currentUser: {
        id: "user1",
        user: "Albert",
      },
      michaleUser: {
        id: "user2",
        user: "Michale Suyama",
      },
      headerToolbar: {
        items: [
          { type: 'Input', align: 'Right', template: '#dropdownTemplate' }
        ]
      },
      dropdownItems: [
        { text: 'Info' },
        { text: 'Search' },
        { text: 'Add to list' },
        { text: 'Mute' }
      ]
    }
  },
  methods: {
    onCreated() {
      new DropDownButton({
        items: this.dropdownItems,
        iconCss: 'e-icons e-menu',
        cssClass: 'custom-dropdown',
        content: 'Menu'
      }, '#ddMenu');
    }
  }

});