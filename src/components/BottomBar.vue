<template>
    <div class="BottomBarContainer">
        <div id='BottomBar' class="BottomBar" v-if="Page == 'User'">
            <button v-on:click="ChangeCheck">
                <img class="BottomBarSvg" src="../assets/home.svg">
                <div>查询</div>
            </button>
            <button v-on:click="ChangeMap">
                <img class="BottomBarSvg" src="../assets/map.svg">
                <div>地图</div>
            </button>
        </div>
        <div id='BottomBar' class="BottomBar" v-else-if="Page == 'Manager' && ManagerFun == 'CheckDelete'">
            <button v-on:click="ChangeAddEdit">
                <img class="BottomBarSvg" src="../assets/add_circle.svg">
                <div>新增</div>
            </button>
            <button v-on:click="DeleteClassRoom">
                <img class="BottomBarSvg" src="../assets/delete.svg">
                <div>删除</div>
            </button>
        </div>
        <div id='BottomBar' class="BottomBar" v-else-if="Page == 'Manager' && ManagerFun == 'RecycleBin'">
            <button v-on:click="RecoverClassRoom">
                <img class="BottomBarSvg" src="../assets/undo.svg">
                <div>恢复</div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BottomBar',
    methods: {

        //跳转到地图页面
        ChangeMap() {
            this.$emit('GetFun', 'Map')
        },

        //跳转到查询页面
        ChangeCheck() {
            this.$emit('GetFun', 'Check')
        },

        //跳转到新增编辑页面
        ChangeAddEdit() {
            this.$emit('GetFun', 'AddEdit')
        },

        //请求删除教室
        DeleteClassRoom() {
            this.$emit('DeleteClassRoom')
        },

        //请求恢复删除
        RecoverClassRoom() {
            this.$emit('RecoverClassRoom')
        }
    },
    props: ['Page', 'UserFun', 'ManagerFun']
}
</script>

<style>
.BottomBarContainer {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
}

.BottomBar {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid grey;
    width: 100%;
    float: left;
    background-color: white;
}

.BottomBarSvg {
    height: 36px;
}
</style>