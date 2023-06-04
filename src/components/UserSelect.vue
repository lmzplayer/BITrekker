<template>
    <div>
        <form>
            <input type="date" value="2023-06-02"/>
            <select multiple="multiple">
                <option value="1">第1节</option>
                <option value="2">第2节</option>
                <option value="3">第3节</option>
                <option value="4">第4节</option>
                <option value="5">第5节</option>
                <option value="6">第6节</option>
            </select>
            <select multiple="multiple">
                <option value="GongXun">工训楼</option>
                <option value="WenCui">文萃楼</option>
                <option value="LiXue">理学楼</option>
                <option value="ZongHe">综合教学楼</option>
                <option value="LiKe">理科教学楼</option>
            </select>
            <select multiple="multiple">
                <option value="Socket">插座多</option>
                <option value="Water">离水房近</option>
                <option value="Women">离女厕近</option>
                <option value="Men">离男厕近</option>
                <option value="Air">空调可调节</option>
            </select>
            <button>提交</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:'UserSelect'
    }
</script>