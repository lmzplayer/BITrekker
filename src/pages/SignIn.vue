<template>
    <div class="container">
        <div class="row">
            <label class="label">管理员密码：</label>
            <input class="input" type="text" name="password">
        </div>
        <button class="btn" v-on:click="submitForm">进入管理界面</button>
    </div>
</template>

<script>
import { getAdim } from '../js/request.js'

export default {
    name: 'SignIn',
    data() {
        return {
            pass: {
                password: String
            }
        }
    },
    methods: {

        //将密码提交至服务器进行登录验证
        submitForm() {
            let password = document.getElementsByName('password')[0].value;
            this.pass.password = password
            let xhr = getAdim(JSON.stringify(this.pass));
            this.$emit('GetChangeCheckDelete', 'CheckDelete');
        }
    }
}
</script>

<style>
.container {
    border: 2px solid black;
    width: 50%;
    margin-top: 5%;
    margin-left: 15%;
    margin-right: 15%;
    padding: 50px;
}

.row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.label {
    flex: 1;
    text-align: right;
    margin-right: 10px;
}

.input {
    flex: 2;
    padding: 5px;
}

.btn {
    width: 100%;
    padding: 10px;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
}

.my-map-component {
    width: 100%;
    max-width: 1200px;
}
</style>