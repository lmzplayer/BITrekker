<template>
    <div>
        <MyHeader @GetPage="ChangePage" @GetFun="ChangeFun"></MyHeader>
        <div>
            <div :class="Page" id="App" v-if="Page == 'User'">
                <UserPage v-bind:UserFun="UserFun"></UserPage>
            </div>
            <div :class="Page" id="App" v-else-if="Page == 'Manager'">
                <ManagerPage v-bind:ManagerFun="ManagerFun" @GetFun="ChangeFun"></ManagerPage>
            </div>
        </div>
        <BottomBar v-bind:Page="Page" v-bind:ManagerFun="ManagerFun" v-bind:UserFun="UserFun" @GetFun="ChangeFun"></BottomBar>
    </div>
</template>

<script>
    import UserPage from './pages/UserPage'
    import ManagerPage from './pages/ManagerPage'
    import BottomBar from './components/BottomBar'
    import MyHeader from './components/MyHeader'
    export default {
        name:'App',
        data() {
            return {
                Page:'User',
                UserFun:'Check',
                ManagerFun:'SignIn'
            }
        },
        components:{
            UserPage,
            ManagerPage,
            BottomBar,
            MyHeader
        },
        methods: {
            ChangePage(Page) {
                console.log(Page)
                this.Page = Page
                if(this.Page == 'User') {
                    this.ManagerFun = 'SignIn'
                }
                else {
                    this.UserFun = 'Check'
                }
            },
            ChangeFun(NowFun) {
                console.log('App')
                console.log(NowFun)
                if (NowFun == 'Check' || NowFun == 'Map') {
                    this.UserFun = NowFun
                }
                else {
                    this.ManagerFun = NowFun
                }
                
            }
        }
    }
</script>

<style>
#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>