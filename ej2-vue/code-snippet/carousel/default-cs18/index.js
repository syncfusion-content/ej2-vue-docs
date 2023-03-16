
  import Vue from 'vue';
  import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";

  Vue.use(CarouselPlugin);

  var productVue = Vue.component("product", {
    template: `<figure class="img-container"><img :src="getImage(data.imageName)" :alt="getAlt(data.Name)" style="height:100%;width:100%;" />
      <figcaption class="img-caption">{{data.Name}}</figcaption></figure>`,
    data() {
      return {
        data: {},
      };
    },
    computed: {},
    methods: {
      getImage: function (bird) {
        return "https://ej2.syncfusion.com/products/images/carousel/" + bird + ".png";
      },
      getAlt: function (altText) {
        return altText;
      }
    },
  });

  
new Vue({
	el: '#app',
	template: `
  <div class="control-container">
    <ejs-carousel :dataSource="productItems" :itemTemplate="productTemplate"></ejs-carousel>
  </div>
`,

    data: function() {
      return {
        productItems: [
          { ID: 1, Name: "Cardinal", imageName: 'cardinal' },
          { ID: 2, Name: "Kingfisher", imageName: 'hunei' },
          { ID: 3, Name: "Keel-billed-toucan", imageName: 'costa-rica' },
          { ID: 4, Name: "Yellow-warbler", imageName: 'kaohsiung' },
          { ID: 5, Name: "Bee-eater", imageName: 'bee-eater' }
        ],
        productTemplate: function (e) {
          return {
            template: productVue
          };
        },
      };
    }
  
});