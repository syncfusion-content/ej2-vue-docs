
import Vue from 'vue';
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { Button} from "@syncfusion/ej2-buttons";
Vue.use(ToolbarPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
        <br>
         <ejs-toolbar id="toolbar" class="toggle" :created='create'>
    <e-items>
             <e-item template='<button class="e-btn" id="media_btn"></button>'></e-item>
                <e-item type='Separator'></e-item>
                <e-item template='<button class="e-btn" id="zoom_btn"></button>'></e-item>
                <e-item type='Separator'></e-item>
                <e-item template='<button class="e-btn" id="undo_btn"></button>'></e-item>
                <e-item type='Separator'></e-item>
                <e-item template='<button class="e-btn" id="filter_btn"></button>'></e-item>
                <e-item type='Separator'></e-item>
                <e-item template='<button class="e-btn" id="visible_btn"></button>'></e-item>
          </e-items>
    </ejs-toolbar>
    <br/>
        <div id="content">
          This content will be hidden, when you click on hide button and toggle get an active state as show, otherwise it will be visible.
        </div>
    </div>
`,

  name: 'app',
  data () {

},
  methods: {
    create: function(args) {
     var zoomBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-zoomin-icon', isToggle: true });
    zoomBtn.appendTo('#zoom_btn');

    var mediaBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-play-icon', isToggle: true });
    mediaBtn.appendTo('#media_btn');

    var undoBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-undo-icon', isToggle: true });
    undoBtn.appendTo('#undo_btn');

    var filterBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-filter-icon', isToggle: true });
    filterBtn.appendTo('#filter_btn');

    var visibleBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-hide-icon', isToggle: true, content:'Hide'});
    visibleBtn.appendTo('#visible_btn');


    //Toggle button click event handlers
    zoomBtn.element.onclick = (): void => {
        if (zoomBtn.element.classList.contains('e-active')) {
            zoomBtn.iconCss = 'e-icons e-zoomout-icon';
        } else {
            zoomBtn.iconCss = 'e-icons e-zoomin-icon';
        }
    };

    mediaBtn.element.onclick = (): void => {
        if (mediaBtn.element.classList.contains('e-active')) {
            mediaBtn.iconCss = 'e-icons e-pause-icon';
        } else {
            mediaBtn.iconCss = 'e-icons e-play-icon';
        }
    };

    undoBtn.element.onclick = (): void => {
        if (undoBtn.element.classList.contains('e-active')) {
            undoBtn.iconCss = 'e-icons e-redo-icon';
        } else {
            undoBtn.iconCss = 'e-icons e-undo-icon';
        }
    };

    filterBtn.element.onclick = (): void => {
        if (filterBtn.element.classList.contains('e-active')) {
            filterBtn.iconCss = 'e-icons e-filternone-icon';
        } else {
            filterBtn.iconCss = 'e-icons e-filter-icon';
        }
    };

    visibleBtn.element.onclick = (): void => {
        if (visibleBtn.element.classList.contains('e-active')) {
            document.getElementById('content').style.display = 'none';
            visibleBtn.content = 'Show';
            visibleBtn.iconCss = 'e-icons e-show-icon';
        } else {
            document.getElementById('content').style.display = 'block';
            visibleBtn.content = 'Hide';
            visibleBtn.iconCss = 'e-icons e-hide-icon';
        }
    };
}
  }

});