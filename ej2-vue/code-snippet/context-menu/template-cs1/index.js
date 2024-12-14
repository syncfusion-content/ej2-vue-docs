import Vue from 'vue';
import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ContextMenuPlugin);

new Vue({
  el: '#app',
  template: `
        <div class="control-section">
        <div class="contextmenu-control">
            <div id='contextmenutarget'></div>
            <ejs-contextmenu cssClass="e-contextMenu-template" id="contextmenu" ref="contextMenu" target="#contextmenutarget" :items="data" :itemTemplate="'itemTemplate'" :beforeOpen="addtemplateClass" >
                <template v-slot:itemTemplate="{ data }">
                    <div class="menu-wrapper">
                        <span :class="data.iconCss + ' icon-right'"></span>
                        <div class="text-content">
                            <span class="text">{{ data.answerType }}</span>
                            <span class="description">{{ data.description }}</span>
                        </div>
                    </div>
                </template>
            </ejs-contextmenu>
        </div>
        <div id="action-description">
        <p>This sample demonstrates the template support functionalities of the ContextMenu. You can customize the menu items using templates to enhance flexibility and integrate custom content.</p>
    </div>
  `,
  data() {
    return {
      data: [
        {
            answerType: 'Selection',
            description: "Choose from options",
            iconCss: 'e-icons e-list-unordered'
        },
        {
            answerType: 'Yes / No',
            description: "Select Yes or No",
            iconCss: 'e-icons e-check-box',
        },
        {
            answerType: 'Text',
            description: "Type own answer",
            iconCss: 'e-icons e-caption',
            items: [
                {
                    answerType: 'Single line',
                    description: "Type answer in a single line",
                    iconCss: 'e-icons e-text-form'
                },
                {
                    answerType: 'Multiple line',
                    description: "Type answer in multiple lines",
                    iconCss: 'e-icons e-text-wrap',
                }
            ]
        },
        {
            answerType: 'None',
            iconCss: 'e-icons e-mouse-pointer',
            description: "No answer required"
        },
    ]
    };
  },
  methods: {
    addtemplateClass: function(args) {
      if (args.element.classList.contains('e-ul')) {
          args.element.classList.add('e-contextMenu-template')
      }
    }
  },
  mounted: function() {
      var menuObj = this.$refs.contextMenu.ej2Instances;
      if (window.browserDetails.isDevice) {
        document.getElementById("contextmenutarget").textContent =
          "Touch hold to open the Context Menu and select the answer type";
        menuObj.animationSettings.effect = "ZoomIn";
      } else {
        document.getElementById("contextmenutarget").textContent =
          "Right click/Touch hold to open the Context Menu and select the answer type";
        menuObj.animationSettings.effect = "SlideDown";
      }
  }
});