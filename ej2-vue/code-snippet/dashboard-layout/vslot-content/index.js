import Vue from "vue";
// Import syncfusion Dashboard Layout component from layouts package
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";

Vue.use(DashboardLayoutPlugin);

new Vue({
	el: '#app',
	template: `
    <div class="col-lg-8 control-section">
        <!--  Dashboard Layout component declaration -->
        <ejs-dashboardlayout id="defaultLayout" :cellSpacing="spacing" :columns="7">
            <e-panels>
                <e-panel id="panel0" :row="0" :col="0" :sizeX="1" :sizeY="1" header="<div>Panel 0</div>" :content="'panel0Content'">
                <template v-slot:panel0Content>
                    <div class="content">Panel Content</div>
                </template>
                </e-panel>
                <e-panel id="panel1" :row="0" :col="1" :sizeX="3" :sizeY="2" header="<div>Panel 1</div>" :content="'panel1Content'">
                <template v-slot:panel1Content>
                    <div class="content">Panel Content</div>
                </template>
                </e-panel>
                <e-panel id="panel2" :row="0" :col="4" :sizeX="1" :sizeY="3" header="<div>Panel 2</div>" :content="'panel2Content'">
                <template v-slot:panel2Content>
                    <div class="content">Panel Content</div>
                </template>
                </e-panel>
                <e-panel id="panel3" :row="1" :col="0" :sizeX="1" :sizeY="1" header="<div>Panel 3</div>" :content="'panel3Content'">
                <template v-slot:panel3Content>
                    <div class="content">Panel Content</div>
                </template>
                </e-panel>
                <e-panel id="panel4" :row="2" :col="0" :sizeX="2" :sizeY="1" header="<div>Panel 4</div>" :content="'panel4Content'">
                <template v-slot:panel4Content>
                    <div class="content">Panel Content</div>
                </template>
                </e-panel>
                <e-panel id="panel5" :row="2" :col="2" :sizeX="1" :sizeY="1" header="<div>Panel 5</div>" :content="'panel5Content'">
                <template v-slot:panel5Content>
                    <div class="content">Panel Content</div>
                </template>
                </e-panel>
                <e-panel id="panel6" :row="2" :col="3" :sizeX="1" :sizeY="1" header="<div>Panel 6</div>" :content="'panel6Content'">
                <template v-slot:panel6Content>
                    <div class="content">Panel Content</div>
                </template>
                </e-panel>
            </e-panels>
        </ejs-dashboardlayout>
        <!-- end of Dashboard Layout component -->
    </div>
`,

  data: function() {
    return {
        spacing: [10,10]
    };
  }

});