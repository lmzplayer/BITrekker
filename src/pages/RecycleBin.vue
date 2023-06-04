<template>
    <div>
        <ManagerSelect></ManagerSelect>
        <MyBody></MyBody>
    </div>
    
</template>

<script>
    import ManagerSelect from '../components/ManagerSelect'
    import MyBody from '../components/MyBody'

    export default {
        name:'RecycleBin',
        components:{
            ManagerSelect,
            MyBody
        }
    }
</script>