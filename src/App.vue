<template>
    <div>
        <MyHeader @GetPage="ChangePage" @GetFun="ChangeFun"></MyHeader>
        <div>
            <div :class="Page" id="App" v-if="Page == 'User'">
                <UserPage v-bind:UserFun="UserFun"></UserPage>
            </div>
            <div :class="Page" id="App" v-else-if="Page == 'Manager'">
                <ManagerPage v-bind:ManagerFun="ManagerFun" @RecoverFinish="ChangeRecover" @DeleteFinish="ChangeDelete" @GetFun="ChangeFun" v-bind:Delete="Delete" v-bind:Recovery="Recovery"></ManagerPage>
            </div>
        </div>
        <BottomBar v-bind:Page="Page" v-bind:ManagerFun="ManagerFun" v-bind:UserFun="UserFun" @GetFun="ChangeFun" @DeleteClassRoom="GetDelete" @RecoverClassRoom="GetRecover"></BottomBar>
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
                ManagerFun:'SignIn',
                Delete:false,
                Recovery:false
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
                    console.log("删除过来的")
                    this.ManagerFun = NowFun
                }
                
            },
            GetDelete () {
                this.Delete = true
            },
            GetRecover () {
                this.Recovery = true
            },
            ChangeDelete() {
                this.Delete = false
            },
            ChangeRecover () {
                this.Recovery = false
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