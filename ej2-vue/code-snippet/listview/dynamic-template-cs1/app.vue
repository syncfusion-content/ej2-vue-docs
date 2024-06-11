<template>
  <div class="control-section">
    <div id='flat-list'>
      <!-- ListView element -->
      <ejs-listview id='List' ref='list' :dataSource='data' :fields='fields'
        :template="templatecheck ? mobtemplate : wintemplate" headerTitle='Syncfusion Blog' showHeader='true'>
      </ejs-listview>
    </div>
  </div>
</template>
<script>

import { ListViewComponent } from "@syncfusion/ej2-vue-lists";
import { Browser } from '@syncfusion/ej2-base';
import { createApp } from "vue";


var demoVue = createApp().component("demo", {
  template: `<div class="settings">
        <div id="postContainer">
            <div id="postImg">
                <img :src='data.image' /></div>
            <div id="content">
                <div id="info">
                    <div id="logo">
                        <div id="share">
                            <span class="share"></span> </div>
                        <div id="comments"> <span class="comments"></span> </div>
                        <div id="bookmark"> <span class="bookmark"></span> </div>
                    </div>
                </div>
                <div class="name">{{data.Name}}</div>
                <div class="description">{{data.content}}</div>
                <div class="timeStamp">{{data.timeStamp}} </div>
            </div>
        </div>
    </div>`,
  data() {
    return {
      data: {}
    };
  }
});
var tempVue = createApp().component("demo", {
  template: `<div class="settings">
        <div id="postContainer">
            <div id="postImg">
                <img :src='data.image' /></div>
            <div id="content">
                <div class="name">{{data.Name}}</div>
                <div class="description">{{data.content}}</div>
                <div id="info">
                    <div id="logo">
                        <div id="share">
                            <span class="share"></span> </div>
                        <div id="comments"> <span class="comments"></span> </div>
                        <div id="bookmark"> <span class="bookmark"></span> </div>
                    </div>
                    <div class="timeStamp">{{data.timeStamp}} </div>
                </div>
            </div>
        </div>
    </div>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  name: "App",
  components: {
    "ejs-listview": ListViewComponent
  },
  data: function () {
    return {
      data: [
        { Name: 'IBM Open-Sources Web Sphere Liberty Code', content: 'In September, IBM announced that it would be open-sourcing the code for WebSphere...', id: '1', image: 'https://ej2.syncfusion.com/demos/src/listview/images/1.png', timeStamp: 'Syncfusion Blog - October 19, 2017' },
        { Name: 'Must Reads: 5 Big Data E-books to upend your development', content: 'Our first e-book was published in May 2012-jQuery Succinctly was the start of over...', id: '2', image: 'https://ej2.syncfusion.com/demos/src/listview/images/2.png', timeStamp: 'Syncfusion Blog - October 18, 2017' },
        { Name: 'The Syncfusion Global License: Your Questions, Answered ', content: 'Syncfusion recently hosted a webinar to cover the ins and outs of the Syncfusion global...', id: '4', image: 'https://ej2.syncfusion.com/demos/src/listview/images/3.png', timeStamp: 'Syncfusion Blog - October 18, 2017' },
        { Name: 'Know: What is Coming from Microsoft this Fall ', content: 'On October 17, Microsoft will release its Fall Creators Update for the Windows 10 platform...', id: '5', image: 'https://ej2.syncfusion.com/demos/src/listview/images/6.png', timeStamp: 'Syncfusion Blog - October 17, 2017' }],
      fields: { text: 'Name' },
      mobtemplate: function () {
        return { template: demoVue }
      },
      wintemplate: function () {
        return { template: tempVue }
      },
      templatecheck: Browser.isDevice,
    };
  },
}
</script>
<style>
@import './template.css';
</style>