<template>
    <div>
        <div :class="UserFun" id="UserPage" v-if="UserFun == 'Check'">
            <UserCheck></UserCheck>
        </div>
        <div :class="UserFun" id="UserPage" v-else-if="UserFun == 'Map'">
            <UserMap></UserMap>
        </div>
    </div>
</template>

<script>
    import UserCheck from './UserCheck'
    import UserMap from './UserMap'
    export default {
        name:'UserPage',
        components: {
            UserCheck,
            UserMap
        },
        props: ['UserFun']
    }
</script>

<style>

</style>