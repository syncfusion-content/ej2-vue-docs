<template>
  <div class="container" style="height: 330px;margin-top: 30px;">
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

<script setup>
import { TimelineComponent as EjsTimeline, ItemsDirective as EItems, ItemDirective as EItem } from "@syncfusion/ej2-vue-layouts";

const contents = [
  'June 2022',
  'Aug 2022',
  'Feb 2023',
  'Mar 2024'
];
const oppositeContents = [
  'Graduated \n Bachelors in Computer Engineering',
  'Software Engineering Internship \n ABC Software and Technology',
  'Associate Software Engineer \n ABC Software and Technology',
  'Software Level 1 Engineer \n XYZ Solutions'
];

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";
</style>