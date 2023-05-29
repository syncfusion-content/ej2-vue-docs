
  import Vue from "vue";
  import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";
  import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

  Vue.use(ButtonPlugin);
  Vue.use(CarouselPlugin);

  var playVue = Vue.component("nextButton", {
    template: `<ejs-button cssClass="e-info playBtn" content="Pause" v-on:click.native="btnClick"></ejs-button>`,
    data() {
      return {
        data: {},
      };
    },
    computed: {},
    methods: {},
  });

  ;
new Vue({
	el: '#app',
	template: `
  <div class="control-container">
    <ejs-carousel :previousButtonTemplate="previousTemplate" :nextButtonTemplate="nextTemplate">
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

    data: function () {
      return {
        playButtonTemplate: function () {
          return {
            template: playVue,
          };
        },
      };
    },
    methods: {
      btnClick: function (event) {
        var buttonObj = document.querySelector(".playBtn").ej2_instances[0];
        var carouselObj = document.querySelector(".e-carousel").ej2_instances[0];
        if (carouselObj.autoPlay) {
          buttonObj.content = "Play";
          carouselObj.autoPlay = false;
        } else {
          buttonObj.content = "Pause";
          carouselObj.autoPlay = true;
        }
      },
    },
  
});