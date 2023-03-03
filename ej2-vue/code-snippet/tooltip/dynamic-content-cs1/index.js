
import Vue from 'vue';
import { Ajax } from '@syncfusion/ej2-base';
import { TooltipPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(TooltipPlugin);


new Vue({
	el: '#app',
	template: `
   <div id='app'>
      <h2> Dynamic Tooltip content </h2>
      <ejs-tooltip id="box" ref='box' class="e-prevent-select" content='Loading...' target='.circletool' showTipPointer=false v-on:beforeRender='onBeforeRender'>
            <div id="1" class="circletool bold-01" style="display:inline-block"  ></div>
            <div id="2" class="circletool italic" style="display:inline-block" ></div>
            <div id="3" class="circletool underline-02" style="display:inline-block" ></div>
            <div id="4" class="circletool cut-02" style="display:inline-block" ></div>
            <div id="5" class="circletool copy" style="display:inline-block"></div>
            <div id="6" class="circletool paste" style="display:inline-block"></div>
        </ejs-tooltip>
    </div>
`,

  data: function() {
    return {
    };
  },
  methods: {
        onBeforeRender(args) {
            this.$refs.box.content = 'Loading...';
            this.$refs.box.dataBind();
            let ajax = new Ajax('./tooltip.json', 'GET', true);
            ajax.send().then(
                (result) => {
                    result = JSON.parse(result);
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].Id == args.target.id) {
                            /* tslint:disable */
                            this.$refs.box.content = result[i].Name;
                            /* tslint:enable */
                        }
                    }
                    this.$refs.box.dataBind();
                },
                (reason) => {
                    this.$refs.box.content = reason.message;
                    this.$refs.box.dataBind();
                });
        }
  }

});