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
    import {getMainData} from '../js/request.js'
    import {getDetailedData} from '../js/request.js'
    import {getRecycleData} from '../js/request.js'

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
        created() {
            /* api 获取 需求label
            axios.get("/web_data_test/get_label_liist").then(res=>{
                console.log(res.data)
                this.requirement = res.data
            })
            */
            console.log("我在这里！")
            for(var i = 0; i < this.FreeTime.length; i++) {
                this.FilterResult.period.push(1);
            }
            this.FilterResult.date = "2023-06-01"
            for(var i = 0; i < this.requirement.length; i++) {
                this.FilterResult.classroom_feature.push(1);
            }
            console.log(this.FilterResult)
            console.log(this.NowFun)
            if(this.NowFun == 'RecycleBin') {
                let ReceiveData = getRecycleData(this.FilterResult)
                this.$emit('GetRecycleBinData',ReceiveData)
            }
            if(this.NowFun == 'CheckDelete') {
                let ReceiveData = getDetailedData(this.FilterResult)
                this.$emit('GetCheckDeleteData',ReceiveData)
            }
            if(this.NowFun == 'UserCheck') {
                let ReceiveData = getMainData(this.FilterResult)
                console.log("接收到数据")
                const res = ReceiveData.then(res =>{
                    console.log(res)
                    this.$emit('GetUserCheckData',res)
                }
                )
                console.log(res)
                
            }
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
                console.log(this.FilterResult)
                console.log(this.NowFun)
                if(this.NowFun == 'RecycleBin') {
                    let ReceiveData = getRecycleData(this.FilterResult)
                    this.$emit('GetRecycleBinData',ReceiveData)
                }
                if(this.NowFun == 'CheckDelete') {
                    let ReceiveData = getDetailedData(this.FilterResult)
                    this.$emit('GetCheckDeleteData',ReceiveData)
                }
                if(this.NowFun == 'UserCheck') {
                    let ReceiveData = getMainData(this.FilterResult)
                    console.log("接收到数据")
                    const res = ReceiveData.then(res =>{
                        console.log(res)
                        this.$emit('GetUserCheckData',res)
                    }
                    )
                    console.log(res)
                    
                }
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