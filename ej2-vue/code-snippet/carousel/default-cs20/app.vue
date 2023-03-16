

<template>
  <div>
    <ejs-button cssClass="e-info" v-on:click.native="prevBtnClick">Previous</ejs-button>
    <ejs-button cssClass="e-info" v-on:click.native="nextBtnClick">Next</ejs-button>
    <div class="control-container">
      <ejs-carousel>
        <e-carousel-items>
          <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/cardinal.png' alt='cardinal' style='height:100%;width:100%;' /><figcaption class='img-caption'>Cardinal</figcaption></figure"></e-carousel-item>
          <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/hunei.png' alt='kingfisher' style='height:100%;width:100%;' /><figcaption class='img-caption'>Kingfisher</figcaption></figure>"></e-carousel-item>
          <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/costa-rica.png' alt='keel-billed-toucan' style='height:100%;width:100%;' /><figcaption class='img-caption'>Keel-billed-toucan</figcaption></figure>"></e-carousel-item>
          <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png' alt='yellow-warbler' style='height:100%;width:100%;' /><figcaption class='img-caption'>Yellow-warbler</figcaption></figure>"></e-carousel-item>
          <e-carousel-item template="<figure class='img-container'><img src='https://ej2.syncfusion.com/products/images/carousel/bee-eater.png' alt='bee-eater' style='height:100%;width:100%;' /><figcaption class='img-caption'>Bee-eater</figcaption></figure>"></e-carousel-item>
        </e-carousel-items>
      </ejs-carousel>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";
  import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

  Vue.use(ButtonPlugin);
  Vue.use(CarouselPlugin);

  export default {
    data: function () {
      return {};
    },
    methods: {
      prevBtnClick: function (event) {
        var carouselObj = document.querySelector(".e-carousel").ej2_instances[0];
        carouselObj.prev();
      },
      nextBtnClick: function (event) {
        var carouselObj = document.querySelector(".e-carousel").ej2_instances[0];
        carouselObj.next();
      },
    },
  };
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

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


