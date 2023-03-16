
  import Vue from 'vue';
  import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";

  Vue.use(ButtonPlugin);
  Vue.use(CarouselPlugin);

  var indicatorsVue = Vue.component("indicators", {
    template: `<div class="indicator"  indicator-index="{data.index}">
      </div>`,
    data() {
      return {};
    },
    computed: {},
    methods: {},
    },
  });

  
new Vue({
	el: '#app',
	template: `
  <div class="control-container">
    <ejs-carousel :indicatorsTemplate="indicatorsTemplate">
      <e-carousel-items>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/cardinal.png' alt='cardinal' style='height:100%;width:100%;' /><figcaption class='img-caption'>Cardinal</figcaption></figure"></e-carousel-item>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/hunei.png' alt='kingfisher' style='height:100%;width:100%;' /><figcaption class='img-caption'>Kingfisher</figcaption></figure>"></e-carousel-item>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/costa-rica.png' alt='keel-billed-toucan' style='height:100%;width:100%;' /><figcaption class='img-caption'>Keel-billed-toucan</figcaption></figure>"></e-carousel-item>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png' alt='yellow-warbler' style='height:100%;width:100%;' /><figcaption class='img-caption'>Yellow-warbler</figcaption></figure>"></e-carousel-item>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/bee-eater.png' alt='bee-eater' style='height:100%;width:100%;' /><figcaption class='img-caption'>Bee-eater</figcaption></figure>"></e-carousel-item>
      </e-carousel-items>
    </ejs-carousel>
  </div>
`,

      data: function() {
          return {
              indicatorsTemplate: function () {
                  return {
                      template: indicatorsVue,
                  };
              },
          };
      }
  
});