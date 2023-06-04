<template>
    <div class="list-container">
        <ul class="list" id="list">
            <li v-for="(classroomInfo, index) in classrooms" :key="index">
                <myClassroom :index="index" @checkChange="handler" :info="classroomInfo"></myClassroom>
            </li>
        </ul>
    </div>
</template>

<script>
import myClassroom from '../components/MyClassroom.vue'
export default {
    data() {
        return {
            classrooms: [
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
                        true, false, true
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
                        true, false, true
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
                        true, true, true
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
                        true, false, true
                    ],
                    "recommended": 0
                }
            ],
            selected: [false, false, false, false]
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