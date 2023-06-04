<template>
    <div>
        <div :class="Hidden" id='MyHeader' v-if="Hidden == false">
            <button v-on:click="ChangeManager">齿轮图标</button>
        </div>
        <div id='MyHeader' v-else-if="Hidden != false">
            <button v-on:click="ChangeCheckDelete">查询</button>
            <button v-on:click="ChangeRecycleBin">回收站</button>
            <button v-on:click="ChangeUser">退出</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'MyHeader',
        data() {
            return {
                Hidden:false
            }
        },
        methods: {
            ChangeManager() {
                this.Hidden = true
                this.$emit('GetPage','Manager')
            },
            ChangeUser() {
                this.Hidden = false
                this.$emit('GetPage','User')
            },
            ChangeCheckDelete() {
                this.$emit('GetFun','CheckDelete')
            },
            ChangeRecycleBin() {
                this.$emit('GetFun','RecycleBin')
            }
        }
    }
</script>

