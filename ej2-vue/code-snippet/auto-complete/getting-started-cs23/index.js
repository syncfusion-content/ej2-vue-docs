
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


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='autocomplete'>
        <ejs-autocomplete ref='instance' :footerTemplate='fTemplate' id='employees' :dataSource='data' :placeholder='waterMark' :open='onopen'></ejs-autocomplete>
     </div>
  </div>
`,

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

});