<template>
    <div class="list-container">
        <ul class="list" id="list">
            <li v-for="(classroomInfo, index) in classrooms" :key="index">
                <myClassroom ref="child" @jumpToEditPageB="jumpToEditPage" :adim="NowFun" :index="index" @checkChange="checkChange" :info="classroomInfo"></myClassroom>
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
            reset: false
        }
    },
    components: {
        myClassroom
    },
    methods: {
        jumpToEditPage(param) {
            console.log("Body gets param" + JSON.stringify(param))
            this.$emit('toEditPage', param)
        },
        checkChange(index, flag){
            console.log("index flag + " + index + flag)
            this.selected[index] = flag
            console.log("selected[flag]" + this.selected)
        }
    },
    props: ['classrooms', 'NowFun', 'Delete', 'Recovery'],
    emits: ['toEditPage'],
    created() { 
        console.log("lmz" + this.Delete)
        for(let i=0;i<this.classrooms.length;i++)
            this.selected.push(false)
        // console.log("classrooms = " + this.classrooms)
        // console.log("selected = " + this.selected)
    },
    watch:{
        classrooms(_new){
            console.log("Body new classrooms" + JSON.stringify(_new[0]))
            while(this.selected.length < _new.length)
                this.selected.push(false)
            for(let i=0;i<this.selected.length;i++)
                this.selected[i] = false
        },
        Delete(_new){
            if(_new === true){
                console.log("Bodyselect" + this.selected)
                let dset = this.selected.map((value, index) => value ? this.classrooms[index] : -1).filter(index => index !== -1)
                console.log("Body Delete param" + JSON.stringify(dset[0]))
                for(let i in dset){
                    console.log(JSON.stringify(dset[i]))
                    if(i == dset.length -1){
                        postDeleteClassroom({
                            affiliated_teaching_building : dset[i].classroom_name,
                            classroom_number : dset[i].classroom_id
                        }).then(()=>{
                            this.$emit('sendOver','1')
                        })
                        break
                    }
                    postDeleteClassroom({
                        affiliated_teaching_building : dset[i].classroom_name,
                        classroom_number : dset[i].classroom_id
                    })
                }
                console.log("refs" + this.$refs)
                for(let i = 0;i<this.selected.length;i++)
                    if(this.selected[i] == true){
                        this.selected[i] = false
                        console.log("deleted:" + i)
                        this.$refs.child[i].resetIsCheck()
                    }
                

            }
        },
        Recovery(_new){
            if(_new === true){
                let dset = this.selected.map((value, index) => value ? this.classrooms[index] : -1).filter(index => index !== -1)
                console.log("Body Recovery param" + JSON.stringify(dset[0]))
                for(let i in dset){
                    console.log(JSON.stringify(dset[i]))
                    postDeleteClassroom({
                        affiliated_teaching_building : dset[i].classroom_name,
                        classroom_number : dset[i].classroom_id
                    })
                    console.log({
                        affiliated_teaching_building : dset[i].classroom_name,
                        classroom_number : dset[i].classroom_id
                    })
                }
                for(let i = 0;i<this.selected.length;i++)
                if(this.selected[i] == true){
                        this.selected[i] = false
                        console.log("deleted:" + i)
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