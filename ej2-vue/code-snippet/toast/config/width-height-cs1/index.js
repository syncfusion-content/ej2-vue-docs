
import Vue from 'vue';
import { ToastPlugin } from '@syncfusion/ej2-vue-notifications';
import { ButtonPlugin, RadioButtonPlugin, CheckBoxPlugin, ChangeEventArgs as CheckBoxChange, ChangeEventArgs } from '@syncfusion/ej2-vue-buttons';
Vue.use(ToastPlugin);
Vue.use(RadioButtonPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
       <div id='container'>
        <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click.native="showBtnClick">Show Toast</ejs-button>
        <ejs-toast ref='defaultRef' id='element' title='Matt sent you a friend request' content='You have a new friend request yet to accept' :position='position' width=400 height=150></ejs-toast>
            <div class='row' style="padding-top: 20px" id= "toast_pos_target">
              <table>
                <tr>
                  <td>
                      <div style='padding:25px 0 0 0;'>
                          <ejs-radiobutton ref='topAlign' label='Top' name='toast' value='Target' :change='checkboxChange'></ejs-radiobutton>
                      </div>
                  </td>
                  <td>
                      <div style='padding:25px 0 0 0;'>
                          <ejs-radiobutton ref='bottomAlign' label='Bottom' checked=true name='toast' value='Global' :change='checkboxChange1'></ejs-radiobutton>
                      </div>
                  </td>
                </tr>
                <tr>
                   <td>
                     <div style='padding:25px 0 0 0;'>
                          <ejs-checkbox label='100% Width' :change='onChange'></ejs-checkbox>
                      </div>
                   </td>
                </tr>
              </table>
            </div>
        <br/><br/>
    </div>
  </div>
`,

  name: 'app',
  data: function(){
    return {
        position: { X: "Center", Y: "Bottom" },
    }
  },
  mounted: function() {
      this.$refs.defaultRef.show();
      this.timeDelay = 500;
      this.toast = document.getElementById('element').ej2_instances[0];
  },
  methods: {
      showBtnClick: function(args){
          this.$refs.defaultRef.show();
      },
      onChange: function(e) {
          if (e.checked) {
             this.toast.hide();
             this.toast.width = "100%";
             this.toast.title="";
             this.toast.content="<div class='e-custom'>Take a look at our next generation <b>Javascript</b> <a href='https://ej2.syncfusion.com/home/index.html' target='_blank'>LEARN MORE</a></div>";
             this.toastShow(this.timeDelay);
          } else {
             this.toast.hide();
             this.toast.width= 300;
             this.toast.title= 'Matt sent you a friend request',
             this.toast.content='You have a new friend request yet to accept',
             this.toastShow(this.timeDelay);
         }
      },
      checkboxChange: function(e) {
        if (e.event.target.checked) {
            this.toast.position.Y = "Top";
            this.toast.hide();
            this.toastShow(this.timeDelay);
        }
      },

      checkboxChange1: function(e) {
        if (e.event.target.checked) {
            this.toast.position.Y = "Bottom";
            this.toast.hide();
            this.toastShow(this.timeDelay);
        }
      },

      toastShow: function(timeOutDelay) {
         setTimeout(() => {
            this.toast.show();
        }, timeOutDelay);
      }
   }

});