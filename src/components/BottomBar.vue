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
        name:'BottomBar',
        methods: {
            ChangeMap() {
                this.$emit('GetFun','Map')
            },
            ChangeCheck() {
                this.$emit('GetFun','Check')
            },
            ChangeAddEdit() {
                this.$emit('GetFun','AddEdit')
            },
            DeleteClassRoom() {
                console.log("I want to delete")
                this.$emit('DeleteClassRoom')
            },
            RecoverClassRoom() {
                console.log("I want to recover")
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
