<template>
    <div>
        <UserSelect v-bind:NowFun="NowFun" @GetRecycleBinData="TransferRecycleBinData"></UserSelect>
        <MyBody v-bind:RecycleBinData="RecycleBinData" v-bind:NowFun="NowFun"></MyBody>
    </div>
    
</template>

<script>
    import UserSelect from '../components/UserSelect'
    import MyBody from '../components/MyBody'

    export default {
        name:'RecycleBin',
        components:{
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
            TransferRecycleBinData(RecycleBinData) {
                this.RecycleBinData = RecycleBinData
            }
        }
    }
</script>