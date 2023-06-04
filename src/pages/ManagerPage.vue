<template>
    <div>
        <div :class="ManagerFun" id="ManagerPage" v-if="ManagerFun == 'SignIn'">
            <SignIn></SignIn>
        </div>
        <div :class="ManagerFun" id="ManagerPage" v-else-if="ManagerFun == 'CheckDelete'">
            <CheckDelete></CheckDelete>
        </div>
        <div :class="ManagerFun" id="ManagerPage" v-else-if="ManagerFun == 'RecycleBin'">
            <RecycleBin></RecycleBin>
        </div>
        <div :class="ManagerFun" id="ManagerPage" v-else-if="ManagerFun == 'AddEdit'">
            <AddEdit></AddEdit>
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
        props: ['ManagerFun']
    }
</script>

<style>

</style>