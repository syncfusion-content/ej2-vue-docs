<template>
  <div class="control-section">
    <div class="grid-container"><div><h3>Chat</h3>
    <!-- ListView element -->
    <ejs-listview id='List' ref='list' :dataSource='visibleData' cssClass='e-list-template' :template='template' width='400px' height='320px' :scroll="onListScrolled"></ejs-listview>
    </div>
    </div>
  </div>
</template>
<style>

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    align-items: center;
  }
  
  h3 {
    margin: 0;
  }
  
  /* Optional: Add styling to headings and divs */
  .grid-container > div {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    background-color: #f4f4f4;
  }

@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-lists/styles/material.css";

</style>
<script>
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
Vue.use(ListViewPlugin);
var demoVue = Vue.component("App", {
  template:
    `<div :style="{ display: 'flex', justifyContent: getJustifyContentStyle(data.positionClass) }" class="e-list-wrapper e-list-multi-line">
        <span style="display: block; white-space: normal; max-width: 80%; padding: 10px; background-color: #e0e0e0; border-radius: 10px; word-wrap: break-word;" class="e-list-item-header">
          {{ data.text }}
        </span>
      </div>`,
  data() {
    return {
      data: {}
    };
  },
  methods:{
    getJustifyContentStyle(positionClass) {
      return positionClass === "right" ? "flex-end" : "";
    },
  }
});

export default {
  data: function() {
    return {
      data: [
  {
    text: "Hi Guys, Good morning! \uD83D\uDE0A, I'm very delighted to share with you the news that our team is going to launch a new mobile application",
    positionClass: 'right',
  },
  {
    text: "Oh! That's great \uD83D\uDE42",
    positionClass: 'left',
  },
  {
    text: 'That is a good news \uD83D\uDE00',
    positionClass: 'right',
  },
  {
    text: 'What kind of application we are gonna launch? \uD83E\uDD14',
    positionClass: 'left',
  },
  {
    text: 'A kind of "Emergency Broadcast App" like being able to just invite someone to teams without it impacting how many people have official access',
    positionClass: 'right',
  },
  {
    text: 'Who will be the client users for our applications? ',
    positionClass: 'left',
  },
  {
    text: 'Is currently the only way to invite someone through 0365? Just wondering down the road how organization would want to handle that with freelancers, like being able to just invite someone to teams without it impacting how many people have official access \uD83D\uDE14',
    positionClass: 'right',
  },
  {
    text: 'Yes, however, that feature of inviting someone from outside your organization is planned - expected closer to GA next year \uD83D\uDC4D',
    positionClass: 'left',
  },
  {
    text: 'I guess we should switch things over to hear for a while. How long does the trial last? \uD83E\uDD14',
    positionClass: 'right',
  },
  { text: 'I think the trial is 30 days. \uD83D\uDE03', positionClass: 'left' },
  {
    text: 'Only 0365 only members of your organization. They said that they are listening to customer feedback and hinted that guest users would be brought in down the road \uD83D\uDE09',
    positionClass: 'right',
  },
  { text: 'Cool thanks! \uD83D\uDC4C', positionClass: 'left' },
],
      visibleData: [],
      remainingData: [],
  template: function () {
              return { template : demoVue};
          }
  };
  },
  watch: {
    data: {
      handler(newVal) {
        this.visibleData = newVal.slice(0, 5);
        this.remainingData = newVal.slice(5);
      },
      immediate: true,
    },
  },
  methods:{
     onListScrolled: function (args) {
      if (args.scrollDirection === "Bottom" && args.distanceY < 100) {
        const additionalItems = this.remainingData.slice(0, 5);
        this.visibleData = this.visibleData.concat(additionalItems);
        this.remainingData = this.remainingData.slice(5);
      }    
    }
  }
}
</script>
