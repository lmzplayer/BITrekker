<template>
    <div>
        <UserSelect v-bind:NowFun="NowFun" @GetCheckDeleteData="TransferCheckDeleteData"></UserSelect>
        <MyBody v-bind:classrooms="CheckDeleteData" v-bind:Delete="Delete" v-bind:NowFun="NowFun" @sendOver="FinishDelete"
            @toEditPage="ChangeEdit"></MyBody>
    </div>
</template>

<script>
import UserSelect from '../components/UserSelect'
import MyBody from '../components/MyBody'

export default {
    name: 'CheckDelete',
    components: {
        UserSelect,
        MyBody
    },
    data() {
        return {
            NowFun: 'CheckDelete',
            CheckDeleteData: [],
        }
    },
    created() {
        this.TransferCheckDeleteData({})
    },
    methods: {

        //传输编辑删除页面的数据
        TransferCheckDeleteData(CheckDeleteData) {
            this.CheckDeleteData = CheckDeleteData
        },

        //删除完毕
        FinishDelete(m) {
            this.$emit('Deleted')
            this.NowFun = '1'
        },

        //跳转到新增编辑页面
        ChangeEdit(param) {
            this.$emit('ToEdit', param)
        }
    },
    props: ['Delete'],
}
</script>