
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple, EventHandler } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
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
`,

  mounted () {
      var timeout;
    document.getElementById('clear').onclick = function () {
    document.getElementById('eventlog').innerHTML = '';
}

var button = document.getElementById('button');
button.addEventListener('mousedown', mouseDownHandler);
button.addEventListener('touchstart', mouseDownHandler);
button.addEventListener('mouseup', mouseUpHandler);
button.addEventListener('touchend', mouseUpHandler);
button.addEventListener('click', clickEventHandler);

function mouseUpHandler() {
    clearInterval(timeout);
}

function mouseDownHandler(event) {
    event.preventDefault();
    timeout = setInterval(clickEventHandler, 200);
}
function clickEventHandler() {
    EventHandler.trigger(button, 'click');
    appendSpanElement('Button click event triggered.<hr>');
}
function appendSpanElement(text) {
    var span = document.createElement('span');
    span.innerHTML = text;
    var log = document.getElementById('eventlog');
    log.insertBefore(span, log.firstChild);
}
  }

});