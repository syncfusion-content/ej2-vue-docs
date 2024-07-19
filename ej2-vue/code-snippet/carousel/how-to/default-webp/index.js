
import Vue from "vue";
import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(CarouselPlugin);

;
new Vue({
  el: '#app',
  template: `
  <div class="control-container">
    <ejs-carousel animationEffect="Fade">
      <e-carousel-items>
        <e-carousel-item template="Cardinal"></e-carousel-item>
        <template v-slot:Cardinal>
          <figure class="img-container">
            <img src="https://www.gstatic.com/webp/gallery/1.webp" alt="Majestic Valley View" style="height:100%;width:100%;" />
            <figcaption class="img-caption">Majestic Valley View</figcaption>
          </figure>
        </template>
        <e-carousel-item template="kingfisher"></e-carousel-item>
        <template v-slot:kingfisher>
          <figure class="img-container">
            <img src="https://www.gstatic.com/webp/gallery/2.webp" alt="Thrilling Rapids Adventure" style="height:100%;width:100%;" />
            <figcaption class="img-caption">Thrilling Rapids Adventure</figcaption>
          </figure>
        </template>
        <e-carousel-item template="keel-billed-toucan"></e-carousel-item>
        <template v-slot:keel-billed-toucan>
          <figure class="img-container">
            <img src="https://www.gstatic.com/webp/gallery/3.webp" alt="Snowy Stroll" style="height:100%;width:100%;" />
            <figcaption class="img-caption">Snowy Stroll</figcaption>
          </figure>
        </template>
      </e-carousel-items>
    </ejs-carousel>
  </div>
`,

});