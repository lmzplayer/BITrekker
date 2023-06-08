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
    name: 'ManagerPage',
    components: {
        CheckDelete,
        RecycleBin,
        SignIn,
        AddEdit
    },
    data() {
        return {
            EditMsg: JSON
        }
    },
    props: ['ManagerFun', 'Delete', 'Recovery'],
    methods: {

        //页面转换
        ChangeCheckDelete(NextFun) {
            this.$emit('GetFun', NextFun)
        },

        //删除完毕
        GetDeleted() {
            this.$emit('DeleteFinish')
            this.$emit('GetFun', 'CheckDelete')
        },

        //恢复完毕
        GetRecovered() {
            this.$emit('RecoverFinish')
            this.$emit('GetFun', 'recycleBin')
        },

        //传输新增编辑的数据
        TransferEdit(param) {
            this.EditMsg = param
            this.$emit('GetFun', 'AddEdit')
        }
    },
    created() {

    },
}
</script>