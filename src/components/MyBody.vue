<template>
    <div class="list-container">
        <ul class="list" id="list">
            <li v-for="(classroomInfo, index) in classrooms" :key="index">
                <myClassroom :adim="adim" :index="index" @checkChange="handler" :info="classroomInfo"></myClassroom>
            </li>
        </ul>
    </div>
</template>

<script>
import myClassroom from '../components/MyClassroom.vue'
export default {
    data() {
        return {
            classrooms: [],
            selected: [],
            adim: 1
        }
    },
    components: {
        myClassroom
    },
    methods: {
        handler(is_checked, index) {
            this.selected[index] = is_checked
            console.log(this.selected.map((value, index) => value ? index : -1).filter(index => index !== -1))
        }
    },
    props: ['RecycleBinData', 'CheckDeleteData', 'UserCheckData', 'NowFun'],
    created() { 
        if(this.NowFun == 'RecycleBin') {
            this.classrooms = this.RecycleBinData
            this.adim = 0
        }
        if(this.NowFun == 'CheckDelete') {
            this.classrooms = this.CheckDeleteData
            this.adim = 1
        }
        if(this.NowFun == 'UserCheck') {
            this.classrooms = this.UserCheckData
            this.adim = 2
        }
        for(let i=0;i<this.classrooms.length;i++)
            this.selected.push(false)
        console.log(this.classrooms)
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