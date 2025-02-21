
import Vue from "vue";
// Import syncfusion Dashboard Layout component from layouts package
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";
// Import syncfusion button component from buttons package
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(DashboardLayoutPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div>
        <div className="col-lg-8 control-section" id="control_dash">
            <div className="content-wrapper">
                <!--  Dashboard Layout component declaration -->
                <ejs-dashboardlayout id='dashboard_default' ref="dashboard" :cellSpacing='cellSpacing' :columns="5" :created="onSave">
                    <e-panels>
                        <e-panel :sizeX="1" :sizeY="1" :row="0" :col="0" content="<div class='content'>0</div>"></e-panel>
                        <e-panel :sizeX="3" :sizeY="2" :row="0" :col="1" content="<div class='content'>1</div>"></e-panel>
                        <e-panel :sizeX="1" :sizeY="3" :row="0" :col="4" content="<div class='content'>2</div>"></e-panel>
                        <e-panel :sizeX="1" :sizeY="1" :row="1" :col="0" content="<div class='content'>3</div>"></e-panel>
                        <e-panel :sizeX="2" :sizeY="1" :row="2" :col="0" content="<div class='content'>4</div>"></e-panel>
                        <e-panel :sizeX="1" :sizeY="1" :row="2" :col="2" content="<div class='content'>5</div>"></e-panel>  
                        <e-panel :sizeX="1" :sizeY="1" :row="2" :col="3" content="<div class='content'>6</div>"></e-panel>  
                    </e-panels>
                </ejs-dashboardlayout>
                <!-- end of Dashboard Layout component -->
            </div>
        </div>
        <div className="col-lg-4 property-section dashboard" id="api_property">
            <div className="row property-panel-content">
                <div className="card-body">
                    <div className="form-group row">
                        <table id ="remove">
                            <tbody>
                                <tr><td> Properties Panel </td></tr>
                                <tr>
                                    <td>
                                        <!--  Button component declaration -->
                                        <ejs-button id="save" cssClass="e-primary"  v-on:click.native="onSave" >Save Panel</ejs-button>
                                    </td>
                                    <td>
                                        <!--  Button component declaration -->
                                        <ejs-button id="restore" cssClass="e-flat e-outline" v-on:click.native="onRestore">Restore Panel</ejs-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
`,

    data: function() {
        return {
            cellSpacing: [20, 20],
            restoreModel: []
        };
    },
    methods: {
        // Restore the initial panels
        onRestore: function(args) {
            // Create instances for Dashboard Layout component
             this.$refs.dashboard.$el.ej2_instances[0].panels = this.$refs.restoreModel;
        },

        // Save the current panels
        onSave: function(args) {
            // Create instances for Dashboard Layout component
            this.$refs.restoreModel = this.$refs.dashboard.$el.ej2_instances[0].serialize();
            this.$refs.restoreModel[0].content = '<div class="content">0</div>';
            this.$refs.restoreModel[1].content = '<div class="content">1</div>';
            this.$refs.restoreModel[2].content = '<div class="content">2</div>';
            this.$refs.restoreModel[3].content = '<div class="content">3</div>';
            this.$refs.restoreModel[4].content = '<div class="content">4</div>';
            this.$refs.restoreModel[5].content = '<div class="content">5</div>';
            this.$refs.restoreModel[6].content = '<div class="content">6</div>';
        },
    },

});