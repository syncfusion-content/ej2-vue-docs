
  import Vue from "vue";
  import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";

  Vue.use(CarouselPlugin);

  ;
new Vue({
	el: '#app',
	template: `
  <div class="control-container">
    <ejs-carousel>
      <e-carousel-items>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/cardinal.png' alt='cardinal' style='height:100%;width:100%;' /><figcaption class='img-caption'>Cardinal</figcaption></figure" :interval="firstInterval"></e-carousel-item>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/hunei.png' alt='kingfisher' style='height:100%;width:100%;' /><figcaption class='img-caption'>Kingfisher</figcaption></figure>" :interval="secondInterval"></e-carousel-item>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/costa-rica.png' alt='keel-billed-toucan' style='height:100%;width:100%;' /><figcaption class='img-caption'>Keel-billed-toucan</figcaption></figure>" :interval="thirdInterval"></e-carousel-item>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png' alt='yellow-warbler' style='height:100%;width:100%;' /><figcaption class='img-caption'>Yellow-warbler</figcaption></figure>" :interval="fourthInterval"></e-carousel-item>
        <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/bee-eater.png' alt='bee-eater' style='height:100%;width:100%;' /><figcaption class='img-caption'>Bee-eater</figcaption></figure>" :interval="fifthInterval"></e-carousel-item>
      </e-carousel-items>
    </ejs-carousel>
  </div>
`,

    data: function () {
      return {
        animation: { effect: "Fade" },
        firstInterval: 3000,
        secondInterval: 1000,
        thirdInterval: 2000,
        fourthInterval: 5000,
        fifthInterval: 6000,
      };
    },
  
});