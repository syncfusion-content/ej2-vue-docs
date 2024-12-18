
import Vue from 'vue';
import { ChipListPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ChipListPlugin);


new Vue({
	el: '#app',
	template: `
    <ejs-chiplist id="chip">
        <e-chips>
            <e-chip leadingIconCss="trendingIcon" 
            template='<a href="https://timesofindia.indiatimes.com/news" target="_blank" class="anchorElement">#BreakingNews</a><span class="textElement">125k posts</span>'></e-chip>
            <e-chip leadingIconCss="cameraIcon" 
            template='<a href="https://blog.google/products/photos/" target="_blank" class="anchorElement">#PhotoOfTheDay</a>'></e-chip>
            <e-chip leadingIconCss="trendingIcon"
            template='<a href="https://indianexpress.com/section/technology/" target="_blank" class="anchorElement">#TechNews</a><span class="textElement">107k posts</span>'></e-chip>
        </e-chips>
    </ejs-chiplist>
`,



});