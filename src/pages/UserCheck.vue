<template>
    <div>
        <UserSelect v-bind:NowFun="NowFun" @GetUserCheckData="TransferUserCheckData"></UserSelect>
        <MyBody v-bind:classrooms="UserCheckData" v-bind:NowFun="NowFun"></MyBody>
    </div>
</template>

<script>
import UserSelect from '../components/UserSelect'
import MyBody from '../components/MyBody'

export default {
    name: 'UserCheck',
    components: {
        UserSelect,
        MyBody
    },
    data() {
        return {
            NowFun: 'UserCheck',
            UserCheckData: []
        }
    },
    methods: {

        //传输教室数据
        TransferUserCheckData(UserCheckData) {
            this.UserCheckData = UserCheckData
        }
    }
}
</script>