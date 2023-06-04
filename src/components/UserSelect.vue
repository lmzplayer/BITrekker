<template>
    <div>
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
                <el-select v-model.lazy="building_selected">
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
            requirement:['插座多','离水房近','离女厕近','离男厕近','空调课调节'],
            requirement_selected:[],
            other_requirement:'',
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
    methods:{
        send(){
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
            this.date_selected = "2023-06-01";
            this.building_selected="";
            this.class_number="";
            this.class_type="";
            this.FreeTime_selected=[];
            this.requirement_selected="";
            this.other_requirement="";
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