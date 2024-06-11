<template>
    <div>
        <div id="target" class="control-section; position:relative">
            <div>
                <b>JavaScript:</b><br />
                JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized
                in the ECMAScript
                language specification. Alongside HTML and CSS, it is one of the three essential technologies of World Wide
                Web
                content production; the majority of websites employ it and it is supported by all modern Web browsers
                without
                plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language,
                supporting
                object - oriented , imperative, and functional programming styles.
                <br /><br /><br />
                <b>MVC:</b><br />
                Model–view–controller (MVC) is a software architecture pattern which separates the representation of
                information from the user's interaction with it. The model consists of application data, business rules,
                logic, and functions. A view can be any output representation of data, such as a chart or a diagram.
                Multiple views of the same data are possible, such as a bar chart for management and a tabular view for
                accountants. The controller mediates input, converting it to commands for the model or view.The central
                ideas behind MVC are code reusability and in addition to dividing the application into three kinds of
                components, the MVC design defines the interactions between them.
                A controller can send commands to its associated view to change the view's presentation of the model (e.g.,
                by scrolling through a document). It can also send commands to the model to update the model's state (e.g.,
                editing a document).
                A model notifies its associated views and controllers when there has been a change in its state. This
                notification allows the views to produce updated output, and the controllers to change the available set of
                commands. A passive implementation of MVC omits these notifications, because the application does not
                require them or the software platform does not support them.
                A view requests from the model the information that it needs to generate an output representation to the
                user.
            </div>
            <!-- Render Dialog -->
            <ejs-dialog ref="scrollDialog" :header='header' :target='target' :width='width' :showCloseIcon='true'
                :content='content' :open="dlgOpen" :close="dlgClose">
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>

import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { onMounted, ref } from 'vue';

const scrollDialog = ref(null);

const target = '#target';
const width = '335px';
const header = 'Dialog';
const content = '<button class="e-control e-btn" id="targetButton" role="button" >Prevent Dialog Scroll</button>';

onMounted(() => {
    document.getElementById('targetButton').onclick = () => {
        scrollDialog.value.ej2Instances.cssClass = 'e-fixed';
    }
});
const dlgClose = () => {
    document.getElementById('modalbtn').style.display = '';
};
const dlgOpen = () => {
    document.getElementById('modalbtn').style.display = 'none';
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

html,
body,
.control-section {
    height: 120%;
    min-height: 200px;
}

body {
    overflow-y: scroll;
}

#loader {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

.e-fixed {
    position: fixed;
}
</style>