import VueRouter from 'vue-router'
import UserMap from '../pages/UserMap'
import SignIn from '../pages/SignIn'
import AddEdit from '../pages/AddEdit'
import UserCheck from '../pages/UserCheck'
import CheckDelete from '../pages/CheckDelete'
import RecycleBin from '../pages/RecycleBin'
import MyHeader from '../components/MyHeader'
import ManagerHeader from '../components/ManagerHeader'
import ManagerPage from '../pages/ManagerPage'
import UserPage from '../pages/UserPage'

export default new VueRouter({
    routes:[
        {
            path:'/managerPage',
            component:ManagerPage,
            children:[
                {
                    path:'signIn',
                    component:SignIn
                },
                {
                    path:'addEdit',
                    component:AddEdit
                },
                {
                    path:'checkDelete',
                    component:CheckDelete
                },
                {
                    path:'recycleBin',
                    component:RecycleBin
                }
            ]
        },
        {
            path:'/userPage',
            component:UserPage,
            children:[
                {
                    path:'userMap',
                    component:UserMap
                },
                {
                    path:'userCheck',
                    component:UserCheck
                },
            ]
        },
        {
            path:'myHeader',
            component:MyHeader
        },
        {
            path:'managerHeader',
            component:ManagerHeader
        }
    ]
})
