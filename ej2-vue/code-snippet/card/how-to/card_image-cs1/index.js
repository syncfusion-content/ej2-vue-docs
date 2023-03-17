
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
       <div>
            <div class="e-card">
                <div class="e-card-image">
                    <div class="e-card-title">Node.js</div>
                </div>
                <div class="e-card-content">
                    Node.js is a wildly popular platform for writing web applications that has revolutionized web development in many ways, enjoying
                    support across the open source community as well as industry.
                </div>
        </div>
    </div>
    <div style="Margin: 5px 0;width:300px">
      <ejs-dropdownlist id='title_position' :dataSource='dropData' placeholder="Select Position" :change="changed"></ejs-combobox>
    </div>
  </div>
`,

  name: 'app',
data: function() {
    return {
      dropData: ['BottomLeft', 'TopLeft', 'TopRight', 'BottomRight'];
    };

  }, methods:{

 changed: function(e) {

    var cardEle = document.querySelector('.e-card');
    var titleEle = cardEle.querySelector('.e-card-image .e-card-title');
    titleEle.className = ''
    titleEle.classList.add('e-card-title');
    titleEle.classList.add(e.value.toLowerCase());
}

  }

});