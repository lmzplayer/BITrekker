<template>
    <div>
        <div :class="ManagerFun" id="ManagerPage" v-if="ManagerFun == 'SignIn'">
            <SignIn @GetChangeCheckDelete="ChangeCheckDelete"></SignIn>
        </div>
        <div :class="ManagerFun" id="ManagerPage" v-else-if="ManagerFun == 'CheckDelete'">
            <CheckDelete></CheckDelete>
        </div>
        <div :class="ManagerFun" id="ManagerPage" v-else-if="ManagerFun == 'RecycleBin'">
            <RecycleBin></RecycleBin>
        </div>
        <div :class="ManagerFun" id="ManagerPage" v-else-if="ManagerFun == 'AddEdit'">
            <AddEdit @GetChangeCheckDelete="ChangeCheckDelete"></AddEdit>
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
                
            }
        },
        props: ['ManagerFun'],
        methods: {
            ChangeCheckDelete(NextFun) {
                console.log(NextFun)
                this.$emit('GetFun',NextFun)
            }
        }
    }
</script>

<style>

</style>