<template>
   <div id='app'>
        <ejs-tooltip ref="tooltip1" target='.e-info' position='RightCenter'>
            <div id="container">
                <form id="details" role="form">
                    <div id="user">
                    <div class="info">User Name:</div>
                    <div class="inputs">
                        <input type="text" ref="uname" id="uname" class="e-info e-input" name="firstname" title="Please enter your name">
                    </div>
                    </div>
                    <br/>
                    <div>
                    <div class="info">Email Address:</div>
                    <div class="inputs">
                        <input type="text" id="mail" class="e-info e-input" name="email" title="Enter a valid email address">
                    </div>
                    </div>
                    <br/>
                    <div>
                    <div class="info">Password:</div>
                        <div class="inputs">
                            <input id="pwd" ref="pwd" type="password" class="e-info e-input" name="password" title="Be at least 8 characters length">
                        </div>
                    </div>
                    <br/>
                    <div>
                    <div class="info">Confirm Password:</div>
                    <div class="inputs">
                        <input id="cpwd" ref="cpwd" type="password" class="e-info e-input" name="Cpwd" title="Re-enter your password">
                    </div>
                    </div>
                    <br/>
                    <div class="btn">
                        <ejs-button id="sample" v-on:click='onSubmit'>Submit</ejs-button>
                        <ejs-button id='clear' v-on:click='onClear' type='reset'>Reset</ejs-button>
                    </div>
                </form>
            </div>
        </ejs-tooltip>
    </div>
</template>
<style>
@import "node_modules/@syncfusion/ej2-base/styles/material.css";
@import "node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
#container {
    border: 1px solid #ddd;
}

#details .info {
    font-weight: bold;
    width: 165px;
    display: inline-block;
    margin-left: 10px;
}
#details .inputs {
    display: inline-block;
}
#details .btn{
  margin-top: 10px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
}
#details #sample{
  margin-left:10px;
}
#details #clear{
  margin-left:10px;
}
#details {
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
}
</style>
<script>
import { TooltipComponent } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

export default {
name: "App",
components: {
"ejs-tooltip":TooltipComponent,
"ejs-button":ButtonComponent
},
  data: function() {
    return {
    };
  },
  methods: {
    onSubmit:function(){
    let name = this.$refs.uname.value;
    let pwd = this.$refs.pwd.value;
    let cpwd = this.$refs.cpwd.value;
    if(name.length > 0 & name.length < 4){
        this.$refs.uname.title = 'Required Minimum 4 Characters';
        this.$refs.uname.style.backgroundColor = 'red';
        let target = this.$refs.uname;
        tooltip1.open(target);
    } else {

        this.$refs.uname.style.backgroundColor = 'white';
    }
    if(pwd !== '' && pwd.length < 8){
        this.$refs.pwd.title = 'Required Minimum 8 Characters';
        this.$refs.pwd.style.backgroundColor = 'red';
        let pwdtarget = this.$refs.pwd;
        tooltip1.open(pwdtarget);
    } else {
        this.$refs.pwd.style.backgroundColor = 'white';
    }
    if(name.length >= 4 && pwd !== '' && pwd.length >= 8  &&  pwd == cpwd ){
        alert('Form Submitted');
    } else {
        alert('Details are not Valid');
    }
    },
    onClear:function(){
        this.$refs.uname.style.backgroundColor = 'white';
        this.$refs.pwd.style.backgroundColor = 'white';
        let target = this.$refs.uname;
        tooltip1.close(target);
        this.$refs.uname.title = 'Please enter your name';
        let pwdtarget = this.$refs.pwd;
        tooltip1.close(pwdtarget);
    }
  }
}
</script>