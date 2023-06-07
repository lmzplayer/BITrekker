<template>
    <div>
        <UserSelect v-bind:NowFun="NowFun" @GetCheckDeleteData="TransferCheckDeleteData"></UserSelect>
        <MyBody v-bind:classrooms="CheckDeleteData" v-bind:Delete="Delete" v-bind:NowFun="NowFun" @sendOver="FinishDelete" @toEditPage="ChangeEdit"></MyBody>
    </div>
    
</template>

<script>
    import UserSelect from '../components/UserSelect'
    import MyBody from '../components/MyBody'
    
    export default {
        name:'CheckDelete',
        components:{
            UserSelect,
            MyBody
        },
        data() {
            return {
                NowFun: 'CheckDelete',
                CheckDeleteData: [],
                //Delete: false
            }
        },
        created(){
            this.TransferCheckDeleteData({})
            console.log("Now" + this.Delete)
        },
        methods: {
            TransferCheckDeleteData(CheckDeleteData) {
                this.CheckDeleteData = CheckDeleteData
                console.log("123456   " + this.CheckDeleteData)
            },
            FinishDelete(m) {
                console.log(m)
                this.$emit('Deleted')
                this.NowFun = '1'
            },
            ChangeEdit(param) {
                this.$emit('ToEdit',param)
            }
        },
        props: ['Delete'],
        /*watch: {
            IsDelete() {
                this.IsDelete = this.Delete
            }
        }*/
    }
</script>