
import Vue from 'vue';
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { enableRipple, Animation } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ListViewPlugin);


new Vue({
	el: '#app',
	template: `
<div class="layoutWrapper">
    <div class="speaker">
        <div class="camera"></div>
    </div>
    <div class="layout">
        <div id="container">
            <div id="header">
                <span id="hamburger" @click="hamburgerClick" class="e-icons menu default"></span>
                <div class="content">Header</div>
            </div>
            <!-- ListView element -->
            <ejs-listview  ref="listview" :dataSource="dataSource" headerTitle="Menu" :showHeader="true" :select="onSelect" tabindex="1" v-bind:style="{display: 'none'}" ></ejs-listview>
            <span id="close" @click="onClick" class="e-icons" v-bind:style="{display: 'none'}"></span>
        </div>
    </div>
    <div class="outerButton"> </div>
</div>
`,

   data: function() {
    return {
                 dataSource: [
    {
      text: 'Appliances',
      id: 'list1',
      child: [
        {
          text: 'Kitchen',
          id: 'list1_1',
          child: [
            { id: 'list1_1_1', text: 'Electric Cookers' },
            { id: 'list1_1_2', text: 'Coffee Makers' },
            { id: 'list1_1_3', text: 'Blenders' },
          ]
        },
        {
          text: 'Washing Machine',
          id: 'list1_2',
          child: [
            { id: 'list1_2_1', text: 'Fully Automatic' },
            { id: 'list1_2_2', text: 'Semi Automatic' }
          ]
        },
        {
          text: 'Air Conditioners',
          id: 'list1_3',
          child: [
            { id: 'list1_3_1', text: 'Inverter ACs' },
            { id: 'list1_3_2', text: 'Split ACs' },
            { id: 'list1_3_3', text: 'Window ACs' },
          ]
        }
      ]
    },
    {
      text: 'Accessories',
      id: 'list2',
      child: [
        {
          text: 'Mobile',
          id: 'list2_1',
          child: [
            { id: 'list2_1_1', text: 'Headphones' },
            { id: 'list2_1_2', text: 'Memory Cards' },
            { id: 'list2_1_3', text: 'Power Banks' }
          ]
        },
        {
          text: 'Computer',
          id: 'list2_2',
          child: [
            { id: 'list2_2_1', text: 'Pendrives' },
            { id: 'list2_2_2', text: 'External Hard Disks' },
            { id: 'list2_2_3', text: 'Monitors' }
          ]
        }
      ]
    },
    {
      text: 'Fashion',
      id: 'list3',
      child: [
        { id: 'list3_1', text: 'Men' },
        { id: 'list3_2', text: 'Women' }
      ]
    },
    {
      text: 'Home & Living',
      id: 'list4',
      child: [
        { id: 'list4_1', text: 'Furniture' },
        { id: 'list4_2', text: 'Decor' }
      ]
    },
    {
      text: 'Entertainment',
      id: 'list5',
      child: [
        { id: 'list5_1', text: 'Televisions' },
        { id: 'list5_2', text: 'Home Theatres' },
        { id: 'list5_3', text: 'Gaming Laptops' }
      ]
    }
  ]
    };
  },
  methods: {
    onSelect: function(e) {
        if (e.data && !(e.data.child)) {
            this.$refs.listview.ej2Instances.element.style.display = 'none';
            document.getElementById('close').style.display = 'none';
        }
    },

    onClick: function(e){
        this.$refs.listview.ej2Instances.element.style.display = 'none';
        document.getElementById('close').style.display = 'none';
    },

    hamburgerClick: function() {
        var element = this.$refs.listview.ej2Instances.element;
        var animation = new Animation({ duration: 500 });
        animation.animate(element, {
        name: 'SlideDown',
        begin: function(args) {
            element.style.display = 'block';
            document.getElementById('close').style.display = 'block';
        }
        });
    }
  }

});