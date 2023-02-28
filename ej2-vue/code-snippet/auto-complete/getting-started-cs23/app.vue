

<template>
    <div id="app">
      <div class='autocomplete'>
        <ejs-autocomplete ref='instance' :footerTemplate='fTemplate' id='employees' :dataSource='data' :placeholder='waterMark' :open='onopen'></ejs-autocomplete>
     </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(AutoCompletePlugin);

var footVue = Vue.component("footerTemplate", {
  template: `<span class='foot'></span>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  name: 'app',
  mounted() {
    document.getElementsByClassName('e-autocomplete')[0].addEventListener('keyup', (e) => {
      this.onopen();
    })
  },
   data () {
    return {
            waterMark: 'Find a game',
            sortOrder: 'Ascending',
            data: ['Badminton', 'Basketball', 'Cricket',
                'Football', 'Golf', 'Gymnastics',
                'Hockey', 'Rugby', 'Snooker', 'Tennis'
            ],
            fTemplate: function(e) {
                return {
                    template: footVue
                };
            },
    }
  },
  methods: {
    onopen: function() {
      var count = this.$refs.instance.getItems().length;
      var ele = document.getElementsByClassName('foot')[0];
      ele.innerHTML =  "Total list item: " + count;
    }
  }
}
</script>
<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  #app {
      color: #008cff;
      height: 40px;
      position: absolute;
      width: 90%;
      top: 10%;
    }

  .autocomplete {
    width: 30%;
    margin: 0 auto;
  }

  .foot {
    text-indent: 1.2em;
    display: block;
    font-size: 15px;
    line-height: 40px;
    border-top: 1px solid #e0e0e0;
  }
</style>


