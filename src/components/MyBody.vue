<template>
    <div class="list-container">
        <ul class="list" id="list">
            <li v-for="(classroomInfo, index) in classrooms" :key="index">
                <myClassroom ref="child" @jumpToEditPageB="jumpToEditPage" :adim="NowFun" :index="index"
                    @checkChange="checkChange" :info="classroomInfo"></myClassroom>
            </li>
        </ul>
    </div>
</template>

<script>
import myClassroom from '../components/MyClassroom.vue'
import { postDeleteClassroom, postRecoverClassroom } from '@/js/request'
export default {
    data() {
        return {
            selected: [],
            reset: false
        }
    },
    components: {
        myClassroom
    },
    methods: {

        //跳转到新增编辑页面
        jumpToEditPage(param) {
            this.$emit('toEditPage', param)
        },

        //选择按钮信息变更
        checkChange(index, flag) {
            this.selected[index] = flag
        }
    },
    props: ['classrooms', 'NowFun', 'Delete', 'Recovery'],
    emits: ['toEditPage'],
    created() {

        //初始化
        for (let i = 0; i < this.classrooms.length; i++)
            this.selected.push(false)
    },
    watch: {

        //初始化
        classrooms(_new) {
            while (this.selected.length < _new.length)
                this.selected.push(false)
            for (let i = 0; i < this.selected.length; i++)
                this.selected[i] = false
        },

        //删除教室
        Delete(_new) {
            if (_new === true) {
                let dset = this.selected.map((value, index) => value ? this.classrooms[index] : -1).filter(index => index !== -1)
                for (let i in dset) {
                    if (i == dset.length - 1) {
                        postDeleteClassroom({
                            affiliated_teaching_building: dset[i].classroom_name,
                            classroom_number: dset[i].classroom_id
                        }).then(() => {
                            this.$emit('sendOver', '1')
                        })
                        break
                    }
                    postDeleteClassroom({
                        affiliated_teaching_building: dset[i].classroom_name,
                        classroom_number: dset[i].classroom_id
                    })
                }
                for (let i = 0; i < this.selected.length; i++)
                    if (this.selected[i] == true) {
                        this.selected[i] = false
                        this.$refs.child[i].resetIsCheck()
                    }

            }
        },

        //恢复教室
        Recovery(_new) {
            if (_new === true) {
                let dset = this.selected.map((value, index) => value ? this.classrooms[index] : -1).filter(index => index !== -1)
                for (let i in dset) {
                    postRecoverClassroom({
                        affiliated_teaching_building: dset[i].classroom_name,
                        classroom_number: dset[i].classroom_id
                    })
                }
                for (let i = 0; i < this.selected.length; i++)
                    if (this.selected[i] == true) {
                        this.selected[i] = false
                        this.$refs.child[i].resetIsCheck()
                    }
                this.$emit('sendOver')
            }
        }
    }
}
</script>

<style>
.list-container {
    height: 1000px;
    overflow-y: scroll;
}

.list {
    padding: 0;
    margin: 0;
    list-style: none;
}
</style>