<template>
    <div id="UserSelect">
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />日期:</el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
                <el-input type="date" v-model="date_selected"/>
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />教学楼：</el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
                <el-select v-model.lazy="building_selected"  multiple>
                    <el-option v-for="item in buildings" :value="item" :key="item"/>
                </el-select>
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />空闲时间：</el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
                <el-select v-model="FreeTime_selected" multiple>
                    <el-option v-for="item in FreeTime" :value="item" :key="item"/>
                </el-select>
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />其他需求：</el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
                <el-select v-model="requirement_selected" multiple>
                    <el-option v-for="item in requirement" :value="item" :key="item"/>
                </el-select>
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="4"><div class="grid-content ep-bg-purple" />
                <el-button size="large" @click="send">确定</el-button>
            </el-col>
            <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
    </div>
</template>

<script>
    import axios from 'axios';
    import {getMainData} from '../js/request.js'

    export default{

        name:"UserSelect",
        data(){
            return{
                date_selected:"2023-06-01", 
                building_selected:'',  
                buildings: ["工训楼" ,"文萃楼" ,"理学楼" ,"综合教学楼" ,"理科教学楼" ],
                class_number:'',
                class_type:'',
                FreeTime:['第1节','第2节','第3节','第4节','第5节','第6节','第7节','第8节','第9节','第10节','第11节','第12节','第13节'],
                FreeTime_selected:[],
                requirement:['插座多','离水房近','离女厕近','离男厕近','空调可调节'],
                requirement_selected:[],
                other_requirement:'',
                FilterResult:{
                    period: [],
                    date:"",
                    classroom_feature: [],
                    teaching_building: []
                }
            }
        },
        mounted() {
            /* api 获取 需求label
            axios.get("/web_data_test/get_label_liist").then(res=>{
                console.log(res.data)
                this.requirement = res.data
            })
            */
        },
        props: ['NowFun'],
        methods:{
            send(){
                console.log(this.FreeTime_selected)
                console.log(this.building_selected)
                console.log(this.date_selected)
                console.log(this.requirement_selected)
                for(var i = 0; i < this.FreeTime.length; i++) {
                    var flag = false
                    for(var j = 0; j < this.FreeTime_selected.length; j++) {
                        if(this.FreeTime[i] == this.FreeTime_selected[j]) {
                            flag = true
                        }
                    }
                    if(flag == true) {
                        this.FilterResult.period.push(1);
                    }
                    else {
                        this.FilterResult.period.push(0);
                    }
                }
                this.FilterResult.date = this.date_selected
                for(var i = 0; i < this.requirement.length; i++) {
                    var flag = false
                    for(var j = 0; j < this.requirement_selected.length; j++) {
                        if(this.requirement[i] == this.requirement_selected[j]) {
                            flag = true
                        }
                    }
                    if(flag == true) {
                        this.FilterResult.classroom_feature.push(1);
                    }
                    else {
                        this.FilterResult.classroom_feature.push(0);
                    }
                }
                this.FilterResult.teaching_building = this.building_selected
                console.log(this.FilterResult)
                var SendData = JSON.stringify(this.FilterResult)
                console.log(SendData)
                var ReceiveData = SendData;
                //ReceiveData = getMainData(SendData)

                ReceiveData = [
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

                var ClassRoomData = JSON.parse(ReceiveData)
                console.log(ClassRoomData)
                if(this.NowFun == 'RecycleBin') {
                    this.$emit('GetRecycleBinData',ClassRoomData)
                }
                if(this.NowFun == 'CheckDelete') {
                    this.$emit('GetCheckDeleteData',ClassRoomData)
                }
                if(this.NowFun == 'UserCheck') {
                    this.$emit('GetUserCheckData',ClassRoomData)
                }
                /* api 发送数据
                //console.log(this.requirement);
                var requirement_selected2=Object.values(this.requirement_selected)
                //console.log(requirement_selected2)
                var requirement_selected3=[]
                for (var i=0;i<this.requirement.length;i++){
                    if (requirement_selected2.includes(this.requirement[i])){
                        requirement_selected3.push('true')
                    }
                    else{
                        requirement_selected3.push('false')
                    }
                }
                //console.log(requirement_selected3)

                var FreeTime_selected2=Object.values(this.FreeTime_selected)

                //if (checkNull){
                //    alert()
                //}
                //else{
                    axios.get("/web_data_test/edit_classroom",{
                        params:{
                            affiliated_teaching_building: this.building_selected,
                            classroom_id: this.class_number,
                            classroom_name: "6",
                            free_time: {
                                date: this.date_selected,
                                time: FreeTime_selected2,
                            },
                            classroom_features: requirement_selected3,
                            recommended: 0
                        }
                    }).then(res=>{
                        console.log(res.data)
                    })
                //}
                */
            }
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 10px;
    }
    .el-row:last-child {
        margin-bottom: 0;
    }
    .el-col {
        border-radius: 2px;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 15px;
    }

    .el-input{ 
        width: 240px !important;
    }
    .el-select{
        width: 240px !important;
    }
</style>