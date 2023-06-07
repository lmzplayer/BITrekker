<template>
    <div>
        <div :class="ManagerFun" id="ManagerPage" v-if="ManagerFun == 'SignIn'">
            <SignIn @GetChangeCheckDelete="ChangeCheckDelete"></SignIn>
        </div>
        <div :class="ManagerFun" id="ManagerPage" v-else-if="ManagerFun == 'CheckDelete'">
            <CheckDelete v-bind:Delete="Delete" @Deleted="GetDeleted" @ToEdit="TransferEdit"></CheckDelete>
        </div>
        <div :class="ManagerFun" id="ManagerPage" v-else-if="ManagerFun == 'RecycleBin'">
            <RecycleBin v-bind:Recovery="Recovery" @Recovered="GetRecovered"></RecycleBin>
        </div>
        <div :class="ManagerFun" id="ManagerPage" v-else-if="ManagerFun == 'AddEdit'">
            <AddEdit @GetChangeCheckDelete="ChangeCheckDelete" v-bind:EditMsg="EditMsg"></AddEdit>
        </div>
    </div>
</template>

<script>
    import CheckDelete from './CheckDelete'
    import RecycleBin from './RecycleBin'
    import SignIn from './SignIn'
    import AddEdit from './AddEdit'
    export default {
        name:'ManagerPage',
        components: {
            CheckDelete,
            RecycleBin,
            SignIn,
            AddEdit
        },
        data() {
            return {
                //IsDelete: false,
                //IsRecovery: false
                EditMsg:JSON
            }
        },
        props: ['ManagerFun', 'Delete', 'Recovery'],
        methods: {
            ChangeCheckDelete(NextFun) {
                console.log(NextFun)
                this.$emit('GetFun',NextFun)
            },
            GetDeleted() {
                console.log("收到")
                this.$emit('DeleteFinish')
                this.$emit('GetFun','CheckDelete')
            },
            GetRecovered() {
                this.$emit('RecoverFinish')
                this.$emit('GetFun','recycleBin')
            },
            TransferEdit(param) {
                this.EditMsg = param
                console.log("到达ManagerPage")
                console.log("ManagerPage" + JSON.stringify(this.EditMsg))
                this.$emit('GetFun', 'AddEdit')
            }
        },
        created() {
            console.log("Delete is " + this.Delete)
            console.log("Recovery is " + this.Recovery)
        },
        /*watch: {
            Delete() {
                this.IsDelete = this.Delete
            },
            Recovery() {
                this.IsRecovery = this.Recovery
            }
        }*/
    }
</script>

<style>

</style>