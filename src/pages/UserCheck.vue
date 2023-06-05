<template>
    <div>
        <UserSelect v-bind:NowFun="NowFun"></UserSelect>
    </div>
    
</template>

<script>
    import UserSelect from '../components/UserSelect'
    export default {
        name:'UserCheck',
        components:{
            UserSelect
        },
        data() {
            return {
                NowFun: 'UserCheck'
            }
        }
    }
</script>