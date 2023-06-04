<template>
    <div>
        <form>
            <input type="date" value="2023-06-02"/>
            <select multiple="multiple">
                <option value="GongXun">工训楼</option>
                <option value="WenCui">文萃楼</option>
                <option value="LiXue">理学楼</option>
                <option value="ZongHe">综合教学楼</option>
                <option value="LiKe">理科教学楼</option>
            </select>
            <input type="text" placeholder="请输入教室编号">
            <button>提交</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:'ManagerSelect'
    }
</script>