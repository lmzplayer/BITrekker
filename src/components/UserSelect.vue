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
            <el-col :span="4" v-if="this.NowFun == '1' || this.NowFun == 'CheckDelete'"><div class="grid-content ep-bg-purple" />
                <el-button size="large" @click="update">更新数据库</el-button>
            </el-col>
            <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
    </div>
</template>

<script>
    import {getMainData} from '../js/request.js'
    import {getDetailedData} from '../js/request.js'
    import {getRecycleData} from '../js/request.js'
    import {getUpdate} from '../js/request.js'

    export default{

        name:"UserSelect",
        data(){
            return{
                date_selected:"2023-06-01", 
                building_selected:'',  
                buildings: ["综合教学楼B" ,"文萃楼" ,"综合教学楼A" ,"理科教学楼" ],
                class_number:'',
                class_type:'',
                FreeTime:['第1节','第2节','第3节','第4节','第5节'],
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
                this.FilterResult.classroom_feature.push(0);
            }
            this.FilterResult.teaching_building = this.buildings
            console.log(this.FilterResult)
            console.log(this.NowFun)
            if(this.NowFun == 'RecycleBin' || this.NowFun == '0') {
                let ReceiveData = getRecycleData(this.FilterResult)
                console.log("接收到数据")
                const res = ReceiveData.then(res =>{
                        console.log(res)
                        this.$emit('GetRecycleBinData',res)
                    }
                )
                console.log(res)
                this.FilterResult.classroom_feature = []
                this.FilterResult.period = []
            }
            if(this.NowFun == 'CheckDelete' || this.NowFun == '1') {
                let ReceiveData = getDetailedData(this.FilterResult)
                console.log("Check接收到数据")
                const res = ReceiveData.then(res =>{
                        console.log(res)
                        this.$emit('GetCheckDeleteData',res)
                    }
                )
                console.log(res)
                this.FilterResult.classroom_feature = []
                this.FilterResult.period = []
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
                this.FilterResult.classroom_feature = []
                this.FilterResult.period = []
                
            }
        },
        props: ['NowFun'],
        watch: {
            NowFun(newValue, oldValue) {
                console.log("删除完毕/恢复完毕")
                for(var i = 0; i < this.FreeTime.length; i++) {
                    this.FilterResult.period.push(1);
                }
                this.FilterResult.date = "2023-06-01"
                for(var i = 0; i < this.requirement.length; i++) {
                    this.FilterResult.classroom_feature.push(0);
                }
                this.FilterResult.teaching_building = this.buildings
                console.log(this.FilterResult)
                console.log(this.NowFun)
                if(newValue == 'RecycleBin' || newValue == '0') {
                    let ReceiveData = getRecycleData(this.FilterResult)
                    console.log("接收到数据")
                    const res = ReceiveData.then(res =>{
                            console.log(res)
                            this.$emit('GetRecycleBinData',res)
                        }
                    )
                    console.log(res)
                    this.FilterResult.classroom_feature = []
                    this.FilterResult.period = []
                }
                if(newValue == 'CheckDelete' || newValue == '1') {
                    let ReceiveData = getDetailedData(this.FilterResult)
                    console.log("Check接收到数据")
                    const res = ReceiveData.then(res =>{
                            console.log(res)
                            this.$emit('GetCheckDeleteData',res)
                        }
                    )
                    console.log(res)
                    this.FilterResult.classroom_feature = []
                    this.FilterResult.period = []
                }
                if(newValue == 'UserCheck') {
                    let ReceiveData = getMainData(this.FilterResult)
                    console.log("接收到数据")
                    const res = ReceiveData.then(res =>{
                            console.log(res)
                            this.$emit('GetUserCheckData',res)
                        }
                    )
                    console.log(res)
                    this.FilterResult.classroom_feature = []
                    this.FilterResult.period = []
                    
                }
            }
        },
        methods:{
            update() {
                let xlr = getUpdate()
            },
            send(){
                console.log(this.FreeTime_selected)
                console.log(this.building_selected)
                console.log(this.date_selected)
                console.log(this.requirement_selected)
                console.log(this.FreeTime.length)
                console.log(this.requirement.length)
                var cnt = 0
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
                        cnt = cnt + 1
                        this.FilterResult.period.push(0);
                    }
                }
                if(cnt == this.FreeTime.length) {
                    this.FilterResult.period = []
                    for(var i = 0; i < this.FreeTime.length; i++) {
                        this.FilterResult.period.push(1);
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
                if(this.FilterResult.teaching_building.length == 0) {
                    this.FilterResult.teaching_building = this.buildings
                }
                console.log(this.FilterResult)
                console.log(this.FilterResult)
                console.log(this.NowFun)
                if(this.NowFun == 'RecycleBin' || this.NowFun == '0') {
                    let ReceiveData = getRecycleData(this.FilterResult)
                    console.log("接收到数据")
                    const res = ReceiveData.then(res =>{
                            console.log(res)
                            this.$emit('GetRecycleBinData',res)
                        }
                    )
                    console.log(res)
                    this.FilterResult.classroom_feature = []
                    this.FilterResult.period = []
                }
                if(this.NowFun == 'CheckDelete' || this.NowFun == '1') {
                    let ReceiveData = getDetailedData(this.FilterResult)
                    console.log("接收到数据")
                    const res = ReceiveData.then(res =>{
                            console.log(res)
                            this.$emit('GetCheckDeleteData',res)
                        }
                    )
                    console.log(res)
                    this.FilterResult.classroom_feature = []
                    this.FilterResult.period = []
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
                    this.FilterResult.classroom_feature = []
                    this.FilterResult.period = []
                    
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
