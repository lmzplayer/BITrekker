<template>
    <div class="list-container">
        <ul class="list" id="list">
            <li v-for="(classroomInfo, index) in classrooms" :key="index">
                <myClassroom @jumpToEditPageB="jumpToEditPage" :adim="NowFun" :index="index" :is_chekced="selected[index]" :info="classroomInfo"></myClassroom>
            </li>
        </ul>
    </div>
</template>

<script>
import myClassroom from '../components/MyClassroom.vue'
import {postDeleteClassroom, postRecoverClassroom} from '@/js/request'
export default {
    data() {
        return {
            selected: [],
        }
    },
    components: {
        myClassroom
    },
    methods: {
        jumpToEditPage(param) {
            console.log("Body gets param" + JSON.stringify(param))
            this.$emit('toEditPage', param)
        }
    },
    props: ['classrooms', 'NowFun', 'Delete', 'Recovery'],
    emits: ['toEditPage'],
    created() { 
        console.log("lmz" + this.Delete)
        for(let i=0;i<this.classrooms.length;i++)
            this.selected.push(false)
        console.log("classrooms = " + this.classrooms)
        console.log("selected = " + this.selected)
    },
    watch:{
        classrooms(_new){
            console.log("Body new classrooms" + _new)
            while(this.selected.length < _new.length)
                this.selected.push(false)
            for(let i=0;i<this.selected.length;i++)
                this.selected[i] = false
        },
        Delete(_new){
            if(_new === true){
                let dset = this.selected.map((value, index) => value ? this.classrooms[index] : -1).filter(index => index !== -1)
                console.log("Body Recovery param" + dset)
                for(i in dset){
                    postDeleteClassroom(JSON.stringify({
                        affiliated_teaching_building : i.affiliated_teaching_building,
                        classroom_number : i.classroom_number
                    }))
                }
                this.$emit('sendOver')
            }
        },
        Recovery(_new){
            if(_new === true){
                let dset = this.selected.map((value, index) => value ? this.classrooms[index] : -1).filter(index => index !== -1)
                console.log("Body Recovery param" + dset)
                for(i in dset){
                    postRecoverClassroom(JSON.stringify({
                        affiliated_teaching_building : i.affiliated_teaching_building,
                        classroom_number : i.classroom_number
                    }))
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