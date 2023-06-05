<template>
    <div>
        <UserSelect v-bind:NowFun="NowFun" @GetCheckDeleteData="TransferCheckDeleteData"></UserSelect>
        <MyBody v-bind:CheckDeleteData="CheckDeleteData" v-bind:NowFun="NowFun"></MyBody>
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
                NowFun: 'CheckDelete',
                CheckDeleteData: []
            }
        },
        mounted(){
            this.TransferCheckDeleteData({})
            console.log("111")
        },
        methods: {
            TransferCheckDeleteData(CheckDeleteData) {
                this.CheckDeleteData = CheckDeleteData
                this.CheckDeleteData = [
                {
                    "affiliated_teaching_building": "文萃楼",
                    "classroom_number": "B139",
                    "free_time": [
                    {
                        "date": "2023-6-4",
                        "detailed_time_period": [
                        true, false, true, false, true
                        ]
                    }
                    ],
                    "classroom_features": [
                    true,false,true
                    ],
                    "recommended": 0
                },
                {
                    "affiliated_teaching_building": "文萃楼",
                    "classroom_number": "B129",
                    "free_time": [
                    {
                        "date": "2023-6-4",
                        "detailed_time_period": [
                        true, true, true, false, true
                        ]
                    }
                    ],
                    "classroom_features": [
                    true,false,true
                    ],
                    "recommended": 0
                },
                {
                    "affiliated_teaching_building": "JOJO楼",
                    "classroom_number": "A119",
                    "free_time": [
                    {
                        "date": "2023-6-4",
                        "detailed_time_period": [
                        true, true, true, false, true
                        ]
                    }
                    ],
                    "classroom_features": [
                    true,true,true
                    ],
                    "recommended": 0
                },
                {
                    "affiliated_teaching_building": "韭菜楼",
                    "classroom_number": "P115",
                    "free_time": [
                    {
                        "date": "2023-6-4",
                        "detailed_time_period": [
                        false, true, true, false, true
                        ]
                    }
                    ],
                    "classroom_features": [
                    true,false,true
                    ],
                    "recommended": 0
                }
                ]
                console.log(this.CheckDeleteData)
            }
        }
    }
</script>