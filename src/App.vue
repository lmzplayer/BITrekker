<template>
    <div>
        <userPage></userPage>
        <hr>
        <MyBody></MyBody>
        <hr>
        <BottomBar></BottomBar>
    </div>
</template>

<script>
    import userPage from './pages/userPage'
    import BottomBar from './components/BottomBar'
    import MyBody from './components/MyBody'
    export default {
        name:'App',
        components:{
            userPage,
            BottomBar,
            MyBody
        }
    }
</script>
