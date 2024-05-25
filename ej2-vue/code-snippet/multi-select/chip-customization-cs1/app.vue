<template>
    <div id="app">
        <div id='container' style="margin:50px auto 0; width:250px;">
            <br>
            <ejs-multiselect id='multiselect' :value='colorValues' :tagging='tagging' :dataSource='colorsData'
                mode="Box" placeholder="Favorite Colors" :fields='fields'></ejs-multiselect>
        </div>
    </div>
</template>
<script>
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
    name: "App",
    components: {
        "ejs-multiselect": MultiSelectComponent
    },
    data() {
        return {
            colorsData: [
                { Color: 'Chocolate', Code: '#75523C' },
                { Color: 'CadetBlue', Code: '#3B8289' },
                { Color: 'DarkOrange', Code: '#FF843D' },
                { Color: 'DarkRed', Code: '#CA3832' },
                { Color: 'Fuchsia', Code: '#D44FA3' },
                { Color: 'HotPink', Code: '#F23F82' },
                { Color: 'Indigo', Code: '#2F5D81' },
                { Color: 'LimeGreen', Code: '#4CD242' },
                { Color: 'OrangeRed', Code: '#FE2A00' },
                { Color: 'Tomato', Code: '#FF745C' }
            ],
            colorValues: ['#75523C', '#4CD242', '#FF745C'],
            fields: { text: 'Color', value: 'Code' }
        }
    },
    methods: {
        tagging: function (e) {
            var msObject = document.getElementById("multiselect").ej2_instances[0];
            e.setClass(e.itemData[msObject.fields.text].toLowerCase());
        }
    }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";

.e-multi-select-wrapper .e-chips {
    opacity: 0.9;
}

.e-multi-select-wrapper .e-chips:hover {
    opacity: 1;
}

.e-multi-select-wrapper .e-chips .e-chips-close.e-icon::before,
.e-multi-select-wrapper .e-chips .e-chipcontent,
.e-multi-select-wrapper .e-chips .e-chipcontent:hover {
    color: #ffffff;
}

.e-chips.chocolate,
.e-chips.chocolate:hover {
    background-color: #75523C;
}

.e-chips.darkorange,
.e-chips.darkorange:hover {
    background-color: #FF843D;
}

.e-chips.darkred,
.e-chips.darkred:hover {
    background-color: #CA3832;
}

.e-chips.fuchsia,
.e-chips.fuchsia:hover {
    background-color: #D44FA3;
}

.e-chips.cadetblue,
.e-chips.cadetblue:hover {
    background-color: #3B8289;
}

.e-chips.hotpink,
.e-chips.hotpink:hover {
    background-color: #F23F82;
}

.e-chips.indigo,
.e-chips.indigo:hover {
    background-color: #2F5D81;
}

.e-chips.limegreen,
.e-chips.limegreen:hover {
    background-color: #4CD242;
}

.e-chips.orangered,
.e-chips.orangered:hover {
    background-color: #FE2A00;
}

.e-chips.tomato,
.e-chips.tomato:hover {
    background-color: #FF745C;
}
</style>
