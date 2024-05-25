<template>
    <div id='container'>
        <div class='btncontainer'>
            <ejs-button id='button' cssClass='e-small'>Button</ejs-button>
        </div>
        <div class='event' style='height:auto;'>
            <table title='Event Trace' style='width:100%'>
            <tbody>
            <tr>
                <th>Event Trace</th>
            </tr>
            <tr>
                <td>
                    <div class='eventarea' style='height: 250px;overflow: auto'>
                        <span id='eventlog' style='word-break: normal;'></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class='evtbtn' style='padding:20px 0 0 20px'>
                        <ejs-button id='clear' cssClass='e-small'>Clear</ejs-button>
                    </div>
                </td>
            </tr>
        </tbody>
        </table>
        </div>
    </div>
</template>

<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { enableRipple, EventHandler } from '@syncfusion/ej2-base';
enableRipple(true);

import { onMounted } from 'vue';

let timeout = null;

onMounted(() => {
document.getElementById('clear').onclick = function () {
    document.getElementById('eventlog').innerHTML = '';
}

const button = document.getElementById('button');
button.addEventListener('mousedown', mouseDownHandler);
button.addEventListener('touchstart', mouseDownHandler);
button.addEventListener('mouseup', mouseUpHandler);
button.addEventListener('touchend', mouseUpHandler);
button.addEventListener('click', clickEventHandler);

const mouseUpHandler = function () {
    clearInterval(timeout);
}

const mouseDownHandler = function (event) {
    event.preventDefault();
    timeout = setInterval(clickEventHandler, 200);
}
const clickEventHandler = function () {
    EventHandler.trigger(button, 'click');
    appendSpanElement('Button click event triggered.<hr>');
}
const appendSpanElement = function (text) {
    var span = document.createElement('span');
    span.innerHTML = text;
    var log = document.getElementById('eventlog');
    log.insertBefore(span, log.firstChild);
}
});
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

.btncontainer {
  float: left;
  width: 40%;
}

.event {
  float: right;
  width: 60%;
  border-left: 1px solid #D7D7D7;
}

#eventlog b {
  color: #388e3c;
}

hr {
   margin: 1px 10px 1px 0px;
   border-top: 1px solid #eee;
}
</style>