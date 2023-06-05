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

    export default {
        name:'SignIn',
        methods:{
            submitForm() {
                let password = document.getElementsByName('password')[0].value;
                console.log(`Password: ${password}`);
                // 在这里可以将用户名和密码提交到服务器
                this.$emit('GetChangeCheckDelete','CheckDelete')
            }
        }
    }
</script>

<style>
    .container {
        border: 2px solid black;
        width: 50%;
        margin: 30% auto;
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
        /* 设置组件最大宽度 */
    }
</style>