<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />日期:</el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
                <el-input type="date" v-model="select_form.free_time.date"/>
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />教学楼：</el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
                <el-select v-model="select_form.affiliated_teaching_building">
                    <el-option v-for="item in buildings" :value="item" :key="item"/>
                </el-select>
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />教室编号：</el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
                <el-input v-model="select_form.classroom_number" placeholder="Type something"/>
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />空闲时间：</el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
                <el-select v-model="temp_detailed_time_period" multiple>
                    <el-option v-for="item in FreeTime" :value="item" :key="item"/>
                </el-select>
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />其他需求：</el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
                <el-select v-model="temp_classroom_features" multiple>
                    <el-option v-for="item in requirement" :value="item" :key="item"/>
                </el-select>
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />AND</el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" />
                <el-input v-model="select_form.other_requirement" placeholder="Type something"/>
            </el-col>
            <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="4"><div class="grid-content ep-bg-purple" />
                <el-button size="large" @click="send">确定</el-button>
            </el-col>
            <el-col :span="4"><div class="grid-content ep-bg-purple" />
                <el-button size="large" @click="reset">重置</el-button>
            </el-col>
            <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name:"AddEdit",
    data(){
        return{
            buildings: ["工训楼" ,"文萃楼" ,"理学楼" ,"综合教学楼" ,"理科教学楼" ],
            FreeTime:['第1节','第2节','第3节','第4节','第5节','第6节','第7节','第8节','第9节','第10节','第11节','第12节','第13节'],
            requirement:['插座多','离水房近','离女厕近','离男厕近','空调可调节'],
            temp_detailed_time_period:[],
            temp_classroom_features:[],
            select_form:{ 
                affiliated_teaching_building:'', 
                classroom_number:'',
                free_time:{
                    date:'2023-06-01',
                    detailed_time_period:[]
                },
                classroom_features:[],
                other_requirement:'',
            }
        }
    },
    props: ['EditMsg'],
        created() {
            console.log("Test" + JSON.stringify(this.EditMsg))
        },
    mounted() {
        /* api 获取 main界面label(this.requirement)
        axios.get("/web_data_test/get_label_liist").then(res=>{
            console.log(res.data)
            this.requirement = res.data
        })
        */
        //将EditMsg内容赋值到输入框中
        this.temp_detailed_time_period=[]
        this.temp_classroom_features=[]
        this.select_form.affiliated_teaching_building=this.EditMsg.affiliated_teaching_building
        this.select_form.classroom_number=this.EditMsg.classroom_number
        this.select_form.free_time.date=this.EditMsg.free_time[0].date
        console.log("show date got:" + this.EditMsg.free_time[0].date)
        this.select_form.other_requirement=this.EditMsg.recommended

        for (var i=0;i<this.EditMsg.free_time[0].detailed_time_period.length;i++){
            if (this.EditMsg.free_time[0].detailed_time_period[i] == true){
                this.temp_detailed_time_period.push(this.FreeTime[i])
            }
        }
        for (var i=0;i<this.EditMsg.classroom_features.length;i++){
            if (this.EditMsg.classroom_features[i] == true){
                this.temp_classroom_features.push(this.requirement[i])
            }
        }
    },
    methods:{
        send(){
            /*
                send：select_form -> JSON
                this:               apifox:
                classroom_type    -> classroom_name
                other_requirement -> recommend
            */
            /* 
                将array[string]转换为array[boolean]
                this.temp_detailed_time_period -> this.select_form.free_time.detailed_time_period
                this.temp_classroom_features   -> this.select_form.classroom_features
            */
            for(var i = 0; i < this.FreeTime.length; i++) {
                var flag = false
                for(var j = 0; j < this.temp_detailed_time_period.length; j++) {
                    if(this.FreeTime[i] == this.temp_detailed_time_period[j]) {
                        flag = true
                    }
                }
                if(flag == true) {
                    this.select_form.free_time.detailed_time_period.push(true);
                }
                else {
                    this.select_form.free_time.detailed_time_period.push(false);
                }
            }
            for(var i = 0; i < this.requirement.length; i++) {
                var flag = false
                for(var j = 0; j < this.temp_classroom_features.length; j++) {
                    if(this.requirement[i] == this.temp_classroom_features[j]) {
                        flag = true
                    }
                }
                if(flag == true) {
                    this.select_form.classroom_features.push(true);
                }
                else {
                    this.select_form.classroom_features.push(false);
                }
            }
            console.log("AddEdit send JSON : " + JSON.stringify(this.select_form))
            this.$emit('GetChangeCheckDelete','CheckDelete')
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
        },
        reset(){
            this.temp_detailed_time_period='',
            this.temp_classroom_features='',
            this.select_form.affiliated_teaching_building='',
            this.select_form.classroom_number='',
            this.select_form.free_time.date='2023-06-01',
            this.select_form.free_time.detailed_time_period=[],
            this.select_form.classroom_features=[],
            this.select_form.other_requirement=''
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