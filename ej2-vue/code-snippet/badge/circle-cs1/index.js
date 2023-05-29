
import Vue from "vue";


new Vue({
	el: '#app',
	template: `
    <div id='element'>
        <div style="position:relative;display:inline-block;margin:20px 20px 10px 20px;">
            <div class="skype svg_icons"></div>
            <span class="e-badge e-badge-success e-badge-overlap e-badge-notification e-badge-circle">18</span>
        </div>

        <div style="position:relative;display:inline-block;margin:20px 20px 10px 20px;">
            <div class="twitter svg_icons"></div>
            <span class="e-badge e-badge-info e-badge-overlap e-badge-notification e-badge-circle">9</span>
        </div>

        <div style="position:relative;display:inline-block;margin:20px 20px 10px 20px;">
            <div class="facebook svg_icons"></div>
            <span class="e-badge e-badge-info e-badge-overlap e-badge-notification e-badge-circle">2</span>
        </div>

        <div style="position:relative;display:inline-block;margin:20px 20px 10px 20px;">
            <div class="firefox svg_icons"></div>
            <span class="e-badge e-badge-danger e-badge-overlap e-badge-notification e-badge-circle">35</span>
        </div>
    </div>
`,

  data() {
    return {};
  }

});