<template>
  <div class="container" style="height: 350px">
    <ejs-timeline id="timeline" align="Before" :reverse="true">
      <e-items>
        <e-item :content='contents[0]' :oppositeContent='oppositeContents[0]' />
        <e-item :content='contents[1]' :oppositeContent='oppositeContents[1]' />
        <e-item :content='contents[2]' :oppositeContent='oppositeContents[2]' />
        <e-item :content='contents[3]' :oppositeContent='oppositeContents[3]' />
      </e-items>
    </ejs-timeline>
  </div>
</template>

<script>
import { TimelineComponent, ItemsDirective, ItemDirective } from "@syncfusion/ej2-vue-layouts";
export default {
  components: {
    'ejs-timeline': TimelineComponent,
    'e-items': ItemsDirective,
    'e-item': ItemDirective
  },
  data() {
    return {
      contents: [
        'June 2022',
        'Aug 2022',
        'Feb 2023',
        'Mar 2024'
      ],
      oppositeContents: [
        'Graduated \n Bachelors in Computer Engineering',
        'Software Engineering Internship \n ABC Software and Technology',
        'Associate Software Engineer \n ABC Software and Technology',
        'Software Level 1 Engineer \n XYZ Solutions'
      ]
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
</style>
