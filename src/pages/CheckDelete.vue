<template>
    <div>
        <UserSelect v-bind:NowFun="NowFun"></UserSelect>
        <MyBody></MyBody>
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
                NowFun: 'CheckDelete'
            }
        }
    }
</script>