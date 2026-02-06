<template>
  <div class="control-container">
    <ejs-carousel :autoPlay="true">
      <e-carousel-items>
        <e-carousel-item template="Cardinal"></e-carousel-item>
        <template v-slot:Cardinal>
          <figure class="img-container">
            <img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="Cardinal"
              style="height: 100%; width: 100%" />
            <figcaption class="img-caption">Cardinal</figcaption>
          </figure>
        </template>
        <e-carousel-item template="kingfisher"></e-carousel-item>
        <template v-slot:kingfisher>
          <figure class="img-container">
            <img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="kingfisher"
              style="height: 100%; width: 100%" />
            <figcaption class="img-caption">kingfisher</figcaption>
          </figure>
        </template>
        <e-carousel-item template="keel-billed-toucan"></e-carousel-item>
        <template v-slot:keel-billed-toucan>
          <figure class="img-container">
            <img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="keel-billed-toucan"
              style="height: 100%; width: 100%" />
            <figcaption class="img-caption">keel-billed-toucan</figcaption>
          </figure>
        </template>
        <e-carousel-item template="yellow-warbler"></e-carousel-item>
        <template v-slot:yellow-warbler>
          <figure class="img-container">
            <img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="yellow-warbler"
              style="height: 100%; width: 100%" />
            <figcaption class="img-caption">yellow-warbler</figcaption>
          </figure>
        </template>
        <e-carousel-item template="bee-eater"></e-carousel-item>
        <template v-slot:bee-eater>
          <figure class="img-container">
            <img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater"
              style="height: 100%; width: 100%" />
            <figcaption class="img-caption">bee-eater</figcaption>
          </figure>
        </template>
      </e-carousel-items>
    </ejs-carousel>
  </div>
</template>

<script setup>

import { CarouselComponent as EjsCarousel, CarouselItemsDirective as ECarouselItems, CarouselItemDirective as ECarouselItem } from '@syncfusion/ej2-vue-navigations';

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