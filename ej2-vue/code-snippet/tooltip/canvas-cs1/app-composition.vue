<template>
    <div id='app'>
        <ejs-tooltip target='#square'  cssClass='e-tooltip-css' content='SVG Square'>
            <ejs-tooltip target='#ellipse'  cssClass='e-tooltip-css' content='SVG Ellipse'>
                <ejs-tooltip target='#polyline'  cssClass='e-tooltip-css' content='SVG Polyline'>
                    <ejs-tooltip target='#circle'  cssClass='e-tooltip-css' content='Canvas Circle'>
                        <ejs-tooltip target='#triangle'  cssClass='e-tooltip-css' content='Canvas Triangle'>
                            <div id="box" class="e-prevent-select">
                                <div class="circletool" id="rectShape" style="left:1%;top:10%">
                                        <svg>
                                        <rect id="square" class="shape" x="50" y="20" width="50" height="50" style="fill:#FDA600;stroke:none;stroke-width:5;stroke-opacity:0.9" />
                                        </svg>
                                </div>
                                <div class="circletool" id="ellipseShape" style="top:65%;">
                                    <svg>
                                        <ellipse id="ellipse" class="shape" cx="100" cy="50" rx="20" ry="40" style="fill:#0450C2;stroke:none;stroke-width:2" />
                                    </svg>
                                </div>
                                <div class="circletool" id="polyShape" style="top:25%;left:40%">
                                    <svg>
                                        <polyline id="polyline" class="shape" points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" style="fill:#ffffff;stroke:#0450C2;stroke-width:4" />
                                    </svg>
                                </div>
                                <div class="circletool" id="circleShape" style="top:16%;left:72%">
                                    <canvas id="circle" ref="circle" class="shape" width="60" height="60"></canvas>
                                </div>
                                <div class="circletool" id="triShape" style="top:73%;left:76%">
                                    <canvas id="triangle" ref="triangle" class="shape" width="100" height="50"></canvas>
                                </div>
                            </div>
                        </ejs-tooltip>
                    </ejs-tooltip>
                </ejs-tooltip>
            </ejs-tooltip>
        </ejs-tooltip>
    </div>
</template>

<script setup>
import { TooltipComponent as EjsTooltip} from '@syncfusion/ej2-vue-popups';
import { onMounted, ref } from 'vue';

const triangle = ref(null);
const circle = ref(null);

  onMounted(()=> {
      let canvas = triangle.value;
      let context;
      if (canvas.getContext) {
          context = canvas.getContext('2d');
          context.beginPath();
          context.moveTo(0, 50);
          context.lineTo(100, 50);
          context.lineTo(50, 0);
          context.fillStyle = "#FDA600";
          context.fill();
      }
      canvas = circle.value;
      context = canvas.getContext('2d');
      let centerX = canvas.width / 2;
      let centerY = canvas.height / 2;
      let radius = 30;
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = '#0450C2';
      context.fill();
  });
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

@media (max-width: 500px) {
    #rectShape {        
        left: -11% !important;        
    }

    #ellipseShape {        
        left: -20% !important;        
    }

    #polyShape {        
        left: 28% !important;        
    }

    #circleShape {        
        left: 68% !important;        
    }

    #triShape {        
        left: 65% !important;        
    }
}

@media (min-width: 500px) and (max-width: 600px) {
    #triShape {        
        left: 70% !important;        
    }
}

#container {
    width: 80%;
    margin: 0 auto;
}

.e-tooltip-css {
    filter: drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.25));
}

#control-container {
    
    padding: 0 !important;
    
}

#box {
    border: 1px solid #dddddd;
    background: #ffffff;
    box-sizing: border-box;
    height: 330px;
    position: relative;
}

.circletool {
    position: absolute;
}

</style>