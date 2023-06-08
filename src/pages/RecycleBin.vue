<template>
    <div>
        <UserSelect v-bind:NowFun="NowFun" @GetRecycleBinData="TransferRecycleBinData"></UserSelect>
        <MyBody v-bind:classrooms="RecycleBinData" v-bind:Recovery="Recovery" v-bind:NowFun="NowFun"
            @sendOver="FinishRecover"></MyBody>
    </div>
</template>

<script>
import UserSelect from '../components/UserSelect'
import MyBody from '../components/MyBody'

export default {
    name: 'RecycleBin',
    components: {
        UserSelect,
        MyBody
    },
    data() {
        return {
            NowFun: 'RecycleBin',
            RecycleBinData: []
        }
    },
    methods: {

        //传输回收站页面数据
        TransferRecycleBinData(RecycleBinData) {
            this.RecycleBinData = RecycleBinData
        },

        //恢复完毕
        FinishRecover() {
            this.$emit('Recovered')
            this.NowFun = '0'
        }
    },
    props: ['Recovery']
}
</script>