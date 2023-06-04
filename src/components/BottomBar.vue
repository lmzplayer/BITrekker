<template>
    <div>
        <div id='BottomBar' v-if="Page == 'User'">
            <button v-on:click="ChangeCheck">查询</button>
            <button v-on:click="ChangeMap">地图</button>
        </div>
        <div id='BottomBar' v-else-if="Page == 'Manager' && ManagerFun == 'CheckDelete'">
            <button v-on:click="ChangeAddEdit">新增</button>
            <button>删除</button>
        </div>
        <div id='BottomBar' v-else-if="Page == 'Manager' && ManagerFun == 'RecycleBin'">
            <button>恢复</button>
            <button>永久删除</button>
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
            }
        },
        props: ['Page', 'UserFun', 'ManagerFun']
    }
</script>


<!--
    <template>
    <div :class="bottomContainer" v-if="hidden != true">
        <div v-if="pageStatus === 'user'">
            <button name="query" @click="clickQuery"><el-icon><House /></el-icon>查询</button>
            <button name="map" @click="clickMap"><el-icon><Compass /></el-icon>地图</button>
        </div>
        <div v-else-if="pageStatus === 'admin'">
            <button name="add" @click="clickAdd"><el-icon><CirclePlus /></el-icon>新增</button>
            <button name="remove" @click="clickRemove"><el-icon><Delete /></el-icon>删除</button>
        </div>
        <div v-else-if="pageStatus === 'trash'">
            <button name="restore" @click="clickRestore"><el-icon><RefreshLeft /></el-icon>恢复</button>
            <button name="delete" @click="clickDelete"><el-icon><Delete /></el-icon>永久删除</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hidden:false
            }
        },
        props: {
            pageStatus:{
                default:'user'
            }  //可为'user', 'admin', 'trash', 'hidden' 
        },
        emits: ['../pages/UserCheck', '../pages/AddEdit', '../pages/UserMap'],
        methods: {
            clickQuery() {
                this.$emit('../pages/UserCheck', 'query')//切换至查询页
            },
            clickMap() {
                this.$emit('../pages/UserMap', 'map')//切换至地图页
            },
            clickAdd() {
                this.hidden = true
                this.$emit('../pages/AddEdit', true)//打开新增页
            },
            clickRemove() {
                //选中逻辑位于管理员主页，待补充
            },
            clickRestore() {
                //选中逻辑位于回收站页，待补充
            },
            clickDelete() {
                //选中逻辑位于回收站页，待补充
            }
        }
    }
</script>

<style>
    .bottomContainer {
        align-self: center;
        position: fixed;
        bottom: 20px;
    }
    button {
        color: aqua;
    }
</style>
-->