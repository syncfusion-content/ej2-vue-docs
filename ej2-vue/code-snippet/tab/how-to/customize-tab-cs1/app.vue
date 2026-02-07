<template>
    <div id="wrapper" style='margin-top: 20px'>
        <div>
            <ejs-tab id="element" :items='items'></ejs-tab>
        </div>
    </div>
</template>
<script>

import { TabComponent } from '@syncfusion/ej2-vue-navigations';

export default {
    name: "App",
    components: {
        "ejs-tab": TabComponent
    },
    data: function () {
        return {
            items: [
                {
                    header: { 'text': '<div id="template-wrap"><div class="e-image e-andrew"></div><div class="e-title fade-in">Andrew</div></div>' },
                    content: 'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.He is fluent in French and Italian and reads German.He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.'
                },
                {
                    header: { 'text': '<div id="template-wrap"><div class="e-image e-margaret"></div><div class="e-title fade-in">Margaret</div></div>' },
                    content: 'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).She was assigned to the London office temporarily from July through November 1992.'
                },
                {
                    header: { 'text': '<div id="template-wrap"><div class="e-image e-janet"></div><div class="e-title fade-in">Janet</div></div>' },
                    content: 'Janet has a BS degree in chemistry from Boston College (1984).She has also completed a certificate program in food retailing management.Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.'
                }
            ]
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";

#template-wrap {
    display: flex;
}

.e-content .e-item {
    font-size: 12px;
    margin: 10px;
    text-align: justify;
}

.container {
    min-width: 350px;
    max-width: 500px;
    margin: 0 auto;
}

.e-image {
    background-size: 33px;
    width: 33px;
    height: 33px;
    margin: 0 auto;
}

.e-image.e-andrew {
    /* csslint allow: adjoining-classes */
    background-image: url('https://ej2.syncfusion.com/demos/src/images/employees/3.png');
}

.e-image.e-margaret {
    /* csslint allow: adjoining-classes */
    background-image: url('https://ej2.syncfusion.com/demos/src/images/employees/6.png');
}

.e-image.e-janet {
    /* csslint allow: adjoining-classes */
    background-image: url('https://ej2.syncfusion.com/demos/src/images/employees/7.png');
}

.e-tab .e-toolbar-item .e-title {
    margin-top: 8px;
}

.e-toolbar .e-toolbar-items .e-toolbar-item:not(.e-separator),
.e-toolbar .e-toolbar-items .e-toolbar-item .e-tab-wrap {
    width: 125px;
    height: 50px;
}

.e-tab .e-tab-header .e-toolbar-item.e-active .e-tab-wrap {
    /* csslint allow: adjoining-classes */
    background-color: #08c;
}

.e-tab .e-tab-header {
    background-color: #e6e6e6;
}

.e-tab .e-tab-header .e-toolbar-item:not(.e-active) .e-tab-wrap:hover {
    background-color: #f2f2f2;
    color: #000;
}

.e-tab .e-toolbar .e-toolbar-items .e-toolbar-item .e-text-wrap {
    height: 50px;
}

.e-tab .e-toolbar-item.e-active .e-title {
    /* csslint allow: adjoining-classes */
    display: block;
    color: white;
}

.e-tab .e-toolbar-item .e-text-wrap,
.e-tab .e-toolbar-item .e-tab-text {
    width: inherit;
    text-align: center;
}

.e-tab .e-toolbar-item.e-active .e-title.fade-in {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
}

@keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>