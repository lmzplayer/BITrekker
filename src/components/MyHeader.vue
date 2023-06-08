<template>
    <div id='header'>
        <div id="button">
            <div :class="Hidden" id="button1" v-if="Hidden == false">
                <button id="gear" v-on:click="ChangeManager"></button>
            </div>
            <div id="buttons" v-else-if="Hidden != false">
                <button id="button2" v-on:click="ChangeCheckDelete">查询</button>
                <button id="button3" v-on:click="ChangeRecycleBin">回收站</button>
                <button id="button2" v-on:click="ChangeUser">退出</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyHeader',
    data() {
        return {
            Hidden: false
        }
    },
    methods: {

        //跳转到管理员界面
        ChangeManager() {
            this.Hidden = true
            this.$emit('GetPage', 'Manager')
        },

        //跳转到用户界面
        ChangeUser() {
            this.Hidden = false
            this.$emit('GetPage', 'User')
        },

        //跳转到查询删除页面
        ChangeCheckDelete() {
            this.$emit('GetFun', 'CheckDelete')
        },

        //跳转到回收站页面
        ChangeRecycleBin() {
            this.$emit('GetFun', 'RecycleBin')
        }
    }
}
</script>

<style>
#header {
    position: relative;
    z-index: 5;
    width: calc(100%);
    height: 210px;
    left: 0px;
    top: 0px;
    right: 0px;
    background-image: url(../assets/header.png);
    background-size: 100% 100%;
}

#button {
    height: 30px;
    display: flex;
}

#buttons {
    height: 30px;
    position: absolute;
    right: 0;
    z-index: 10;
    flex-direction: row;
    align-items: center;
    width: 200px;
}

#gear {
    width: 30px;
    height: 30px;
    opacity: 0;
}

#button1 {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background-image: url(../assets/gear.png);
    background-size: 100% 100%;
    position: absolute;
    right: 0;
    z-index: 10;
}

#button2 {
    height: 30px;
    width: 30%;
    border: none;
}

#button3 {
    width: 30%;
    height: 30px;
    border-top: none;
    border-bottom: none;
}
</style>

