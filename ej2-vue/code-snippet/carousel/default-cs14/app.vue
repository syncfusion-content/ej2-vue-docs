

<template>
  <div class="control-container">
    <ejs-carousel :indicatorsTemplate="indicatorsTemplate">
      <e-carousel-items>
        <e-carousel-item template="<div class='slide-content'>Slide 1</div>"></e-carousel-item>
        <e-carousel-item template="<div class='slide-content'>Slide 2</div>"></e-carousel-item>
        <e-carousel-item template="<div class='slide-content'>Slide 3</div>"></e-carousel-item>
        <e-carousel-item template="<div class='slide-content'>Slide 4</div>"></e-carousel-item>
        <e-carousel-item template="<div class='slide-content'>Slide 5</div>"></e-carousel-item>
      </e-carousel-items>
    </ejs-carousel>
  </div>
</template>

<script>
  import Vue from "vue";
  import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";

  Vue.use(CarouselPlugin);

  var indicatorsVue = Vue.component("indicators", {
    template: `<div class="indicator"  indicator-index="{data.index}">
        <div class="preview-content">{{getContent(data.index)}}</div>
    </div>`,
    computed: {},
    methods: {
      getContent: function (index) {
        var slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];
        return slides[index];
      },
    },
  });

  export default {
    data: function () {
      return {
        indicatorsTemplate: function () {
          return {
            template: indicatorsVue,
          };
        },
      };
    },
  };
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

  .e-carousel {
    background-color: #adb5bd;
    height: 300px !important;
    margin: 0 auto;
    width: 500px !important;
  }

  .e-carousel .slide-content {
    align-items: center;
    display: flex;
    font-size: 1.25rem;
    height: 100%;
    justify-content: center;
  }

  .e-carousel .e-carousel-items,
  .e-carousel .e-carousel-navigators {
    height: calc(100% - 3rem);
  }

  .e-carousel .e-carousel-navigators .e-previous,
  .e-carousel .e-carousel-navigators .e-next,
  .e-carousel .e-carousel-navigators .nav-btn {
    padding: 0;
  }

  .e-carousel .e-carousel-navigators .nav-btn:active,
  .e-carousel .e-carousel-navigators .nav-btn:focus,
  .e-carousel .e-carousel-navigators .nav-btn:hover {
    background-color: transparent !important;
    color: inherit;
  }

  .e-carousel .e-carousel-navigators svg {
    fill: none;
    stroke: currentColor;
    stroke-linecap: square;
    stroke-width: 8px;
    height: 2rem;
    vertical-align: middle;
    width: 2rem;
  }

  .e-carousel .e-carousel-navigators .e-previous svg {
    transform: rotate(180deg);
  }

  .e-carousel .e-carousel-indicators .e-indicator-bars .e-indicator-bar .indicator {
    background-color: #adb5bd;
    border: 1px solid black;
    border-radius: 0.25rem;
    cursor: pointer;
    height: 3.5rem;
    margin: 0.5rem;
    width: 5rem;
  }

  .e-carousel .e-carousel-indicators .e-indicator-bars .e-indicator-bar.e-active .indicator {
    background-color: #c1cdda;
  }

  .preview-content {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }
</style>


