<template>
  <div class="control-container">
    <ejs-carousel :dataSource="productItems" :itemTemplate="productTemplate"></ejs-carousel>
  </div>
</template>

<script>

import { CarouselComponent } from "@syncfusion/ej2-vue-navigations";
import { createApp } from "vue";

var productVue = createApp().component("productTemplate", {
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

export default {
  name: "App",
  components: {
    "ejs-carousel": CarouselComponent
  },
  data: function () {
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
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.csss";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.csss";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.csss";

.control-container {
  height: 360px;
  margin: 0 auto;
  width: 600px;
}

.img-container {
  height: 100%;
  margin: 0;
}

.img-caption {
  color: #fff;
  font-size: 1rem;
  position: absolute;
  bottom: 3rem;
  width: 100%;
  text-align: center;
}
</style>