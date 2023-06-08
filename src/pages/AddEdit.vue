<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />日期:
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
                <el-input type="date" v-model="select_form.free_time.date" />
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />教学楼：
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
                <el-select v-model="select_form.affiliated_teaching_building">
                    <el-option v-for="item in buildings" :value="item" :key="item" />
                </el-select>
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />教室名称：
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
                <el-input v-model="select_form.classroom_name" placeholder="Type something" />
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />教室编号：
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
                <el-input v-model="select_form.classroom_id" placeholder="Type something" />
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />空闲时间：
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
                <el-select v-model="temp_detailed_time_period" multiple>
                    <el-option v-for="item in FreeTime" :value="item" :key="item" />
                </el-select>
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />其他需求：
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
                <el-select v-model="temp_classroom_features" multiple>
                    <el-option v-for="item in requirement" :value="item" :key="item" />
                </el-select>
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />AND
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
                <el-input v-model="select_form.other_requirement" placeholder="Type something" />
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="grid-content ep-bg-purple" />
            </el-col>
            <el-col :span="4">
                <div class="grid-content ep-bg-purple" />
                <el-button size="large" @click="send">确定</el-button>
            </el-col>
            <el-col :span="4">
                <div class="grid-content ep-bg-purple" />
                <el-button size="large" @click="reset">重置</el-button>
            </el-col>
            <el-col :span="8">
                <div class="grid-content ep-bg-purple" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { getEditClassroom } from '../js/request'

export default {
    name: "AddEdit",
    data() {
        return {
            buildings: ["综合教学楼B", "文萃楼", "综合教学楼A", "理科教学楼"],
            FreeTime: ['第1节', '第2节', '第3节', '第4节', '第5节'],
            requirement: ['插座多', '离水房近', '离女厕近', '离男厕近', '空调可调节'],
            temp_detailed_time_period: [],
            temp_classroom_features: [],
            select_form: {
                affiliated_teaching_building: '',
                classroom_id: '',
                classroom_name: '',
                free_time: {
                    date: '2023-06-01',
                    time: []
                },
                classroom_features: [],
                other_requirement: '',
            }
        }
    },
    props: ['EditMsg'],
    created() {

    },
    mounted() {

        //将需要编辑的教室信息展示在输入框内
        if (JSON.stringify(this.EditMsg) != '{}') {
            this.temp_detailed_time_period = []
            this.temp_classroom_features = []
            this.select_form.affiliated_teaching_building = this.EditMsg.affiliated_teaching_building
            this.select_form.classroom_name = this.EditMsg.classroom_name
            this.select_form.classroom_id = this.EditMsg.classroom_id
            this.select_form.free_time.date = this.EditMsg.free_time.date
            this.select_form.other_requirement = this.EditMsg.recommended

            for (var i = 0; i < this.EditMsg.free_time.detailed_time_period.length; i++) {
                if (this.EditMsg.free_time.detailed_time_period[i] == true) {
                    this.temp_detailed_time_period.push(this.FreeTime[i])
                }
            }
            for (var i = 0; i < this.EditMsg.classroom_features.length; i++) {
                if (this.EditMsg.classroom_features[i] == true) {
                    this.temp_classroom_features.push(this.requirement[i])
                }
            }
        }

    },
    methods: {

        //向服务器发送需要添加的教室的相关信息
        send() {
            for (var i = 0; i < this.FreeTime.length; i++) {
                var flag = false
                for (var j = 0; j < this.temp_detailed_time_period.length; j++) {
                    if (this.FreeTime[i] == this.temp_detailed_time_period[j]) {
                        flag = true
                    }
                }
                if (flag == true) {
                    this.select_form.free_time.time.push(true);
                }
                else {
                    this.select_form.free_time.time.push(false);
                }
            }
            for (var i = 0; i < this.requirement.length; i++) {
                var flag = false
                for (var j = 0; j < this.temp_classroom_features.length; j++) {
                    if (this.requirement[i] == this.temp_classroom_features[j]) {
                        flag = true
                    }
                }
                if (flag == true) {
                    this.select_form.classroom_features.push(true);
                }
                else {
                    this.select_form.classroom_features.push(false);
                }
            }
            let xhr = getEditClassroom(this.select_form);
            this.$emit('GetChangeCheckDelete', 'CheckDelete')
        },

        //重置输入框
        reset() {
            this.temp_detailed_time_period = '',
                this.temp_classroom_features = '',
                this.select_form.affiliated_teaching_building = '',
                this.select_form.classroom_id = '',
                this.select_form.classroom_name = '',
                this.select_form.free_time.date = '2023-06-01',
                this.select_form.free_time.time = [],
                this.select_form.classroom_features = [],
                this.select_form.other_requirement = ''
        }
    }
}
</script>

<style scoped>.el-row {
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

.el-input {
    width: 240px !important;
}

.el-select {
    width: 240px !important;
}
</style>