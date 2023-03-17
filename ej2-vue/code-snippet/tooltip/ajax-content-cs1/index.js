
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { Ajax } from '@syncfusion/ej2-base';
Vue.use(TooltipPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <ejs-tooltip style="display:block;" class="e-prevent-select" :content='content' target='.target' position='RightCenter' :beforeRender='onBeforeRender'>
      <div id='container'>
        <h4>National Sports</h4>
        <div id="targetContainer" class="e-prevent-select">
            <div id="countrylist">
                <ul>
                    <li class="target" title="1"><span>Australia</span></li>
                    <li class="target" title="2"><span>Bhutan</span></li>
                    <li class="target" title="3"><span>China</span></li>
                    <li class="target" title="4"><span>Cuba</span></li>
                    <li class="target" title="5"><span>India</span></li>
                    <li class="target" title="6"><span>Switzerland</span></li>
                    <li class="target" title="7"><span>United States</span></li>
                </ul>
            </div>
        </div>
      </div>
    </ejs-tooltip>
  </div>
`,

  data: function() {
    return {
      content : "Loading..",
    };
  },
  methods: {
       onBeforeRender: function(args){
  let ajax: Ajax = new Ajax('./tooltipdata.json', 'GET', true);
    ajax.send().then((result)  =>  {
        result = JSON.parse(result);
            for (var i = 0; i < result.length; i++) {
                 if (result[i].Id === args.target.getAttribute('data-content')) {
                    /* tslint:disable */
                    this.content = "<div class='contentWrap'><div class='def'>" + result[i].Sports + "</div></div>";
                    /* tslint:enable */
                }
                //  this.dataBind();
            }
        }, (reason) => {
            this.content = reason;
            //  this.dataBind();
        });
       }
   }

});